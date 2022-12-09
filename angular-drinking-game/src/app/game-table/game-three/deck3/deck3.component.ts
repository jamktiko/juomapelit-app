import { Component, OnInit } from '@angular/core';
import { Card } from 'src/app/game-table/game-shareable/card';
import { API } from 'aws-amplify';
import { WebsocketService } from 'src/app/services/websocket.service';

@Component({
  selector: 'app-deck3',
  templateUrl: './deck3.component.html',
  styleUrls: ['./deck3.component.css']
})
export class Deck3Component implements OnInit {
    isOver = false; // Tells when the game is over
    //cards = CARDS;
    //rules = RULES;
  
    cardCount = 0; // How many cards have been played
    curRule = '';
  
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
  
    // Restarts the page
    reloadPage() {
      window.location.reload();
    }
}
