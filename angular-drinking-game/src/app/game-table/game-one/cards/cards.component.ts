import { Component, OnInit, ViewChild, ElementRef, Input} from '@angular/core';
import { RULES } from '../../game-shareable/mock-rules';
import { DeckComponent } from '../deck/deck.component';

  @Component({
    selector: 'app-cards',
    templateUrl: './cards.component.html',
    styleUrls: ['./cards.component.css']
  })
  
export class CardsComponent implements OnInit {
  @Input() curRule: any;
  @Input() shuffledCards: any[] = []; // Shuffled cards
  rules = RULES;
  playing = false

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
    // Creates and draws the logo
    let img = new Image();
    img.src = "https://meemi.info/images/f/fc/Mutsis.jpg";
    this.c.drawImage(img, 100, 200, 150, 150);
  }

  // Draw upward card to canvas
  cardFrontside() {
    // Clears canvas
    this.clearCanvas();
    // Colors canvas white
    this.c.beginPath();
    this.c.rect(0, 0, 300, 470);
    this.c.fillStyle = "#ffffff";
    this.c.fill();
    // Adds suits and ranks
    this.addSuitRank();
  }

  // Draw suit and rank to card
  addSuitRank() {
    // Adds suit and rank to top
    this.c.font = "60px Roboto-Black, sans-serif";
        // Hearts and diamonds color red, spades and clubs black
        if (this.shuffledCards[0].suit === "♦" || this.shuffledCards[0].suit === "♥") {
          this.c.fillStyle = "red";
        } else {
          this.c.fillStyle = "black";
        };
        // Changes ranks 11/12/13/1 to J/Q/K/A
        if (this.shuffledCards[0].rank == 11) {
          this.shuffledCards[0].rank = "J";
        } else if (this.shuffledCards[0].rank == 12) {
          this.shuffledCards[0].rank = "Q";
        } else if (this.shuffledCards[0].rank == 13) {
          this.shuffledCards[0].rank = "K";
        } else if (this.shuffledCards[0].rank == 1) {
          this.shuffledCards[0].rank = "A";
        };
    this.c.fillText(this.shuffledCards[0].suit, 20, 110);
    this.c.font = "50px Roboto-Black, sans-serif";
    this.c.fillText(this.shuffledCards[0].rank, 20, 60);
    // Adds suit and rank to bottom upside down
    this.c.rotate(180 * Math.PI / 180);
    this.c.font = "60px Roboto-Black, sans-serif";
    this.c.fillText(this.shuffledCards[0].suit, -280, -360);
    this.c.font = "50px Roboto-Black, sans-serif";
    this.c.fillText(this.shuffledCards[0].rank, -280, -410);
  }

  // Switches to next card
  nextCard() {
      this.deckComponent.next();
      this.cardFrontside();
      this.addSuitRank();
    }
  

  // When page loads
  ngOnInit(): void {

    this.c = this.canvas.nativeElement.getContext('2d');
    this.cardBackside();
  }
}