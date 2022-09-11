/*  Deal 26 cards to 2 players from a deck of 52
    *  Iterate thru the turns where each player plays a card
    *  The player w/ the higher card is awarded 1 point
    *       - ties result in 0 points for both players
    *  After all cards have been played display the score and declare winner
    *  Write a unit test using Mocha and Chai for at least 1 of the functions
*/

class Card {    
    constructor(suit, name, value) {
        this.suit = suit;
        this.name = name;
        this.value = value ;

        // I asked myself what the properties are in this object.  Each card obviously has a suit and a name, 
        //  but the name means nothing without a value attached.  Are there any methods attached to this, though?
    }
}

class Player {
    constructor(player1, player2) {  //  I don't believe there are any constructors, just player1 and player2
        this.player1 = player1;
        this.player2 = player2;
        this.playerOneScore;
        this.playerTwoScore;
        this.cards = [];

        // methods?
        console.log('Player1 score:', this.playerOneScore); 
    } 
      
}



class Deck {
    constructor() {
        this.cards = [];  //  After we create the deck, we want the cards to go into an array.  
                          //  Which will be randomized later...?
        this.playerOneCards = [];
        this.playerTwoCards = [];                  
        }
                        
    createDeck() {
    // Every War program I looked at had the actual pictures for the suits.  I had to look up how it's done (codes).  
    // I would like my program to be functional but also look decent.  
                            
    // I want to iterate over each suit and name to populate the deck array
    // for (let suit in suits) {
    //     for (let name in names) {
    //       this.cards.push(`${names[name]} of ${suits[suit]}`);
    //     }            
    // }
        let suits = ["Clubs \u2663","Diamonds \u2666", "Hearts \u2665", "Spades \u2660"];
        let names = [
            'Ace',
            '2',
            '3',
            '4',
            '5',
            '6',
            '7',
            '8',
            '9',
            '10',
            'Jack',
            'Queen',
            'King'];
        let values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
                                    
        for(let i = 0; i < suits.length; i++) {
            for(let j = 0; j < names.length; j++) {
                this.cards.push(new Card(suits[i], names[j], values[j]));
            }
        }           
    console.log(this.cards);       
    }
    shuffleDeck() {
        for (let i = 0; i < 52; i++) {
            // Iterate thru the array 52 times
            let tempCard = this.cards[i];  
            // Temp stores a variable temporarily
            let randomIndex = Math.floor(Math.random() * 52);
            // math.floor math.random returns a variable whole number, the * 52 means 
            //   that number will be between 0 and 51, therefore a random index of the
            //   52 cards as seen in the lines below
            this.cards[i] = this.cards[randomIndex];
            this.cards[randomIndex] = tempCard;
        }    
    } 
    
    dealDeck() {  //  We want to deal half a deck (26 cards) to each player

        const halfDeck = Math.ceil(this.cards.length / 2);
        this.playerOneCards = this.cards.slice(0, halfDeck);
        console.log('Player One Deck: ' , this.playerOneCards);
        this.playerTwoCards = this.cards.slice(halfDeck);
        console.log('Player Two Deck: ' , this.playerTwoCards);

        for (let i = 0; i < this.playerOneCards.length; i++) {
            console.log(this.playerOneCards[i].value);
        }
        for (let i = 0; i < this.playerTwoCards.length; i++) {
            console.log(this.playerTwoCards[i].value);
        }
    }
    



}
class War {
    constructor(playerOneScore, playerTwoScore) {
        this.playerOneScore = playerOneScore;
        this.playerTwoScore = playerTwoScore;
        // this.cards = [];
        // this.playerOneCards = [];
        // this.playerTwoCards = []; 
        // this.player1 = player1;
        // this.player2 = player2;
        
    }
    
    

    playWar() {
        let player1;
        let player2;

        // freshDeck.createDeck();

        // // console.log(freshDeck.cards);
        // freshDeck.shuffleDeck();
        // freshDeck.dealDeck();   
        
        for (let i = 0; i < 26; i++) {
            if (playerOneCards[i].value > player2.cards[i].value) {
                console.log(`Player1 wins round ${i + 1}`);
                playerOneScore++;
                
            }  else if 
                (player1.cards[i].value < player2.cards[i].value) {
                 console.log(`Player2 wins round ${i + 1}`);
                 playerTwoScore++;   
            }  else {
                console.log(`Round ${i + 1} is a tie`);

            }
        }

        if (this.playerOneScore > this.playerTwoScore) {
            console.log('Player1 wins!');
        
        }  else if 
            (this.playerOneScore < this.playerTwoScore) {
                console.log('Player2 wins!');

            }  else  {
                console.log('The match is a tie');
                }

    }
}


const freshDeck = new Deck();
freshDeck.createDeck();

// console.log(freshDeck.cards);
freshDeck.shuffleDeck();
freshDeck.dealDeck();

let newWar = new War();
newWar.playWar();






// function shuffle(array) {
//     let currentIndex = array.length,  randomIndex;
  
//     // While there remain elements to shuffle.
//     while (currentIndex != 0) {
  
//       // Pick a remaining element.
//       randomIndex = Math.floor(Math.random() * currentIndex);
//       currentIndex--;
  
//       // And swap it with the current element.
//       [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
//     }
  
//     return array;
//   }
