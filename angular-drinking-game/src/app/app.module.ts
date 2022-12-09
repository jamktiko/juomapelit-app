import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { DeckComponent } from './game-table/game-one/deck/deck.component';
import { CardsComponent } from './game-table/game-one/cards/cards.component';
import { CreateLobbyComponent } from './join-table/create-lobby/create-lobby.component';
import { ContactComponent } from './contact/contact.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SettingsComponent } from './settings/settings.component';
import { Deck2Component } from './game-table/game-two/deck2/deck2.component';
import { Cards2Component } from './game-table/game-two/cards2/cards2.component';
import { GameThreeComponent } from './game-table/game-three/game-three.component';
import { Deck3Component } from './game-table/game-three/deck3/deck3.component';
import { Cards3Component } from './game-table/game-three/cards3/cards3.component';

@NgModule({
  declarations: [
    AppComponent,
    DeckComponent,
    CardsComponent,
    routingComponents,
    CreateLobbyComponent,
    ContactComponent,
    SettingsComponent,
    Deck2Component,
    Cards2Component,
    GameThreeComponent,
    Deck3Component,
    Cards3Component,

  ],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
