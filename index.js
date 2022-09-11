function doSomething(x, y) {
    if (typeof x != 'string') {
        throw new Error('x must be a string');
    }
    return x + y;
}

// function createDeck() {
//     let cards = [];
//     let suits = ["Clubs \u2663","Diamonds \u2666", "Hearts \u2665", "Spades \u2660"];
//         let names = [
//             'Ace',
//             '2',
//             '3',
//             '4',
//             '5',
//             '6',
//             '7',
//             '8',
//             '9',
//             '10',
//             'Jack',
//             'Queen',
//             'King'];
//         let values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
                                    
//         for(let i = 0; i < suits.length; i++) {
//             for(let j = 0; j < names.length; j++) {
//                 cards.push(new Card(suits[i], names[j], values[j]));
//             }
//         }  
//         return(cards);         
// }