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
  messageFromServer: any;
  players: any = [];
  lobbyCode = '';
  ngOnInit(): void {
    this.wsService.messages$.subscribe({
      next: (x: any) => {
        console.log('got value ' + JSON.stringify(x));
        console.log(Object.values(x));
        this.messageFromServer = x;
        console.log(this.messageFromServer);
        
      },
      error(err: any) {
        console.error('something wrong occurred: ' + err);
      },
    });
    this.lobbyCode = this.lcservice.lobbycode;

    //this.getLobbyPlayers(this.lobbyCode);
  
  }

  pushPlayers() {
    this.players = [];
    for(let i = 1; i<this.messageFromServer.length; i++){
    this.players.push(this.messageFromServer.retData);
    }
    console.log(this.players);
  }
  

   getLobbyPlayers(x: string) {
    this.wsService.sendToServer({ action: 'admin', data: { path: 'getPlayers', lobbyCode: x, name: 'Test' } });
  }

  

  consolelog() {
    console.log(this.players);
    console.log(this.players[0]);
    console.log(this.messageFromServer);
    console.log(this.messageFromServer[0]);
  }

  //Makes random name for player. For testing purposes.
  /*  testPlayers(){
    let randName = Math.random().toString(36).substring(7);
    this.players.push(randName);
  } */
}
