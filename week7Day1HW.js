//==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
"Matched dog_name" if name is in the string, if no matches are present console.log "No Matches"
*/
let dogString = "Hello Max, my name is Dog, and I have purple eyes!"
let dogNames = ["Max", "HAS", "PuRple", "dog"]
let answer = dogNames.map(
  (name_) => {
    if (dogString.includes(name_)) {
      return 'matched dogName'
    } else {
      return 'no matches'
    }
  }
)
console.log(answer)


//============Exercise #2 ============//
/*Write a fucntion that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */

let givenArr = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]

// function replace_foods(){
//   for (let i = 0; i<foods.length; i++){
//       if (i % 2 == 0){
//           foods.splice(i, 1, 'Marshmallow')
//       }
//   }
// }

function replaceEvens(){
  for (let i = 0; i < givenArr.length; i++){
    if (i % 2 == 0){
      givenArr.splice(i, 1, "even index")
    }
  }
}
replaceEvens()
console.log(givenArr)
