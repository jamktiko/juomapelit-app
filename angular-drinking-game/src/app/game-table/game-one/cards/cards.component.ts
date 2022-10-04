import { Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import { RULES } from '../../game-shareable/mock-rules';
import { DeckComponent } from '../deck/deck.component';

  @Component({
    selector: 'app-cards',
    templateUrl: './cards.component.html',
    styleUrls: ['./cards.component.css']
  })
  
export class CardsComponent implements OnInit {
  rules = RULES;
  curRule = "";
  constructor ( private deckComponent: DeckComponent) {};
  @ViewChild('canvas', { static: true }) 
  // @ts-ignore
  canvas: ElementRef<HTMLCanvasElement>|ElementRef;
  // @ts-ignore
  c: CanvasRenderingContext2D|CanvasRenderingContext2D;

  ngOnInit(): void {
    /* Card-canvas */
    this.curRule = this.rules[this.deckComponent.shuffledCards[0].rank - 1].rule;
    this.c = this.canvas.nativeElement.getContext('2d');
    this.c.font = "60px Roboto-Black, sans-serif";
    this.c.fillText("♠", 20, 110);

    this.c.font = "50px Roboto-Black, sans-serif";
    this.c.fillText("2", 20, 60);

    this.c.font = "60px Roboto-Black, sans-serif";
    this.c.rotate(180 * Math.PI / 180);
    this.c.fillText("♠", -280, -360);

    this.c.font = "50px Roboto-Black, sans-serif";
    this.c.fillText("2", -280, -410);
  }
}