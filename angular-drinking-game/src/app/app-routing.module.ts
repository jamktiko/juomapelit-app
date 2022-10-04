import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainMenuComponent } from './main-menu/main-menu.component';
import { SettingsComponent } from './settings/settings.component';
import { GuideComponent } from './guide/guide.component';
import { GameTableComponent } from './game-table/game-table.component';
import { JoinTableComponent } from './join-table/join-table.component';
import { GameOneComponent } from './game-table/game-one/game-one.component';
import { JoinLobbyComponent } from './join-table/join-lobby/join-lobby.component';
import { GameLobbyComponent } from './game-lobby/game-lobby.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: '', redirectTo: 'MainMenu', pathMatch: 'full' },
  { path: 'MainMenu', component: MainMenuComponent },
  { path: 'Settings', component: SettingsComponent },
  { path: 'Guide', component: GuideComponent },
  { path: 'JoinTable', component: JoinTableComponent },
  { path: 'GameTable', component: GameTableComponent },
  { path: 'GameOne', component: GameOneComponent },
  { path: 'JoinLobby', component: JoinLobbyComponent },
  { path: 'GameLobby', component: GameLobbyComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
export const routingComponents = [
  MainMenuComponent,
  SettingsComponent,
  GuideComponent,
  JoinTableComponent,
  GameTableComponent,
  GameOneComponent,
  JoinLobbyComponent,
  GameLobbyComponent,
];
