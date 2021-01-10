

var canves;
var gameState = 0;
var playerCount;
var database;
var form,player,game;
function setup(){
canves = createCanvas(400,400)
database = firebase.database();
pet = createSprite(200, 50, 50, 80);
  pet.shapeColor = "red";
  pet.debug = true;
  pet.velocityX = -3;
  


game = new Game()
game.getState()
game.start()





}
function draw (){


}
