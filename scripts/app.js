console.log("Insanity Check!")

// By using the getCards function from High-Card, create an array of four different cards.
// By using the shuffleCards function from High-Card, this will dictate what m8s are under each card.
// The PokeASquare part of the event listeners will be useful for waiting on the clicks.

// First stage: Create the first grid of 2x2, setup the spacing and background. If not a picture, then a tiled background, if not then blue.

function readyCards() {
    // When the begin button is pressed, the board is revealed.
    for (let i = 0; i <= 4; i++) {
        // The cards are spread out onto the board. To create a second row, a wrap will occur.
    }
}

// found the following code on Grepper whilst figuring out how to add multiple images inside the DOM:
// I tried editing the code with my own variables, but I am missing some html parts but also my brain was giving me errors so I'm leaving as it is to understand it
// https://stackoverflow.com/questions/14726529/placing-multiple-images-in-html-at-once-with-javascript
function placeImage(x) {
    var div = document.get ("div_picture_right")

    div.innerHTML = ""; // clear images

    for (counter = 1; counter <= x; counter++) {
        var imagem = document.createElement('img')
        imagem.src = "borboleta/Borboleta" + counter + ".png"
        div.appendChild(imagem)
    }
}

// I did comment out this last part because I know that it'll give me errors
// window.onload = function() {
//     placeImage(48)
// }


// // This is the container/box for the how-to-play blurb
let blurbBox = document.createElement('article')
// blurbBox.setAttribute('class', 'blurbBox')
// document.body.appendChild(blurbBox)

// document.blurbBox.createElement('p')


// This is the container/box where the two buttons reside
// Classes made: buttonBox, beginButton, difficultyButton

let buttonBox = document.createElement('div')
buttonBox.setAttribute('class', 'buttonBox')
document.body.appendChild(buttonBox)

// Begin button element
const beginButton = document.createElement('button')
beginButton.setAttribute("class", "beginButton")
beginButton.innerText = "Begin"
buttonBox.appendChild(beginButton)

// Difficulty button element
const difficultyButton = document.createElement('button')
difficultyButton.setAttribute("class", "difficultyButton")
difficultyButton.innerText = "Difficulty"
buttonBox.appendChild(difficultyButton)
// 


// This is the board for the cards
let board = document.createElement('main')
board.setAttribute('class', 'board')
document.body.appendChild(board)

// This is card 1
const pares1 = document.createElement('img')
pares1.setAttribute('class', "cardA")
pares1.setAttribute('src', './images/eight-cardback.png')
pares1.setAttribute('value', 1)
board.appendChild(pares1)

// This is card 2
const pares2 = document.createElement('img')
pares2.setAttribute('class', "cardB")
pares2.setAttribute('src', './images/eight-cardback.png')
pares2.setAttribute('value', 2)
board.appendChild(pares2)

// This is card 3
const pares3 = document.createElement('img')
pares3.setAttribute('class', "cardC")
pares3.setAttribute('src', './images/eight-cardback.png')
pares3.setAttribute('value', 3)
board.appendChild(pares3)

// This is card 4
const pares4 = document.createElement('img')
pares4.setAttribute('class', "cardD")
pares4.setAttribute('src', './images/eight-cardback.png')
pares4.setAttribute('value', 4)
board.appendChild(pares4)

// This is card 5
const pares5 = document.createElement('img')
pares5.setAttribute('class', "cardE")
pares5.setAttribute('src', './images/eight-cardback.png')
pares5.setAttribute('value', 5)
board.appendChild(pares5)

// This is card 6
const pares6 = document.createElement('img')
pares6.setAttribute('class', "cardF")
pares6.setAttribute('src', './images/eight-cardback.png')
pares6.setAttribute('value', 6)
board.appendChild(pares6)

// This is card 7
const pares7 = document.createElement('img')
pares7.setAttribute('class', "cardG")
pares7.setAttribute('src', './images/eight-cardback.png')
pares7.setAttribute('value', 7)
board.appendChild(pares7)

// This is card 8
const pares8 = document.createElement('img')
pares8.setAttribute('class', "cardH")
pares8.setAttribute('src', './images/eight-cardback.png')
pares8.setAttribute('value', 8)
board.appendChild(pares8)

// // The following is a test of ${} to create the board above using the DRY method
// function displayBoard(x) {
//     for (i = 1; i <= x; i++) {
//     let pares${i} = document.createElement('img')
//     pares${i}.setAttribute('class', 'board')
//     pares${i}.setAttribute('src', './images/eight-cardback.png')
//     pares${i}.setAttribute('value', ${i})
//     board.appendChild(pares${i})
//     }
// } //
// It doesn't look like I can use the ${}syntax here.
    
// displayBoard(8);

board.addEventListener('click', flipCard)

function flipCard(e) {
    let cardAOpen = false
    let cardBOpen = false
    let cardCOpen = false
    
//     if (((cardAOpen == true) && (cardBOpen == true)) && (cardCOpen == true)) {
//         cardAOpen = false
//         cardBOpen = false
//         cardCOpen = false
//         pares1.setAttribute('src', './images/eight-cardback.png')
//         pares2.setAttribute('src', './images/eight-cardback.png')
// }
        if (e.target.className === 'cardA') {
            console.log('Card poked')
            cardAOpen = true
            console.log(cardAOpen)
            pares1.setAttribute('src', './images/dogbook.jpg')
        } else if (e.target.className === 'cardB') {
            console.log('Second card poked')
            cardBOpen = true
            console.log(cardBOpen)
            pares2.setAttribute('src', './images/camera.jpg')
        } else if (e.target.className === 'cardC') {
                console.log('Third card poked')
                cardCOpen = true
                pares3.setAttribute('src', './images/bokeh.jpg')
            }
}

function returnFlip (cardAOpen, cardBOpen) {
    if ((e.target.className === 'cardA') && (cardAOpen === true)) {
        console.log('Card Return')
        cardAOpen = false
        console.log(cardAOpen)
        pares1.setAttribute('src', './images/twofunny.png')
    } else if ((e.target.className === 'cardB') && (cardBOpen === true)) {
        console.log('Second card Return')
        cardBOpen = false
        console.log(cardBOpen)
        pares2.setAttribute('src', './images/waterfall.jpg')
    }
    
}

// This is the function where an if/then statement checks if they match
function checkPair() {

}

document.querySelector('footer').innerText = "Coming Soon: 6s and 7s."

// Button testing
beginButton.addEventListener('click', console.log("Yes"))

// create a function that listens for the click on one of the cards to perform the flip

// create a function that checks whether cardB1 and cardB2 are the same, else unflip and re-randomize the cards

// board element
// cards element
// As a start, this will need object arrays for each row. This will be used to randomize the card entried and also perform the comparison.
