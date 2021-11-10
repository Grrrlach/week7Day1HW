//always end with semicolon. not always an error if you dont, but good practice
//var is pretty outdated and can cause problems
//JS uses camel case

/* this is a
multi-line
comment
*/

//printing
console.log("hello");

//making a variable
var my_name = "Austin";
console.log(my_name);

//Integer
var some_num = 31;
console.log(some_num);

//Float
var some_float = 3.14;
console.log(my_name);

//Arrays -- like a python list
var someArray = [1,2,3,4];
console.log (someArray);
console.log (someArray[2]);

//Object variable --like a python dictionary (json, for example, stands for javascript object notation)
var someObject = {'test':'please test me'};
console.log(someObject);
console.log(someObject['test']);
console.log (someObject.test);
my_key = 'test';
//if your key is saved as a variable, you can't use dot notation like:
//console.log(some_object.my_key)  instead use
console.log(someObject[my_key]);

//declare variables -- doesn't need to be given a value
var someRandomVar
console.log(someRandomVar)
some_random_var = "Christina"
console.log(someRandomVar)

//JS Hoisting -- 
console.log(madeUpName);
var madeUpName = "Steve";
//at this point it won't throw error OR print steve
//JS "hoists" all variable names to the top of the program
console.log(madeUpName);

testHoist();

function testHoist(){
    console.log("Hoisting function");
}

var myVarNamedJoe = "Joe";

//can't change the variable const later
//const is also global within the function
//often causes problems, but more efficient
//can use "let" instead


let fullName = myVarNamedJoe + " Quimby";
console.log(fullName);
fullName = "Mr. Burns";
console.log(fullName);

const superHero="Ironman";
console.log(superHero);
//superHero = "spiderman"
//console.log(superHero)

//math in JS
let sum = 5+5;
console.log(sum);// will be 10
sum+=5;
console.log(sum); //will be 15

//subract
let diff = 5-5;
console.log(diff) // will be 0
diff -= 5;
console.log(diff); // will be-5

//mult
let product = 5*5
console.log(product) // 25
product *= 5; //125
console.log(product)

//divide
let divide=5/5
console.log(divide) //1
divide /= 5
console.log(divide) // 1/5

//type of
console.log(typeof divide)  //number type

//exponents
let square = 5**2
console.log(square)  //should be 25
square **=2 
console.log(square) //should be 625

//floor division
//in python we did 5//2=2
//in JS we need a built-in package, no import
let floor = Math.floor(5/2)
console.log(floor)

//ceiling -- rounding up, opposite dir of floor division
let ceil = Math.ceil(5/2)
console.log(ceil)

//weird JS stuff
let stuff = 3.14 + '4'
//in python this couldn't concatatenate
/*
in JS it guesses what you want, in this case
it adds them as 2 strings.
*/
console.log(stuff)

//int() float() str() in python:
let stuff2 = 3.14 + parseInt('4') //same as int() 
console.log(stuff2)

// every JS object should have toString(), same as str()
//build one on new js objects
let stuff3 = 3.14.toString() + '4'
console.log(stuff3)
