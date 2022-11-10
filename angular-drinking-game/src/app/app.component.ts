import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { delay } from 'rxjs';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  declarations: [ ],
  bootstrap: [ ]
})
export class AppModule { }

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    // animation triggers go here

  ]
})
export class AppComponent {
  title = 'BrewDeck';
  ngOnInit() {
    this.openModal();
  }
  openModal() {
    document.getElementById('modalButton')?.click();
    console.log('modal opened');
  }
  constructor() {}

}
