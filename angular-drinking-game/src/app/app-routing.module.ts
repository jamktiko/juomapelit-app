import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainMenuComponent } from './main-menu/main-menu.component';
import { SettingsComponent } from './settings/settings.component';
import { GameTableComponent } from './game-table/game-table.component';
import { JoinTableComponent } from './join-table/join-table.component';
import { GameOneComponent } from './game-table/game-one/game-one.component';
import { JoinLobbyComponent } from './join-table/join-lobby/join-lobby.component';
import { GameLobbyComponent } from './game-lobby/game-lobby.component';
import { AppComponent } from './app.component';
import { CreateLobbyComponent } from './join-table/create-lobby/create-lobby.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  { path: '', redirectTo: 'MainMenu', pathMatch: 'full' },
  { path: 'MainMenu', component: MainMenuComponent },
  { path: 'JoinTable', component: JoinTableComponent },
  { path: 'GameTable', component: GameTableComponent },
  { path: 'GameOne', component: GameOneComponent },
  { path: 'JoinLobby', component: JoinLobbyComponent },
  { path: 'GameLobby', component: GameLobbyComponent },
  { path: 'CreateLobby', component: CreateLobbyComponent },
  { path: 'Contact', component: ContactComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
export const routingComponents = [
  MainMenuComponent,
  SettingsComponent,
  JoinTableComponent,
  GameTableComponent,
  GameOneComponent,
  JoinLobbyComponent,
  GameLobbyComponent,
  CreateLobbyComponent,
  ContactComponent,
];
