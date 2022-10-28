import { Component, OnInit, ɵclearResolutionOfComponentResourcesQueue } from '@angular/core';
import { API } from 'aws-amplify';

@Component({
  selector: 'app-testing',
  templateUrl: './testing.component.html',
  styleUrls: ['./testing.component.css'],
})
export class TestingComponent implements OnInit {
  constructor() {}
  params = {
    // OPTIONAL
    headers: {}, // OPTIONAL
    response: true, // OPTIONAL (return the entire Axios response object instead of only response.data)
    queryStringParameters: {}, // OPTIONAL
  };

  ngOnInit(): void {
    this.getCards();
    // these arrays are emptied upn initialization
    this.randCards = [];
    this.usedCards = [];
  }

  // Initialize an emty array to store the cards from the API
  randCards: any[] = [];
  // Initialize an emty array to store the cards already used
  usedCards: any[] = [];

  

  // This function gets cards from the API and pushes them to an empty array on initialization
  getCards() {
    API.get('gameApi', '/items', this.params)
      .then((response) => {
        // console.log(response.data);
      
        this.randCards.push(response.data)
      })
      .catch((error) => {
        console.log(error.response);
      });
  }


  // This function gets random object from the randCards array (random indexing)
  // Card object values: index 0 = suit, index 1 = Id, index 2 = Name, index 3 = rank, and index 4 = Rule 
  getRandomCard() {
    // Get random card from array
     let card = Object.values(this.randCards[0][Math.floor(Math.random() * this.randCards[0].length)])

     // Log name and rule of card
     console.log(card[2], card[4], this.usedCards.length, this.randCards[0].length)

     this.usedCards.push(card)
     this.randCards[0].splice(this.randCards[0].indexOf(card), 1)
   };
   

}
