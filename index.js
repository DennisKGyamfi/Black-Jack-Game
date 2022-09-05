//intro
//let firstCard = 3
//let secondCard = 18

//let sum = firstCard + secondCard
//console.log(sum)

//if (sum < 21) {
//    console.log("Do You want to draw a new card? 🙂")
//} else if (sum === 21) {
//    console.log("You've got Blackjack! 🥳")
//} else {
//    console.log("You're out of the game! 😭")
//} end

// if else Practical

// Check if the person is old enough to enter the nightclub (21)
// Log a suitable message to the console in both cases

//let age = 6

//psedocode
// if less than 21 -> "You can not enter the club!"
// else            -> "Welcome!"

//if (age < 21) {
//    console.log("You can not enter the club!")
//} else {
//    console.log("welcome")
//}




//if else...if else

// Check if the person is elegible for a birthday card from the King! (100)

//let age = 150

// if less than 100    -> "Not elegible"
// else if exactly 100 -> "Here is your birthday card from the King!"
// else                -> "Not elegible, you have already gotten one"
//if (age < 100) {
//    console.log("Not elegible")
//} else if (age === 100) {
//    console.log("Here is your birthday card from")
//} else {
//    console.log("Not elegible, you have already gotten one")
//}

// if else...if else Test for our Game
//let firstCard = 10
//let secondCard = 23
//let sum = firstCard + secondCard
//let hasBlackJack = false
//let isAlive = true

// Write the conditional according to these rules:

// if less than or equal to 20 -> "Do you want to draw a new card? 🙂"
// else if exactly 21 -> "Wohoo! You've got Blackjack! 🥳"
// else -> "You're out of the game! 😭"

//if (sum <= 20) {
//  console.log("Do you want to draw a new card? 🙂")  
  
//} else if (sum === 21) {
//    console.log("Wohoo! You've got Blackjack! 🥳")
//    hasBlackJack = true
//} else {
//    console.log("You're out of the game! 😭")
//    isAlive = false
//}

//console.log(isAlive)
//console.log(hasBlackJack)

//test
//console.log(4 === 3)  // false
//console.log(5 > 2)    // true
//console.log(12 > 12)  //false
//console.log(3 < 0)    // false
//console.log(3 >= 3)   // true
//console.log(11 <= 11) // true
//console.log(3 <= 2)   // false

//Arrays are 0 indexed - Ordered list of items

//let featuredPosts = [
//  "Check out my Netflix clone",
//  "Here's the code for my project",
//  "I've just relaunched my portfolio"
//]

 
// console.log(featuredPosts[0]);
// console.log(featuredPosts.length)

// let mySelf = ["Gyamfi Dennis Kwame", 25, true]


//Adding to array--- (.push)
//let cards = [7, 4]


//cards.push(5, 9)

//console.log(cards)

/* try
// Push the newMessage to the messages array, and then log out the array

let messages = [
  "Hey, how's it going?",        
  "I'm great, thank you! How about you?",
  "All good. Been working on my portfolio lately."
]

let newMessage = "Same here!"

messages.push(newMessage)
console.log(messages) 

messages.pop()
console.log(messages) 
*/

/* counting in Javascript
// Count to ten!

// We need to specify...

// Where should we START counting?
// Where is the FINISH line?
// What's the STEP SIZE we should use?

//    START           FINISH       STEP SIZE
for ( let count = 10;  count < 21;  count += 1 )  {
    
  console.log(count)

}

/* for loop 
for (let count = 10; count < 101; count +=10 ) {
  console.log(count)
}
*/

/* for loops and arrays 
let messages = [
  "Hey, how's it going?",        
  "I'm great, thank you! How about you?",
  "All good. Been working on my portfolio lately.",
  "Same here!",
  "Great to hear"
]

for (let i = 0; i < messages.length; i+= 1) {
  console.log(messages[i])
}
*/

/* Try(for loop)  
let cards = [7, 3, 9]
for (let i = 0; i < cards.length; i ++) {
  console.log(cards[i])
}
*/

