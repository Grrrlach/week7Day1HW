//functions
/*remember that "let" is limited in scop
when used in a function
*/

//!!!!!!!!ARROW FUNCTIONS, TERNARY, MAP!!!!!!!!!!!!!!


//def --> "function", braces instead of colon/indent.
//No indentation for comp, but good for readability
function addNums(){
    let num = 4;
    let num2 = 5;
    return num + num2
};

console.log(addNums());

function addNums2(num1, num2){;
    return num1 + num2;
};

console.log(addNums2(4,5))

const addNums3 = function (num1, num2){
    return num1+num2
};

console.log(addNums3(4,5))

//as of ES6 (2016) we have Arrow Functions
//their "This" refers to the global "this"
//"This" is similar to "self" in python.
//!!!!! very important to learn, for future homework and REACT!!!!!

let multiplyNums = () =>{
    let num = 4;
    let num2 = 5;
    return num * num2
}
console.log(multiplyNums())





let num = 4
let num2 = 5
let multiplyNums2 = (num, num2) => {
    num*num2
}
console.log(multiplyNums2())




function lame_function(){
    5*2
}
console.log(lame_function())




//if only ONE line, it will return
//the line without using "return"
let multiplyNums3 = (num, num2) => num*num2;

//if you only have ONE parameter, you don't need parentheses
let doubleNum = num => num*2

console.log(doubleNum(4))

//self-invoking functions (similar to lambda)
console.log(function (name){
    return name
}('Chris'))

console.log(function (name){return name}('Chris'))


//FLOW CONTROL
//if statements
//boolean expression needs to be in parenthesis
//again, braces where python would use colon
//"and" is && 
//"or" is ||

function determineAge(age){
    if (age < 18){
        return 'Minor'
    }else if (age >= 18 && age <=65){
        return "Adult"
    }else{
        return "Elderly"
    }
}

console.log(determineAge(66))
console.log(determineAge(5))
console.log(determineAge(25))


//ternary operator
//!!!!!!!!IMPORTANT!!!!!!!
//"conidition ? exprIfTrue : exprIfFalse"

var age = 12
var age_group = age > 20 ? "Over 20" : "Under 20"
console.log(age_group)

function dAge(age){
    return age<18 ? "minor" : age >= 18 && age <=65 ? "adult" : "Elderly"
}
console.log(dAge(65));

let z = 1;
z++
z++
console.log(z) //"++" adds 1 to the variable
//"--" also works to subtract one



//loops
function countByOne(){
    for (let i = 0; i < 20; i++){ //the "i<20" functions like a while loop
        console.log(i)
    }
}
countByOne()

/* what's happening above:
let i = 0;
while i < 20:
do stuff
i++
*/

// function CountByNeg(){
//     for(let i = 20; i>0; i--)
//     console.log(i)
//     console.log ('Neg')
// }
// countByNeg()

//           0    1    2    3    4
let my_list = ["a", "b", "c", "d", "e"]
console.log(my_list.length)


//FOR LOOPS
for (let i = 0; i<my_list.length; i++){
    console.log(my_list[i])
}


//python "for name in names"
//get access to the object (names)
//use "of", NOT "in". "In" gives keys of an object. Of is for loop.
for (let char of my_list){
    console.log(char)
}

console.log("down here")
//!!!!!!!!//loop through an array inline
my_list.forEach( (char)=> console.log(char) )



//.map, .filter, and .reduce


//!!!.map is most important!!!!!!
//is a function on an array

names = ["pari", "tate", "toan", "eduardo", "mike", "mccall", "tim"]
let t_names = names.map(
    (name_)=>{
        //check if first character is a t
        if (name_[0]=="T" || name_[0]=="t"){
            return name_
        }else{
            return false //lowercase for false and true in JS
        }
    }
)
console.log(t_names)



//lowercase, or uppercase. There is no title case
console.log("flogalkdjsaFLKJALKFasklsd;lk".toLowerCase())


//.reduce  - this will take an array and return one value
const nums = [2, 4, 6, 8, 10]
let nums_sum = nums.reduce(
        (accumulated_num, current_num)=>{
            return accumulated_num + current_num
        }
    )
    console.log(nums_sum)


//.filter - will add/remove elements based on a condition
let long_names = names.filter(
    element => element.length > 4
)
    console.log(long_names)



//------------------------------------
//array methods: .join, .slice, .search, .splice

//join a list: .join
console.log(names.join(", "))


//add to a list: .push
names.push("Steve")
console.log(names)

//pop()
console.log(names.pop())
console.log(names)

//.shift()  similar to pop, but at the front
console.log(names.shift())
console.log(names)

//.unshift -- adds to the front of the list
console.log(names.unshift("Steve"))
//the above works "in place", and returns the new LENGTH of list
console.log(names)

//formatted string (f-string)
//python => f"hello {name} thanks for coming
//instead of f"...content...", we use backticks and dollar signs
//    `My name is ${myName}`
myName="Kevin"
console.log(`My name is ${myName}`)


//to remove items from a specific place in that list:
//  .splice


console.log(names)
let captured_names = names.splice(0,2)
//index to remove, and how many items starting @ the index to remove
//index number larger than the list length just goes to end
console.log(captured_names)

//add a third parameter to REPLACE the items in index

//our names: ['Steve', 'tate', 'toan', 'mike', 'mccall', 'tim']

//this example doesn't work
// let captured_names = names.splice(0,1,'Fred')
// console.log(captured_names)
// console.log(names)

//change every other food to "marshmallows"
let foods = ['pizza', 'tacos', 'dim sum', 'sushi', 'ice cream', 'fried rice', 'cheeseburgers']
function replace_foods(){
    for (let i = 0; i<foods.length; i++){
        if (i % 2 == 0){
            foods.splice(i, 1, 'Marshmallow')
        }
    }
}
replace_foods()
console.log(foods)

//same function could just increment i by 2
//and drop the if statement
function replace_foods(){
    for (let i = 0; i<foods.length; i+2){
    }
}
replace_foods()
console.log(foods)


//Strings
//.search()

console.log("joshua".search('s')) //index of the s(2)
console.log("joshs".search('s')) //will still be 2, finds FIRST match
console.log("joshs".search(z)) // returns -1 becuase there is no Z

// slice works for strings like splice does for lists/arrays

console.log("Joshua".slice(0,4)) //returns "Josh"
//zero index to, but not including, index 4

