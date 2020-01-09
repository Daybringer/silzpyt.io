start_velocity = 400;
base_gravity = 250;
canon_ball_mass = 1;
air_density = 0;

// let game_height = window.innerHeight * window.devicePixelRatio - 50;
let game_height = document.getElementById("phaser_game").offsetHeight;
let game_width = document.getElementById("phaser_game").offsetWidth;
var config = {
  type: Phaser.AUTO,
  parent: "phaser_game",
  height: game_height,
  width: game_width,
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: base_gravity },
      debug: true
    }
  },
  scene: {
    preload: preload,
    create: create,
    update: update
  }
};

let cursors;
let velocity;

let game = new Phaser.Game(config);

function preload() {
  this.load.image("canon", "../assets/canon.png");
  this.load.image("canon_ball", "../assets/ball.png");
  this.load.image("platform", "../assets/platform.png");
  this.load.image("canon_stand", "../assets/canon_stand.png");
  this.load.image("block", "../assets/block.png");
}

function create() {
  // Background
  this.cameras.main.backgroundColor.setTo(255, 255, 255);
  //
  //Ground platform
  platform = this.physics.add.sprite(game_width / 2, game_height - 32, "platform");

  platform.displayHeight = game_height / 10;
  platform.displayWidth = game_width + 10;
  platform.setImmovable();
  platform.body.setAllowGravity(false);
  platform.setFrictionX(0.5);
  platform.body.drag.x = 100;

  let block = this.physics.add.sprite(game_width - 0.2 * game_width - 18, game_height - 0.5 * game_height, "block").setScale(1, 6);
  block.setGravityY(1000);
  block.setMass(100);

  // Canon stand
  canon_stand = this.physics.add.staticGroup();
  canon_stand.create(game_width - 0.9 * game_width, game_height - 0.15 * game_height, "canon_stand").setScale(1, 1);
  // Canon
  canon = this.physics.add.sprite(game_width - 0.86 * game_width, game_height - 0.25 * game_height, "canon");
  // Canon ball
  canon_ball = this.physics.add.sprite(game_width, game_height, "canon_ball");
  canon.body.setAllowGravity(false);

  this.physics.add.collider(block, platform);
  this.physics.add.collider(block, canon_ball);
  this.physics.add.collider(canon_ball, platform);
  this.physics.add.collider(canon_ball, canon_ball);

  cursors = this.input.keyboard.createCursorKeys();
  spacebar = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
}

function getValues() {
  let base = document.getElementById("start_velocity").value;
  start_velocity = base;

  let mass = document.getElementById("ball_mass").value;
  let grav = document.getElementById("gravity").value;

  let calc_grav = grav * 51;
  canon_ball.setGravity(0, calc_grav / 2);
}

function update() {
  button = document.getElementById("submit_button");
  button.addEventListener("click", function() {
    getValues();
  });

  if (Phaser.Input.Keyboard.JustDown(spacebar)) {
    alert("lol");
  }

  this.input.on(
    "pointerdown",
    function(pointer) {
      let angle = Phaser.Math.Angle.Between(canon.x, canon.y, pointer.x, pointer.y);
      canon.setRotation(angle);
      canon_ball.x = game_width - 0.86 * game_width;
      canon_ball.y = game_height - 0.25 * game_height;
      canon_ball.setAngularVelocity(1);
      this.physics.moveTo(canon_ball, pointer.x, pointer.y, start_velocity);
    },
    this
  );
  // this.physics.moveTo(bullet, cursor.x, cursor.y);
}
