import { Component, OnInit } from '@angular/core';
import { Card } from 'src/app/game-table/game-shareable/card';
import { RULES } from 'src/app/game-table/game-shareable/mock-rules';
import { API } from 'aws-amplify';
import { Type } from '@angular/compiler';
import { WebsocketService } from 'src/app/services/websocket.service';

@Component({
  selector: 'app-deck',
  templateUrl: './deck.component.html',
  styleUrls: ['./deck.component.css'],
})
export class DeckComponent implements OnInit {
  isOver = false; // Tells when the game is over
  //cards = CARDS;
  //rules = RULES;
  
  cardCount = 0; // How many cards have been played
  curRule = '';
  curPlayerId = 0; // host starts the game
  curPlayerName = '';
  shuffledCards: any[] = []; // Shuffled cards
  playedCards: any[] = []; // Played cards

  params = {
    // OPTIONAL
    headers: {}, // OPTIONAL
    response: true, // OPTIONAL (return the entire Axios response object instead of only response.data)
    queryStringParameters: {}, // OPTIONAL
  };

  constructor(public wsService: WebsocketService) {}

  ngOnInit(): void {
    this.getCards();
    this.playerChange();
  }
  loading = true;
  // Fisher-Yates shuffle algorithm
  shuffle(cards: Card[]) {
    for (let i = cards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [cards[i], cards[j]] = [cards[j], cards[i]];
    }
    return cards;
  } // https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array

  // This function gets cards from the API and pushes them to an empty array on initialization
  getCards() {
    API.get('brewdeckApi', '/cards', this.params)
      .then((response) => {
        console.log(response.data);
        // console.log(response.data);
        this.shuffledCards.push(response.data);
        this.shuffle(this.shuffledCards[0]); // Shuffles the cards when the app is started
        this.loading = false;
      })
      .catch((error) => {
        console.log(error.response);
      });
  }

  consolelog() {
    console.log(this.shuffledCards);
    console.log(this.shuffledCards[0]);
    console.log(this.shuffledCards[0][0]['rank']);
  }

  // This function gets random object from the randCards array (random indexing)
  // Card object values: index 0 = suit, index 1 = Id, index 2 = Name, index 3 = rank, and index 4 = Rule

  // Starts a new game when the user clicks the button to do so, this isn't used at the moment,
  // but it might be used in the future instead of reloadPage();
  newGame() {
    this.cardCount = 0;
    this.isOver = false;
    this.shuffle(this.shuffledCards[0]);
    this.curRule = this.shuffledCards[0][0]['rule'];
  }


  // This function is called when the user clicks the button to play a card, it also changes the player
  playerArr = ['pelaaja1', 'pelaaja2', 'pelaaja3', 'pelaaja4', 'pelaaja5', 'pelaaja6']; // This is an array of players, this is a placeholder for now, I dont know how to get the players from the table :D
  numcount = 0;
  playerChange() {
    let playerCount = this.playerArr.length; // this is the number of players. This is a placeholder for now, I dont know how to get the number of players from the table :D
    let x; // Temporary variable to hold the current player
    // Check if the card back is visible or not.
    if (this.numcount % 2 === 0) {
      // If curPlayerId is the last player in the array, set it to 0, else increment it by 1
      if (this.curPlayerId === playerCount - 1) {
        x = this.playerArr[this.curPlayerId];
        this.curPlayerId = 0;
      } else {
        x = this.playerArr[this.curPlayerId];
        this.curPlayerId++;
      }
      this.curPlayerName = x;
      } 
      this.numcount++;
}

  // Restarts the page
  reloadPage() {
    window.location.reload();
  }
}
