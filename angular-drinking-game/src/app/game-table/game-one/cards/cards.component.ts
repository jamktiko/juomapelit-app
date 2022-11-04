import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit, ViewChild, ElementRef, Input} from '@angular/core';
import { RULES } from '../../game-shareable/mock-rules';
import { DeckComponent } from '../deck/deck.component';

  @Component({
    selector: 'app-cards',
    templateUrl: './cards.component.html',
    styleUrls: ['./cards.component.css']
  })
  
export class CardsComponent implements OnInit {
  // Inputs
  @Input() curRule: any;
  @Input() shuffledCards:any[] = []; // Shuffled cards
  @Input() playedCards: any[] = []; // Played cards
  
  //rules = RULES;
  curRuleHeader: any;
  card: any;

  constructor (public deckComponent : DeckComponent) {};
  
  @ViewChild('canvas', { static: true }) 
  // @ts-ignore
  canvas: ElementRef<HTMLCanvasElement>|ElementRef;
  // @ts-ignore
  c: CanvasRenderingContext2D|CanvasRenderingContext2D;


  // Empty the canvas
  clearCanvas() {
    this.c.clearRect(0, 0, 300, 470);
  }

  // Draw downward card to canvas
  cardBackside() {
    // Colors canvas red
    this.c.fillStyle = "#f64747";
    this.c.fillRect(0, 0, 300, 470);

    // Details:
    // left line
    this.c.beginPath();
    this.c.moveTo(30,30);
    this.c.lineTo(30, 440);
    this.c.lineWidth = 2,5;
    this.c.strokeStyle = "white";
    this.c.stroke();
    // right line
    this.c.beginPath();
    this.c.moveTo(270, 30)
    this.c.lineTo(270, 440);
    this.c.lineWidth = 2,5;
    this.c.strokeStyle = "white";
    this.c.stroke();
    // top line
    this.c.beginPath();
    this.c.moveTo(270, 30)
    this.c.lineTo(30, 30);
    this.c.lineWidth = 2,5;
    this.c.strokeStyle = "white";
    this.c.stroke();
    // bottom line
    this.c.beginPath();
    this.c.moveTo(30, 440)
    this.c.lineTo(270, 440);
    this.c.lineWidth = 2,5;
    this.c.strokeStyle = "white";
    this.c.stroke();
    // circle
    this.c.beginPath();
    this.c.arc(150, 235, 50, 0, 2 * Math.PI);
    this.c.lineWidth = 5,5;
    this.c.stroke();
    this.c.fill();
  }

  // Draw upward card to canvas
  cardFrontside() {
    // Clears canvas
    this.clearCanvas();
    // Colors canvas white
    this.c.beginPath();
    this.c.rect(0, 0, 300, 470);
    this.c.fillStyle = "#fff";
    this.c.fill();
    // Adds suits and ranks
    this.addSuitRank();
  }

  // Draw suit and rank to card
  addSuitRank() {
    this.c.textAlign = "center";
    // Adds suit and rank to top
    this.c.font = "60px Roboto-Black, sans-serif";
        // Hearts and diamonds color red, spades and clubs black
        if (this.shuffledCards[0][0]['suit'] === "♦" || this.shuffledCards[0][0]['suit'] === "♥") {
          this.c.fillStyle = "red";
        } else {
          this.c.fillStyle = "black";
        };
        // Changes ranks 11/12/13/1 to J/Q/K/A
        if (this.shuffledCards[0][0]['rank'] == 11) {
          this.shuffledCards[0][0]['rank'] = "J";
        } else if (this.shuffledCards[0][0]['rank'] == 12) {
          this.shuffledCards[0][0]['rank'] = "Q";
        } else if (this.shuffledCards[0][0]['rank'] == 13) {
          this.shuffledCards[0][0]['rank'] = "K";
        } else if (this.shuffledCards[0][0]['rank'] == 1) {
          this.shuffledCards[0][0]['rank'] = "A";
        };
    this.c.fillText(this.shuffledCards[0][0]['suit'], 35, 110);
    this.c.font = "50px Roboto-Black, sans-serif";
    this.c.fillText(this.shuffledCards[0][0]['rank'], 35, 60);
    // Adds suit and rank to bottom upside down
    this.c.rotate(180 * Math.PI / 180);
    this.c.font = "60px Roboto-Black, sans-serif";
    this.c.fillText(this.shuffledCards[0][0]['suit'], -265, -360);
    this.c.font = "50px Roboto-Black, sans-serif";
    this.c.fillText(this.shuffledCards[0][0]['rank'], -265, -410);
  }
/*  getRandomCard() {
    // Get random card from array
     this.card = Object.values(this.shuffledCards[0][Math.floor(Math.random() * this.shuffledCards[0].length)])

     // Log name and rule of card
     console.log(this.card[2], this.card[4], this.playedCards.length, this.shuffledCards[0].length)

     this.playedCards.push(this.card)
     this.shuffledCards[0].splice(this.shuffledCards[0].indexOf(this.card), 1)
   };
   */
  // Plays the next card when the user clicks the button to do so
  
  //this.playedCards.indexOf(this.card) === -1
  next() {
    if (this.deckComponent.cardCount < 52) {
        // Adds the card to the played cards array
        let temp = this.shuffledCards[0][0];
        this.shuffledCards[0].splice(0, 1);
        this.shuffledCards[0].push(temp);
        this.curRule = this.shuffledCards[0][0]['rule'];
        this.curRuleHeader = this.shuffledCards[0][0]['name'];
        // Increases the card count
        this.deckComponent.cardCount++;
      } else {
        // If the deck is empty, the game is over
        this.deckComponent.isOver = true;
      }
  }
 
  // Switches to next card
  nextCard() {
    if (this.deckComponent.cardCount === 0){
      this.cardFrontside();
      this.addSuitRank();
      this.curRule = this.shuffledCards[0][0]['rule'];
      this.curRuleHeader = this.shuffledCards[0][0]['name'];
      this.deckComponent.cardCount++;
    } else {
      this.next();
      this.cardFrontside();
      this.addSuitRank();
    }
//      console.log("s " + JSON.stringify(this.shuffledCards[0]))
//      console.log("p " + this.playedCards[0])
    }
  

  // When page loads
  ngOnInit(): void {

    this.c = this.canvas.nativeElement.getContext('2d');
    this.cardBackside();

    //console.log(this.shuffledCards)
  }
}