var cards = [
  {
    rank: "king",
    suit: "hearts",
    cardImg: "../images/king-of-hearts.png",
  },
  {
    rank: "king",
    suit: "diamonds",
    cardImg: "../images/king-of-diamonds.png",
  },
  {
    rank: "queen",
    suit: "hearts",
    cardImg: "../images/queen-of-hearts.png",
  },
  {
    rank: "queen",
    suit: "diamonds",
    cardImg: "../images/queen-of-diamonds.png",
  },
];

var cardsInPlay = [];

var reload = document.querySelector('button');

function refresh(){
  location.reload();
}

reload.addEventListener('click', refresh);

function checkMatch() {
  if (cardsInPlay.length === 2) {
    if (cardsInPlay[0] === cardsInPlay[1]) {
      alert(`You've found a match`);
    } else {
      alert('Sorry, try again');
    }
  }
}

function flipCard() {
  let cardId = this.getAttribute('data-id');
  console.log(`User flipped ${cards[cardId].rank}`);
  cardsInPlay.push(cards[cardId].rank);
  this.setAttribute('src', cards[cardId].cardImg);
  checkMatch();
}


function createBoard(){
  for(var i=0; i < cards.length; i++){
    let cardElement = document.createElement('img');
    cardElement.setAttribute('src', '../images/back.png');
    cardElement.setAttribute('data-id', i);
    cardElement.addEventListener('click', flipCard);
    document.getElementById("game-board").appendChild(cardElement);
  }
}

createBoard();


