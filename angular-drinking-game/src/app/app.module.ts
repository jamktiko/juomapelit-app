import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';

import { DeckComponent } from './game-table/game-one/deck/deck.component';
import { CardsComponent } from './game-table/game-one/cards/cards.component';

import { ModalModule } from './_modal';

@NgModule({
  declarations: [AppComponent, DeckComponent, CardsComponent, routingComponents],
  imports: [BrowserModule, AppRoutingModule, ModalModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
