let homeTotal = 0 
let homeNum1 = homeTotal + 1 
let homeNum2 = homeTotal + 2 
let homeNum3 = homeTotal + 3

let guestTotal = 0 
let guestNum1 = guestTotal + 1 
let guestNum2 = guestTotal + 2 
let guestNum3 = guestTotal + 3

let zeroScore = 0 

let resetBtn = document.getElementById("reset-btn")
let homeScore = document.getElementById("home-score")
let guestScore = document.getElementById("guest-score")

function plusOne() {
    homeTotal += homeNum1
    homeScore.textContent = homeTotal
}

function plusTwo() {
    homeTotal += homeNum2
    homeScore.textContent = homeTotal
}

function plusThree() {
    homeTotal += homeNum3
    homeScore.textContent = homeTotal
}

function guestPlusOne() {
    guestTotal += guestNum1
    guestScore.textContent = guestTotal
}

function guestPlusTwo() {
    guestTotal += guestNum2 
    guestScore.textContent = guestTotal
}

function guestPlusThree() {
    guestTotal += guestNum3
    guestScore.textContent = guestTotal
}

function resetScore() {
    homeTotal = 0 
    guestTotal = 0
    homeScore.textContent = 0
    guestScore.textContent = 0 
}