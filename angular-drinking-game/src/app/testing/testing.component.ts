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
  }

  // Initialize an emty array to store the cards from the API
  randCards: string[] = [];
  // Initialize an emty array to store the cards already used
  usedCards: string[] = [];

  // This function gets cards from the API and pushes them to an empty array on initialization
  getCards() {
    API.get('gameApi', '/items', this.params)
      .then((response) => {
        this.randCards.push(response.data)
      })
      .catch((error) => {
        console.log(error.response);
      });
  }


  // This function gets random object from the randCards array (random indexing)
  getRandomCard() {
     let card = Object.values(this.randCards[0][Math.floor(Math.random() * this.randCards[0].length)])
     console.log(card[0])
   };
   

}
