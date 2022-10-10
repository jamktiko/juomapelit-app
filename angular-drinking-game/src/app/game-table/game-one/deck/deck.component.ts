import { Component, OnInit } from '@angular/core';
import { CARDS } from 'src/app/game-table/game-shareable/mock-cards';
import { Card } from 'src/app/game-table/game-shareable/card';
import { RULES } from 'src/app/game-table/game-shareable/mock-rules';

@Component({
  selector: 'app-deck',
  templateUrl: './deck.component.html',
  styleUrls: ['./deck.component.css'],
})
export class DeckComponent implements OnInit {
  isOver = false; // Tells when the game is over
  cards = CARDS;
  rules = RULES;
  cardCount = 1; // How many cards have been played
  curRule = 'template';

  shuffledCards: any[] = []; // Shuffled cards
  playedCards: any[] = []; // Played cards

  constructor() {}

  ngOnInit(): void {
    this.shuffledCards = this.shuffle(this.cards); // Shuffles the cards when the app is started
    this.curRule = this.rules[this.shuffledCards[0].rank - 1].rule;
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
    if (this.cardCount != 52) {
      this.cardCount++;
      this.playedCards.push(this.shuffledCards[0]);
      this.shuffledCards.splice(0, 1);
      if (this.shuffledCards.length === 0) {
        this.isOver = true;
      }
    }
    this.curRule = this.rules[this.shuffledCards[0].rank - 1].rule;
    return this.curRule;
  }

  // Starts a new game when the user clicks the button to do so, this isn't used at the moment,
  // but it might be used in the future instead of reloadPage();
  newGame() {
    this.isOver = false;
    this.playedCards.push(this.shuffledCards[0]);
    this.shuffledCards.splice(0, 1);
    this.cardCount = 1;
    this.shuffledCards = this.shuffle(this.playedCards);
    this.playedCards = [];
    console.log(this.cards);
    this.curRule = this.rules[this.shuffledCards[0].rank - 1].rule;
    return this.curRule;
  }
 // Restarts the page
  reloadPage() {
    window.location.reload();
  }
  // Function that changes the rank of the cards to letters when starting a new game.
  changeRankToLetter() {
    for (let i = 0; i < this.playedCards.length; i++) {
    if (this.playedCards[i].rank == 'J') {
      this.playedCards[i].rank = 11;
    } else if (this.playedCards[i].rank == 'Q') {
      this.playedCards[i].rank = 12;
    } else if (this.playedCards[i].rank == 'K') {
      this.playedCards[i].rank = 13;
    } else if (this.playedCards[i].rank == 'A') {
      this.playedCards[i].rank = 1;
    }
    };
};

}
