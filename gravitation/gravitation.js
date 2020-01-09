let game_height = document.getElementById("phaser_game").offsetHeight;
let game_width = document.getElementById("phaser_game").offsetWidth;
// let config = {
//   type: Phaser.AUTO,
//   parent: "phaser_game",
//   height: game_height,
//   width: game_width,
//   physics: {
//     default: "arcade",
//     arcade: {
//       debug: true
//     }
//   },
//   scene: {
//     preload: preload,
//     create: create,
//     update: update
//   }
// };

// let game = new Phaser.Game(config);

// function preload() {
//   this.load.image("rocket", "../assets/rocket.png");
//   this.load.image("earth", "../assets/earth.png");
// }

// let rocket;
// let earth;

// function create() {
//   // Background
//   this.cameras.main.backgroundColor.setTo(255, 255, 255);
//   // Rocket
//   rocket = this.physics.add.sprite(game_width / 3, game_height / 4, "rocket");
//   rocket.setScale(0.4);
//   rocket.body.setAllowGravity(false);
//   rocket.body.velocity.y = -200;

//   // Earth
//   earth = this.physics.add.sprite(game_width / 2, game_height / 2, "earth");
//   earth.setScale(0.4);
//   // Gravitace
//   newton = new GravityWell(game_width / 2, game_height / 2, 10);
// }

// function update() {
//   rocket.body.gravity = new Phaser.Geom.Point(earth.body.x - rocket.body.x, earth.body.y - rocket.body.y);
//   // Normalize and multiply by actual strength of gravity desired
//   rocket.body.gravity = rocket.body.gravity.normalize().multiply(300, 300);
// }
var config = {
  type: Phaser.WEBGL,
  width: game_width,
  height: game_height,
  backgroundColor: "#000",
  parent: "phaser_game",
  scene: {
    preload: preload,
    create: create
  }
};

var game = new Phaser.Game(config);

function preload() {
  this.load.atlas("flares", "../assets/flares.png", "../assets/flares.json");
}

function create() {
  var particles = this.add.particles("flares");

  var well = particles.createGravityWell({
    x: 400,
    y: 300,
    power: 3,
    epsilon: 100,
    gravity: 100
  });

  var emitter = particles.createEmitter({
    frame: ["red", "green"],
    x: 600,
    y: 400,
    lifespan: 4000,
    speed: 200,
    scale: { start: 0.7, end: 0 },
    blendMode: "ADD"
  });
}
