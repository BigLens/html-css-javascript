let firstCard = getRandomCard()
let secondCard = getRandomCard()
let caRd = [firstCard, secondCard]
let sum = firstCard + secondCard
let hasBlack = false
let isAlive = true
let message = ""

// let theMe = document.getElementById("theMessage")
let messageEl = document.getElementById("firstMessage")
let newSum = document.getElementById("sum")
let cards = document.getElementById("card")
// let newCad = document.querySelector(".btn-newcard")

function getRandomCard() { 
    let anotheRandom = Math.floor(Math.random() * 13)
    if (anotheRandom === 1) {
        return 11
    }else if (anotheRandom > 10) {
        return 10
    }else {
        return(anotheRandom)
    }
} 



function startGame() {
    renderGame()
}
function renderGame() {
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    }else if (sum === 21) {
        message = "Woohoo! You've got Blackjack!"
        hasBlack = true
    }else {
        message = "You are outa the game!"
        isAlive = false
    }
    messageEl.textContent = message
    newSum.textContent = "Sum: " + sum 
    cards.textContent = "Cards: "
    for (i = 0; i < caRd.length; i++) {
        cards.textContent += caRd[i] + " "
    }
    // theMe.textContent = message
}

 function newCard() {
     console.log("drawing a new card from the deck!")
     let card = getRandomCard()
     caRd.push(card)
     sum += card
     renderGame()
     
 }

 for (i = 0; i < caRd.length; i++) {
    console.log(caRd[i])
 }
let greeting = ["Hi", "my", "name", "is", "Joel!"]
let greetings = document.getElementById("greeting")
for (i = 0; i < greeting.length; i++) {
    greetings.textContent += greeting[i] + " "
}

let playerInfo = {
    name: "Anonymouys",
    amount: 245
}

let storingValue = document.getElementById("last-work")
storingValue.textContent = playerInfo.name + ": " + "$" +playerInfo.amount


// Arrays

// let mySelf = ["My name is Joel", 
// 25, 
// true]

// console.log(mySelf)

// let newCan = "Same here"
// mySelf.push(newCan)
// console.log(mySelf)
// mySelf.pop(newCan)
// console.log(mySelf)

let player1Time = 102
let player2Time = 107

function totalRaise() {
    // if (player1Time > player2Time) {
    //     return player1 = 102
    // }else if (player2Time < player1Time) {
    //     return player2Time = 107
    // }else {
        return player1Time + player2Time
    
}
let sumR = totalRaise()
console.log(sumR)






function rollDice() {
    let randomNumber = Math.floor(Math.random() * 6) + 1 
    return randomNumber
}
console.log(rollDice())
