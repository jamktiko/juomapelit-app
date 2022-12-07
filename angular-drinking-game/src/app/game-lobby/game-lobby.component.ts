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
  players: any;
  lobbyCode = '';
  messageFromServer: any;
  

  ngOnInit(): void {
    this.getLobbyPlayers();
    this.wsService.messages$.subscribe({
      next: (x: any) => {
      // console.log('got value ' + Object.values(x));
        this.messageFromServer = JSON.parse(x.retData);
      // console.log(this.messageFromServer);
      
        this.players = this.messageFromServer;
      // console.log(this.players);
      },
      error(err: any) {
        console.error('something wrong occurred: ' + err);
      },
    });
   

    this.lobbyCode = this.lcservice.lobbycode;
    //this.getLobbyPlayers(this.lobbyCode);
  }

  compareHostId(x: string) {
    this.wsService.sendToServer({ action: 'admin', data: { path: 'compareHost', lobbyCode: x, name: '' } });
  }
  
  // Lobbycode tulee parametrina tähän funktioon
   getLobbyPlayers() {
    this.wsService.sendToServer({ action: 'admin', data: { path: 'getPlayers', lobbyCode: "NUET", name: 'Test' } });

  }

  

  

  leavingLobby(x: string) {
    this.compareHostId(x);
    this.wsService.closeServer();
  }
  //Makes random name for player. For testing purposes.
  /*  testPlayers(){
    let randName = Math.random().toString(36).substring(7);
    this.players.push(randName);
  } */
}
