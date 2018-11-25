var cards = [
  {
    rank: "king",
    suit: "hearts",
    cardImg: "images/king-of-hearts.png",
  },
  {
    rank: "king",
    suit: "diamonds",
    cardImg: "images/king-of-diamonds.png",
  },
  {
    rank: "queen",
    suit: "hearts",
    cardImg: "images/queen-of-hearts.png",
  },
  {
    rank: "queen",
    suit: "diamonds",
    cardImg: "images/queen-of-diamonds.png",
  },
];

var cardsInPlay = [];

function checkMatch() {
  if (cardsInPlay.length === 2) {
    if (cardsInPlay[0] === cardsInPlay[1]) {
      alert(`You've found a match`);
    } else {
      alert('Sorry, try again');
    }
  }
}

function flipCard(cardId) {
  console.log(`User flipped ${cards[cardId].rank}`);
  cardsInPlay.push(cards[cardId].rank);
  console.log(cards[cardId].suit);
  console.log(cards[cardId].cardImg);
  checkMatch();
}

flipCard([2]);
flipCard([0]);
