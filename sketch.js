//Create variables here
var dog, database, foodS, dogImg, dog1Img,x;
function preload()
{
	//load images here
  dogImg = loadImage("images/dogImg.png");
  happyDog = loadImage("images/dogImg1.png");
}

function setup() {
	createCanvas(500, 220);

  database = firebase.database();
  var foodStock = database.ref('food/foodRem');
  foodStock.on('value', readStock);

  dog = createSprite(110,110,10,10);
  dog.addImage(dogImg);
  dog.scale = 0.2;

  x=0
  
//  happyDog = createSprite(250,250,50,50);
  //happyDog.addImage("theDoggy", dog1Img)
 // happyDog.scale = 0.2;
}


function draw() {  
background(46,139,87);

if(keyWentDown("space")  && foodS > 0){
x=0;
  writeStock(1);
  dog.addImage(happyDog);
} else{
  x=x+1
  if(x >50){
  dog.addImage(dogImg);
  }
}

  drawSprites();
  //add styles here

  textSize(20);
  fill("red");
text("Press space key to feed your puppy",150,20);
text("Food Remaining: "+ foodS,200,200);

//console.log(x);
}

function readStock(data){
  foodS = data.val();
 // foodRem = foodS;
}

function writeStock(x){
  database.ref('food').update({
    foodRem: foodS -x
  })
 // text("Food Remaining: "+ foodRem,200,200);
}

