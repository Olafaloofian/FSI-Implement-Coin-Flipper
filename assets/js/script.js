// Track total number of heads and tails
var headsAmount = 0
var tailsAmount = 0
var totalAmount = 0

document.addEventListener('DOMContentLoaded', function () {
    // TODO: Add event listener and handler for flip and clear buttons
    let flipButton = document.getElementById("flip")
    let clearButton = document.getElementById("clear")
    let headsNumber = document.getElementById("heads")
    let tailsNumber = document.getElementById("tails")
    let headsPercentage = document.getElementById("heads-percent")
    let tailsPercentage = document.getElementById("tails-percent")

    flipButton.addEventListener('click', function() {
        if (Math.random() < 0.5) {
            document.getElementById("penny").src = "assets/images/penny-tails.jpg"
            tailsAmount++
            totalAmount++
            document.getElementById("message").textContent = "You Flipped Tails!"
            tailsNumber.textContent = tailsAmount
        } else {
            document.getElementById("penny").src = "assets/images/penny-heads.jpg"
            headsAmount++
            totalAmount++
            document.getElementById("message").textContent = "You Flipped Heads!"
            headsNumber.textContent = headsAmount
        }
        updatePercentages()
    })

    clearButton.addEventListener('click', function() {
        headsNumber.textContent = 0
        tailsNumber.textContent = 0
        headsPercentage.textContent = "0%"
        tailsPercentage.textContent = "0%"
        headsAmount = 0
        tailsAmount = 0
        totalAmount = 0
    })

    function updatePercentages() {
        tailsPercentage.textContent = `${Math.round(tailsAmount / totalAmount * 100)}%`
        headsPercentage.textContent = `${Math.round(headsAmount / totalAmount * 100)}%`
    }

})