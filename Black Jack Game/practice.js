let person = {
    name: "Joel",
    age: 25,
    country: "Nigeria"
}

function logData() {
    console.log(person.name + " " + "is " + person.age + " " + "and lives in" + " " + person.country)
}
logData()

let age = 15

if (age < 6) {
    console.log("free")
}else if (age < 18) {
    console.log("child discount")
}else if (age < 27) {
    console.log("student discount")
}else if (age < 67) {
    console.log("full price")
}else {
    console.log("senior citizen discount")
}

let largeCountries = [" - China", " - India", " - USA", " - Indonesia", " - Pakistan"]

for (i = 0; i < largeCountries.length; i++) {
    console.log(largeCountries[i])
}

let bigCountries = ["Tuvalu","India","USA","Indonesia","Monaco"]

console.log(bigCountries)

let newCountry = "Monaco"
bigCountries.pop(newCountry)
let newBig = "Pakistan"
bigCountries.push(newBig)
let newShift = "Tuvalu"
bigCountries.shift(newShift)
let finish = "China"
bigCountries.unshift(finish)
console.log(bigCountries)

let hands = ["rock", "paper", "scissors"]

function randomHand() {
    let handss = Math.floor(Math.random()*3)
    return hands[handss]
}
console.log(randomHand())


let fruits = ["orange", "apple", "orange", "apple"]

let orange = document.getElementById("orange")
let apple = document.getElementById("apple")

function renderingFruits() {
    for (i = 0; i < fruits.length; i++) {
        if (fruits[i] === orange) {
        orange.textContent += "orange"
        }else if (fruits[i]=== apple) {
            apple.textContent += apple
        } 
    }
}
renderingFruits()