/* For loops,arrays, and DOM 
let sentence = ["Hello ", "my ", "name ", "is ", "Per"] 
let greetingEl = document.getElementById("greeting-el")
// Render the sentence in the greetingEl paragraph using a for loop and .textContent

for (let i = 0; i < sentence.length; i++ ) {
  greetingEl.textContent += sentence[i]
  console.log(sentence[i])
}
*/
/* Returning values in functions 

let player1Time = 102
let player2Time = 107

function getFastestRaceTime() {
    if (player1Time < player2Time) {
        return player1Time
    } else if (player2Time < player1Time) {
        return player2Time
    } else {
        return player1Time
    }
}

let fastestRace = getFastestRaceTime()

console.log(fastestRace)

function gettotalRaceTime() {
  return player1Time + player2Time
}

let totalRace = gettotalRaceTime()

console.log(totalRace)
*/

/* Generating random numbers with Math.random() 
let randomNumber = Math.random() * 6

console.log(randomNumber)

What does Math.random() do?

Your answer: 
it generates a random number between 0 and 1 (not inclusive of 1)
*/

/* Flooring the number with Math.floor()

let flooredNumber = Math.floor(5.55632)

console.log(flooredNumber)

 
// What does Math.floor() do to positive numbers?

// Your answer: removes the decimals 

*/

/* Using Math.random() and Math.floor() to create a dice 

//let randomNumber = Math.floor( Math.random() * 6) +1

//console.log(randomNumber)

function rollDice() {
  let randomNumber = Math.floor( Math.random() * 6 ) + 1
  return randomNumber
}

rollDice()
console.log(rollDice())

*/

/* Logical Operators (&-and Operator)
//let hasCompletedCourse = true 
//let givesCertificate = true

//if (hasCompletedCourse === true) {
   // if (givesCertificate === true) {
   //     generateCertificate()
   // }
//}
//alt
//if (hasCompletedCourse === true && givesCertificate === true) {
//  generateCertificate()
//}

//function generateCertificate() {
//    console.log("Generating certificate....")
//}

//challenge
//let hasSolvedChallenge = false
//let hasHintsLeft = false

// Create an if statement that checks that both variables are false.
// If so, run the showSolution() function
//if (hasSolvedChallenge === false && hasHintsLeft === false) {
 // showSolution()
//}

//function showSolution() {
//    console.log("Showing the solution....")
//}

// The Logical OR(||) operator
// Create two boolean variables, likesDocumentaries and likesStartups
// Use an OR statement (||) to call recommendMovie() if either of those variables are true

//let likesDocumentaries = true
//let likesStartups = true

// if (likesDocumentaries === true || likesStartups === true) {
//  recommendMovie()
//}

//function recommendMovie() {
//  console.log("Hey, check out this new film we think you will like!")
//}

*/
/* Creating Object
// Create an object that represents an airbnb castle listing.
// It should contain at least one boolean, one string, one number, and one array
// Log out at least two of the keys using the dot notation

let airbnbCastleListing = {
  name: "Darsie Castle",
  price: 1099,
  affordable: true
}

console.log(airbnbCastleListing.affordable)
*/

/* Blackjack Game JS */

let player = {
  name: "Nana",
  chips: 200,
  sayHello: function() {
  console.log("Heisann!")
}
}

console.log()
player.sayHello()


let cards = []  //array - ordered list of items
let sum = 0 
let hasBlackJack = false
let isAlive = false
let message = "";
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")


let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": GHC " + player.chips


 function getRandomCard() {
  let randomNumber = Math.floor( Math.random() * 13 ) + 1
  if (randomNumber > 10) {
    return 11
  } else if (randomNumber === 1) {
    return 11
  } else {
    return randomNumber
 }
} 

function startGame() {
  isAlive = true
let firstCard = getRandomCard()
let secondCard = getRandomCard()
cards = [firstCard, secondCard]
sum = firstCard + secondCard
  renderGame()
}

function renderGame() {
  cardsEl.textContent = "Cards: "
  for (i = 0; i < cards.length; i++ ) {
    cardsEl.textContent += cards[i] + " "
  }
  
  sumEl.textContent = "sum: " + sum
  if (sum <= 20) {
      message = "Do you want to draw a new card? "
        } else if (sum === 21) {
     "You've got Blackjack! "
      hasBlackJack = true
  } else {
      message =  "You're out of the game! "
      isAlive = false
  }
  messageEl.textContent = message
}

function newCard() {
  if (isAlive === true && hasBlackJack === false) {
console.log("Drawing a new card from the deck!") 
 let card = getRandomCard()
 sum = card + sum
 cards.push(card)
 console.log(cards)
 renderGame()
}
}
 
