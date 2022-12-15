import { Component, OnInit, ViewChild, ElementRef, Input} from '@angular/core';
import { Deck3Component } from '../deck3/deck3.component';

@Component({
  selector: 'app-cards3',
  templateUrl: './cards3.component.html',
  styleUrls: ['./cards3.component.css']
})
export class Cards3Component implements OnInit {
  // Inputs
  @Input() curRule: any;
  @Input() shuffledCards:any[] = []; // Shuffled cards
  @Input() playedCards: any[] = []; // Played cards
  @Input() loading: boolean = true;
  
  curRuleHeader: any;
  card: any;

  constructor (public deck3Component : Deck3Component) {};
  
  @ViewChild('canvas', { static: true }) 
  // @ts-ignore
  canvas: ElementRef<HTMLCanvasElement>|ElementRef;
  // @ts-ignore
  c: CanvasRenderingContext2D|CanvasRenderingContext2D;

  cw = 300;
  ch = 475;

  elem = document.getElementById('canvas');

  toggleAdd() {
    this.elem?.classList.add('fade');
  }
  toggleRem() {
    this.elem?.classList.remove('fade');
  }

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


  spade:string = '&#9830;&#xFE0E;';
  club:string = '&#9827;&#xFE0E;';
  heart:string = '&#10084;&#xFE0E;';
  diamond:string = '&#9830;&#xFE0E;';
  
  // Draw suit and rank to card
  addSuitRank() {
    this.c.textAlign = "center";
    // Adds suit and rank to top
    this.c.font = "50px Roboto-Black, sans-serif";
        // Hearts and diamonds color red, spades and clubs black
        if (this.shuffledCards[0][0]['suit'] === "♦" || this.shuffledCards[0][0]['suit'] === "♥") {
          this.c.fillStyle = "red";
        } else {
          this.c.fillStyle = "black";
        };
        // Changing the symbols to UTF-8 to prevent emojis in Android devices
        // diamond
        if (this.shuffledCards[0][0]['suit'] === "♦") {
          this.shuffledCards[0][0]['suit'] === this.diamond;
        }
        // heart
        if (this.shuffledCards[0][0]['suit'] === "♥") {
          this.shuffledCards[0][0]['suit'] === this.heart;
        }
        // spade
        if (this.shuffledCards[0][0]['suit'] === "♠") {
          this.shuffledCards[0][0]['suit'] === this.spade;
        }
        // club
        if (this.shuffledCards[0][0]['suit'] === "♣") {
          this.shuffledCards[0][0]['suit'] === this.club;
        } 
  
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
    this.c.font = "50px Roboto-Black, sans-serif";
    this.c.fillText(this.shuffledCards[0][0]['suit'], -265, -360);
    this.c.font = "50px Roboto-Black, sans-serif";
    this.c.fillText(this.shuffledCards[0][0]['rank'], -265, -410);
  }
  

  // Plays the next card when the user clicks the button to do so
  numcount = 0;
  //this.playedCards.indexOf(this.card) === -1
  next() {
    if (this.deck3Component.cardCount < 52) {
        // Adds the card to the played cards array
        let temp = this.shuffledCards[0][0];
        this.shuffledCards[0].splice(0, 1);
        this.shuffledCards[0].push(temp);
        this.curRule = this.shuffledCards[0][0]['rule'];
        this.curRuleHeader = this.shuffledCards[0][0]['name'];
        // Increases the card count
        this.deck3Component.cardCount++;
      } else {
        // If the deck is empty, the game is over
        this.deck3Component.isOver = true;
      }
  }
 
  // Switches to next card
  nextCard() {
    if (this.deck3Component.loading) {
      return}
    if (this.deck3Component.cardCount === 0){
      this.cardFrontside();
      this.addSuitRank();
      this.curRule = this.shuffledCards[0][0]['rule'];
      this.curRuleHeader = this.shuffledCards[0][0]['name'];
      this.deck3Component.cardCount++;
      //This is the part where the app chooses to either show the card or its backside
      //also check the html file, there is a ngif that checks if the card should have rules drawn on top of it or not. The code is somewhat funky at this point.
    } else { 
    if (this.numcount % 2 === 0 || this.numcount === 0) {
      this.clearCanvas();
      this.cardBackside();
      this.numcount++;
    } else {
      this.next();
      this.cardFrontside();
      this.addSuitRank();
      this.numcount++;
    }}
    }

// When page loads
ngOnInit(): void {
  this.c = this.canvas.nativeElement.getContext('2d');
  this.cardBackside();
}
}
