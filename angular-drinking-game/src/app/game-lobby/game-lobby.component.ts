import { Component, OnInit } from '@angular/core';
import { WebsocketService } from '../services/websocket.service';
import { LobbycodeService } from '../services/lobbycode.service';

@Component({
  selector: 'app-game-lobby',
  templateUrl: './game-lobby.component.html',
  styleUrls: ['./game-lobby.component.css'],
})
export class GameLobbyComponent implements OnInit {
  constructor(public wsService: WebsocketService, public lcservice: LobbycodeService) {}
  wsResponse: any = [];
  players: any = [];
  lobbyCode = '';
  ngOnInit(): void {
    this.getLobbyPlayers();
    this.wsService.messages$.subscribe({
      next: (x: any) => {

        //serveri responssi players taulukkoon
        this.players.push(Object.values(x));

      },
      error(err: any) {
        console.error('something wrong occurred: ' + err);
      },
    });
   


    console.log(this.players);
    this.lobbyCode = this.lcservice.lobbycode;

    //this.getLobbyPlayers(this.lobbyCode);
  
  }


  
  // Lobbycode tulee parametrina tähän funktioon
   getLobbyPlayers() {
    this.wsService.sendToServer({ action: 'admin', data: { path: 'getPlayers', lobbyCode: "NUET", name: 'Test' } });

  }

  

  

  //Makes random name for player. For testing purposes.
  /*  testPlayers(){
    let randName = Math.random().toString(36).substring(7);
    this.players.push(randName);
  } */
}
