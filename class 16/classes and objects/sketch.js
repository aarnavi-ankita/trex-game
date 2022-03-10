//declaring variable for object
var box1

function setup() 
{
  createCanvas(400, 400);

  //objectName = new className()

  //when we create an object , the constructor gets called
  box1 = new Box()

}

function draw() 
{

  background("purple");

  //to call any user-defined function we need to use the object name

  //objectName.functionName()
  
  box1.display()

}

