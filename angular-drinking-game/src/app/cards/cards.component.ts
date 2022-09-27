import { Component, OnInit, ViewChild, ElementRef} from '@angular/core';

@Component({
  selector: 'app-cards',
  template: `<canvas #canvas width="600" height="300"></canvas>`})
export class CardsComponent implements OnInit {
  constructor () {};


  @ViewChild('canvas', {static:true})
  canvas = ElementRef<HTMLCanvasElement>;
  private ctx = ElementRef;
  
  ngOnInit(): void {
    this.ctx = this.canvas.nativeElement.getContext('2d');
  }

}