var dog,happyDog,database,foodS,foodStock

function preload()
{
  standingDog=loadImage("images/dogImg.png")
  dogHappy=loadImage("images/dogImg1.png")
}

function setup() {
	createCanvas(500,500);
  var dog= createSprite(250,250,20,20)
  dog.addImage(standingDog)
  dog.scale=0.10
  database=firebase.database()
  foodStock=database.ref('food');
  foodStock.on("value",readStock);


  
}


function draw() {  
  background(46,139,87)
  if (keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(dogHappy)
  }
  drawSprites();
  //add styles here

}
function readStock(data){
  foodS=data.val()
}
function writeStock(x){
database.ref('/').update({
  food:x
})
}


