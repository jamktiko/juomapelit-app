import { Component, OnInit, OnDestroy } from '@angular/core';
import { WebsocketService } from '../services/websocket.service';
import { LobbycodeService } from '../services/lobbycode.service';
import { interval } from 'rxjs';

@Component({
  selector: 'app-game-lobby',
  templateUrl: './game-lobby.component.html',
  styleUrls: ['./game-lobby.component.css'],
})
export class GameLobbyComponent implements OnInit, OnDestroy {
  constructor(public wsService: WebsocketService, public lcservice: LobbycodeService) {}
  players: any;
  lobbyCode = '';
  messageFromServer: any;
  interval: any;
  isHost = this.lcservice.isHost;
  ngOnInit(): void {
    this.lobbyCode = this.lcservice.lobbycode;

    this.getLobbyPlayers();
  

    this.wsService.messages$.subscribe({
      next: (x: any) => {

        this.messageFromServer = JSON.parse(x.retData);
      },
      error(err: any) {
        console.error('something wrong occurred: ' + err);
      },
    });
   

    
    //this.getLobbyPlayers(this.lobbyCode);
  }

  ngOnDestroy(): void {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }
  

  getLobbyPlayers() {
    //execute every 2 seconds
    this.interval = setInterval(() => {
      this.wsService.sendToServer({ action: 'admin', data: { path: 'getPlayers', lobbyCode: this.lobbyCode, name: '' } });
      this.players = this.messageFromServer;
    }, 2000);

  }

  compareConnectionId(x: string) {
    this.wsService.sendToServer({ action: 'admin', data: { path: 'compareHostId', lobbyCode: this.lobbyCode, name: '' } });
  }
  
  // Lobbycode tulee parametrina tähän funktioon
  
   

  //Async function to get hostId from server then players from server

  leavingLobby(x: string) {
    this.compareHostId(x);
    this.wsService.closeServer();
  }
  //Makes random name for player. For testing purposes.
  /*  testPlayers(){
    let randName = Math.random().toString(36).substring(7);
    this.players.push(randName);
  } */
  compareHostId(x: string) {
    this.wsService.sendToServer({ action: 'admin', data: { path: 'compareHost', lobbyCode: x, name: '' } });
  }
}

