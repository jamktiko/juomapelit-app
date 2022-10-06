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
  constructor (public deckComponent : DeckComponent) {};
  @ViewChild('canvas', { static: true }) 
  // @ts-ignore
  canvas: ElementRef<HTMLCanvasElement>|ElementRef;
  // @ts-ignore
  c: CanvasRenderingContext2D|CanvasRenderingContext2D;

  ngOnInit(): void {

    //Unironically this is the only way I could get the canvas to work. Lmao
    if (this.shuffledCards[0].rank == 11 || this.shuffledCards[0].rank == 12 || this.shuffledCards[0].rank == 13 || this.shuffledCards[0].rank == 1) {
      
      this.changeRankToLetter();

      this.c = this.canvas.nativeElement.getContext('2d');
      

      this.c.font = "60px Roboto-Black, sans-serif";
      this.c.fillText(this.shuffledCards[0].suit, 20, 110);
  
      this.c.font = "50px Roboto-Black, sans-serif";
      this.c.fillText(this.shuffledCards[0].rank, 20, 60);
  
      this.c.font = "60px Roboto-Black, sans-serif";
      this.c.rotate(180 * Math.PI / 180);
      this.c.fillText(this.shuffledCards[0].suit, -280, -360);
  
      this.c.font = "50px Roboto-Black, sans-serif";
      this.c.fillText(this.shuffledCards[0].rank, -280, -410);
    } else {
    /* Card-canvas */
    this.curRule = this.rules[this.deckComponent.shuffledCards[0].rank - 1].rule;
    this.c = this.canvas.nativeElement.getContext('2d');
    this.c.font = "60px Roboto-Black, sans-serif";
    this.c.fillText(this.shuffledCards[0].suit, 20, 110);

    this.c.font = "50px Roboto-Black, sans-serif";
    this.c.fillText(this.shuffledCards[0].rank, 20, 60);

    this.c.font = "60px Roboto-Black, sans-serif";
    this.c.rotate(180 * Math.PI / 180);
    this.c.fillText(this.shuffledCards[0].suit, -280, -360);

    this.c.font = "50px Roboto-Black, sans-serif";
    this.c.fillText(this.shuffledCards[0].rank, -280, -410);
  }
}
  changeSuitRank() {
    //Clears the canvas
    this.c.clearRect(0, 0, 1000, 1000);
    
    //Draws the new card on the canvas
    this.c.fillText(this.shuffledCards[0].suit, 20, 110);

    this.c.fillText(this.shuffledCards[0].rank, 20, 60);

    //Draws the new card on the canvas upside down
    this.c.rotate(180 * Math.PI / 180);
    this.c.fillText(this.shuffledCards[0].suit, -280, -360);
    this.c.fillText(this.shuffledCards[0].rank, -280, -410);
  }
  // Prints out the card suit and rank to the canvas. For some reason changeSuitRank() function
  // Has to be there twice, but atleast it works.
  nextThing() {
  this.deckComponent.next();
  this.changeRankToLetter();
  this.changeSuitRank();
  this.changeSuitRank()}

  // Changes the rank of the card to a letter if it is a face card.
  changeRankToLetter() {
    if (this.shuffledCards[0].rank == 11) {
      this.shuffledCards[0].rank = "J";
    } else if (this.shuffledCards[0].rank == 12) {
      this.shuffledCards[0].rank = "Q";
    } else if (this.shuffledCards[0].rank == 13) {
      this.shuffledCards[0].rank = "K";
    } else if (this.shuffledCards[0].rank == 1) {
      this.shuffledCards[0].rank = "A";
    };

    
};


  }