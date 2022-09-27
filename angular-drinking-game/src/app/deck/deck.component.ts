import { Component, OnInit } from '@angular/core';
import { CARDS } from '../mock-cards';
import { Card } from '../card';
import { RULES } from '../mock-rules';

@Component({
  selector: 'app-deck',
  templateUrl: './deck.component.html',
  styleUrls: ['./deck.component.css']
})

export class DeckComponent implements OnInit {
  isOver = false; // Tells when the game is over
  cards = CARDS;
  rules = RULES;
  cardCount = 1; // How many cards have been played
  constructor() { }

  shuffledCards: any[] = []; // Shuffled cards
  playedCards: any[] = []; // Played cards

  ngOnInit(): void {
    this.shuffledCards = this.shuffle(this.cards); // Shuffles the cards when the app is started
  }
  
  // Fisher-Yates shuffle algorithm
  shuffle(cards: Card[]) {
    for (let i = cards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [cards[i], cards[j]] = [cards[j], cards[i]];
    }
    return cards;
  } // https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
  
  // Plays the next card when the user clicks the button to do so 
  next() {
    this.cardCount++;
    this.playedCards.push(this.shuffledCards[0]);
    this.shuffledCards.splice(0, 1);
    if (this.shuffledCards.length === 0) {
      this.isOver = true;
  }

}
// Starts a new game when the user clicks the button to do so
  newGame() {
    this.isOver = false;
    this.cardCount = 1;
    this.shuffledCards = this.shuffle(this.playedCards);
    this.playedCards = [];
    console.log(this.cards)
  }
}
