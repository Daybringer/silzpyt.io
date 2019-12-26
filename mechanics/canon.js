// let game_height = window.innerHeight * window.devicePixelRatio - 50;
let game_height = document.getElementById("phaser_game").offsetHeight;
let game_width = document.getElementById("phaser_game").offsetWidth;
var config = {
  type: Phaser.AUTO,
  // width: window.innerWidth * window.devicePixelRatio,
  // height: window.innerHeight * window.devicePixelRatio,
  parent: "phaser_game",
  height: game_height,
  width: game_width,
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 200 },
      debug: false
    }
  },
  scene: {
    preload: preload,
    create: create,
    update: update
  }
};

let block;
let platform;
let cursors;
let velocity;

var game = new Phaser.Game(config);

function preload() {
  this.load.image("canon", "assets/canon.png");
  this.load.image("canon_ball", "assets/ball.png");
  this.load.image("platform", "assets/platform.png");
  this.load.image("canon_stand", "assets/canon_stand.png");
  this.load.image("block", "assets/block.png");
}

function create() {
  // Background
  let { width, height } = this.sys.game.canvas;
  this.cameras.main.backgroundColor.setTo(255, 255, 255);
  //
  //Ground platform
  platform = this.physics.add.staticGroup();
  platform
    .create(0, game_height - 32, "platform")
    .setScale(8, 2)
    .refreshBody();
  //
  //Blocks
  // 34x34 size >> 34x126
  blocks = this.physics.add.group();
  blocks
    .create(
      game_width - 0.2 * game_width,
      game_height - 0.3 * game_height,
      "block"
    )
    .setScale(1, 3);
  blocks
    .create(
      game_width - 0.2 * game_width - 38,
      game_height - 0.3 * game_height,
      "block"
    )
    .setScale(1, 3);
  blocks
    .create(
      game_width - 0.2 * game_width - 18,
      game_height - 0.5 * game_height,
      "block"
    )
    .setScale(1, 3);
  //
  // Canon stand
  canon_stand = this.physics.add.staticGroup();
  canon_stand
    .create(
      game_width - 0.9 * game_width,
      game_height - 0.15 * game_height,
      "canon_stand"
    )
    .setScale(1, 1);
  //
  // Canon
  canon = this.physics.add.sprite(
    game_width - 0.86 * game_width,
    game_height - 0.25 * game_height,
    "canon"
  );
  canon.setAngle(10);
  //
  // Canon ball
  canon_ball = this.physics.add.sprite(game_width, game_height, "canon_ball");
  //
  //
  canon.body.setAllowGravity(false);
  this.physics.add.collider(blocks, platform);
  this.physics.add.collider(blocks, blocks);
  this.physics.add.collider(blocks, canon_ball);
  this.physics.add.collider(canon_ball, platform);
  this.physics.add.collider(canon_ball, canon_ball);

  cursors = this.input.keyboard.createCursorKeys();
  spacebar = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
}

function update() {
  if (Phaser.Input.Keyboard.JustDown(spacebar)) {
    alert("lol");
  }

  this.input.on(
    "pointerdown",
    function(pointer) {
      let angle = Phaser.Math.Angle.Between(
        canon.x,
        canon.y,
        pointer.x,
        pointer.y
      );
      canon.setRotation(angle);
      canon_ball.x = game_width - 0.86 * game_width;
      canon_ball.y = game_height - 0.25 * game_height;

      this.physics.moveTo(canon_ball, pointer.x, pointer.y, 500);
    },
    this
  );
  // this.physics.moveTo(bullet, cursor.x, cursor.y);
}
