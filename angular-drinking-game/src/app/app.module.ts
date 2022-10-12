import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';

import { DeckComponent } from './game-table/game-one/deck/deck.component';
import { CardsComponent } from './game-table/game-one/cards/cards.component';
import { CreateLobbyComponent } from './join-table/create-lobby/create-lobby.component';

import { ModalModule } from './_modal';

@NgModule({
  declarations: [
    AppComponent,
    DeckComponent,
    CardsComponent,
    routingComponents,
    CreateLobbyComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
