
let arr = new Array(3, 6, 6);
let arr3 = Array(6) // creates a new array with 6 empty slots
let arr2 = [1,2,3]


const car = {
    make: "honda",  
    model: "civic", 
    getName(){return this.make + " "+this.model}
}

const honda = {
    doors: 5, 
    make: "notAHonda",
    __proto__: car
}



let myCar = new Object();
myCar.make = "VW";
myCar.model = "Touran";

let studentCar = new Object();
studentCar.make = "Honda"
studentCar.model = "Civic"


let car3 = {make:"Citroen", model:"C1"}


function makeCar(make, model, color, price){
    this.make = make;
    this.model = model; 
    this.color = color; 
    this.price = price; 
}

var car4 = new makeCar("Make", "Model", "Blue"); 

var rec1 = new rectangle(9,3); 
var rec2 = new rectangle(4,3); 
var me  = new person("Ryan", "Crosby", "Lecturer");
var you = new person("Bob", "Smith", "Student");

/* functions to show object features  */

function rectangle(width, height){
    this.width = width; 
    this.height = height; 
}
function person(FirstName, LastName, Age, Job){
    this.FirstName = FirstName; 
    this.LastName =  LastName; 
    this.Age =  Age; 
    this.Job = Job; 
}
function area(rectangle){
    var area  = rectangle.width * rectangle.height; 
    alert("The area of this rectangle is " + area);
}

function perimiter(rectangle){
    var perim  = (rectangle.width *2) + (rectangle.height *2); 
    alert("The perimiter of this rectangle is " + perim);
}

/* Control Structures */ 
function ifControl(number){
    if (number % 2 == 0 ){
        console.log("The number is Even ")
    }
    if (number >= 0){
        console.log("bananza")
    }
    else{
        console.log("The number is odd.")
    }
}
function showTernary(value){
    /*return(condition ? if True: if False)*/
    return(value < 7? "This is less than 7": "This is not less than 7" );
}
/* Scope */ 
function testingScopeOne(){
    global = 5; 
    var local = 10;
}
function testingScope2(){
    console.log("We can access the global variable" + global);
    console.log("can we access a local one" + local);
}

function formProcess(){
    alert("You have clicked the form button, well done.");
}

function searcharr(array,seachval){
    let result = -1
    let size = array.lenght
    for ( i=0 ; i < size; i++) 
    {
        if (seachval == array[i]){
            result = i
        }
    }
    if (result == -1){
        console.log("This value is not in the array");
    }
    else{
        console.log("This is the position of the item in array" + result);
    }
}

function test(arm){
    let lam = false
    if (arm == "left") {
        lam = true
    }
    else{
        lam = false
    }
    
}