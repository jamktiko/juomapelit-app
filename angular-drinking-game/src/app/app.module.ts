import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';

import { DeckComponent } from './game-table/game-one/deck/deck.component';
import { CardsComponent } from './game-table/game-one/cards/cards.component';
import { CreateLobbyComponent } from './join-table/create-lobby/create-lobby.component';
import { TestingComponent } from './testing/testing.component';


@NgModule({
  declarations: [
    AppComponent,
    DeckComponent,
    CardsComponent,
    routingComponents,
    CreateLobbyComponent,
    TestingComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
