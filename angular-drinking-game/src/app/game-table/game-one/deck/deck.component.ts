import { Component, OnInit } from '@angular/core';
import { Card } from 'src/app/game-table/game-shareable/card';
import { API } from 'aws-amplify';
import { WebsocketService } from 'src/app/services/websocket.service';
import { LobbycodeService } from 'src/app/services/lobbycode.service';

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

  numcount = 0; // This is used to check if the card back is visible or not

  shuffledCards: any[] = []; // Shuffled cards
  playedCards: any[] = []; // Played cards

  params = {
    // OPTIONAL
    headers: {}, // OPTIONAL
    response: true, // OPTIONAL (return the entire Axios response object instead of only response.data)
    queryStringParameters: {}, // OPTIONAL
  };

  playerArr: any; // This is an array of players, this is a placeholder for now. This should be fetched from the backend, lets do this when we have the backend ready.
  constructor(public wsService: WebsocketService, public lcService: LobbycodeService) {}

  messageFromServer: any;
  item: any;
  lobbycode = this.lcService.lobbycode;
  curTurn: any;
  turn: any;
  players: any;
  deck: any;

  ngOnInit(): void {
    this.wsService.messages$.subscribe({
      next: (x: any) => {
        this.messageFromServer = x;
        this.turn = this.messageFromServer.turn;
        this.players = this.messageFromServer.players;
        this.deck = this.messageFromServer.deck;
      },
      error(err: any) {
        console.error('something wrong occurred: ' + err);
      },
    });
    this.getCards();
    
    //setTimeout(() => {
      this.playerArr.push(this.players);
      console.log('paska');
      this.curPlayer = this.playerArr[0];
      this.curPlayerId = 0;
      this.curTurn = this.playerArr[0];
      this.nextPlayer = this.playerArr[1];
    //}, 3000);

    //note maanantaille, pitäs saada pelaajalistan backista fronttiin näkymään yms.
  }

  //Loading boolean, which determines if the cards are clickable or not
  loading = true;
  // Fisher-Yates shuffle algorithm for shuffling the cards. No need to worry about this.
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
        //console.log(response.data);
        // console.log(response.data);
        this.shuffledCards.push(response.data);
        this.shuffle(this.shuffledCards[0]); // Shuffles the cards when the app is started
        this.loading = false;
        this.insertData(this.shuffledCards);
        this.getData();
      })
      .catch((error) => {
        console.log(error.response);
      });
  }

  /*
  consolelog() {
    console.log(this.shuffledCards);
    console.log(this.shuffledCards[0]);
    console.log(this.shuffledCards[0][0]['rank']);
  }
  */
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

  curPlayerId: any; // Current player's ID. Host is always 0
  curPlayer: any = ''; // Current player
  nextPlayer: any = ''; // Next player
  nextPlayerId: any; // Next player's ID

  isDisabled = true; // This is used to disable the button when the game is over

  changePlayer() {
    this.numcount++;
    if (this.numcount != 0 && this.numcount % 2 === 0) {
      // Get the index of the current turn in the playerArr array
      this.curPlayerId = this.playerArr.indexOf(this.curTurn);
      // Set the curPlayer property to the player at the current index in the playerArr array
      this.curPlayer = this.playerArr[this.curPlayerId];
      // Set the nextPlayerId property to the current player's index plus one
      this.nextPlayerId = this.curPlayerId + 1;
      // If the next player's index is greater than the length of the playerArr array,
      // reset it to 0 (start back at the first player in the array)
      if (this.nextPlayerId > this.playerArr.length - 1) {
        this.nextPlayerId = 0;
      }
      // If the next player's index is less than 0, set it to the last player in the array
      if (this.nextPlayerId < 0) {
        this.nextPlayerId = this.playerArr.length - 1;
      }
      this.curPlayer = this.playerArr[this.nextPlayerId];
      this.curPlayerId = this.nextPlayerId;

      // Set the curPlayer property to the player at the current index in the playerArr array
      this.curPlayer = this.playerArr[this.curPlayerId];
      // Set the nextPlayer property to the player at the new nextPlayerId index in the playerArr array
      this.nextPlayer = this.playerArr[this.nextPlayerId];
      // Update the curTurn property to the nextPlayer
      this.curTurn = this.nextPlayer;
    }
  }

  clog() {
    console.log('Kuka klikkaa korttia ' + this.curPlayer);
    console.log('Hänen id on ' + this.curPlayerId);
    console.log('kenen vuoro pitäisi olla: ' + this.curTurn);
    console.log('Kuka on seuraava ' + this.nextPlayer);
    console.log('tässä playerArr: ' + this.playerArr);
    console.log('ketä ' + this.players);
    console.log('msg from server: ' + this.messageFromServer.players);
  }

  getData() {
    this.wsService.sendToServer({ action: 'admin', data: { path: 'getAllData', lobbyCode: this.lobbycode } });
  }

  insertData(x: any) {
    this.wsService.sendToServer({
      action: 'admin',
      data: { path: 'updateGameState', lobbyCode: this.lobbycode, turn: this.curPlayer, deck: x },
    });
  }

  pushPlayers() {
    for (let i = 0; i < this.item.players.length; i++) {
      this.playerArr.push(this.item.players[i].pname);
    }
  }

  // Restarts the page
  reloadPage() {
    window.location.reload();
  }
}
