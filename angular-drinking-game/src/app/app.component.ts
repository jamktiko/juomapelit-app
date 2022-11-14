import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
  valid = false;
  over18 = document.getElementById("over18") as HTMLInputElement | null;
  respDrink = document.getElementById("respDrink") as HTMLInputElement | null;
  drinkWater = document.getElementById("drinkWater") as HTMLInputElement | null;
  ngOnInit() {
    this.openModal();
  }
  openModal() {
    document.getElementById('modalButton')?.click();
    console.log('modal opened');
  }

  constructor() {}

}
