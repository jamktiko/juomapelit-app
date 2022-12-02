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
        //console.log('got value ' + x);
        this.messageFromServer = JSON.stringify(x.retData);
      },
      error(err: any) {
        console.error('something wrong occurred: ' + err);
      },
    });
    this.lobbyCode = this.lcservice.lobbycode;
    //this.getLobbyPlayers(this.lobbyCode);
  }

  pushPlayers() {
    this.players.push(this.messageFromServer.retData);
    console.log(this.players);
  }

  getLobbyPlayers(x: string) {
    this.wsService.sendToServer({ action: 'admin', data: { path: 'getPlayers', lobbyCode: x, name: '' } });
  }

  compareHostId(x: string) {
    this.wsService.sendToServer({ action: 'admin', data: { path: 'compareHost', lobbyCode: x, name: '' } });
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
