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
// This is the container/box where the two buttons reside
// Classes made: buttonBox, beginButton, difficultyButton

let buttonBox = document.createElement('section')
buttonBox.setAttribute('class', 'buttonBox')
document.body.appendChild(buttonBox)

// Begin button element
const beginButton = document.createElement('button')
beginButton.setAttribute("class", "beginButton")
buttonBox.appendChild(beginButton)

// Difficulty button element
const difficultyButton = document.createElement('button')
difficultyButton.setAttribute("class", "difficultyButton")
buttonBox.appendChild(difficultyButton)
// 


// This is the board for the cards
let board = document.createElement('main')
board.setAttribute('class', 'board')
document.body.appendChild(board)

// This is -a- card
const pares1 = document.createElement('img')
pares1.setAttribute('class', "cardA")
pares1.setAttribute('src', './images/eight-cardback.png')
// console.log(pares)
board.appendChild(pares1)

// This is the second card
const pares2 = document.createElement('img')
pares2.setAttribute('class', "cardA")
pares2.setAttribute('src', './images/eight-cardback.png')
// console.log(pares)
board.appendChild(pares2)

// This is -a- card
const pares3 = document.createElement('img')
pares3.setAttribute('class', "cardA")
pares3.setAttribute('src', './images/eight-cardback.png')
// console.log(pares)
board.appendChild(pares3)

// This is the second card
const pares4 = document.createElement('img')
pares4.setAttribute('class', "cardA")
pares4.setAttribute('src', './images/eight-cardback.png')
// console.log(pares)
board.appendChild(pares4)

// This is -a- card
const pares5 = document.createElement('img')
pares5.setAttribute('class', "cardA")
pares5.setAttribute('src', './images/eight-cardback.png')
// console.log(pares)
board.appendChild(pares5)

// This is the second card
const pares6 = document.createElement('img')
pares6.setAttribute('class', "cardA")
pares6.setAttribute('src', './images/eight-cardback.png')
// console.log(pares)
board.appendChild(pares6)

// This is -a- card
const pares7 = document.createElement('img')
pares7.setAttribute('class', "cardA")
pares7.setAttribute('src', './images/eight-cardback.png')
// console.log(pares)
board.appendChild(pares7)

// This is the second card
const pares8 = document.createElement('img')
pares8.setAttribute('class', "cardA")
pares8.setAttribute('src', './images/eight-cardback.png')
// console.log(pares8)
board.appendChild(pares8)

// The following is a test of ${} to create the board above using the DRY method
/*function displayBoard(x) {
    for (i = 1; i <= x; i++) {
    let pares${i} = document.createElement('img')
    pares${i}.setAttribute('class', 'board')
    pares${i}.setAttribute('src', './images/eight-cardback.png')
    pares${i}.setAttribute('value', ${i})
    board.appendChild(pares${i})
    }
} */
// It doesn't look like I can use the ${}syntax here.
    
// displayBoard(8);


let footer = document.createElement('footer')
footer

// Button testing
beginButton.addEventListener('click', console.log("Yes"))



// board element
// cards element
// As a start, this will need object arrays for each row. This will be used to randomize the card entried and also perform the comparison.
