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

  cardCount = 0; // How many cards have been played
  curRule = 'zz';


  shuffledCards: any[] = []; // Shuffled cards
  playedCards: any[] = []; // Played cards

  constructor() {}

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

}

