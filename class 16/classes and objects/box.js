class Box{

  //pre-defined function 

  constructor(){

    //"this" keyword will be used to create properties inside the constructor of a class
    this.x = 200
    this.y = 200
    this.width = 50
    this.height = 50

  }

  //user-defined, and you need not to mention function word for defining an user defined function in the class
  display(){
    rect(this.x , this.y , this.width , this.height)
  }  
  
}

  
