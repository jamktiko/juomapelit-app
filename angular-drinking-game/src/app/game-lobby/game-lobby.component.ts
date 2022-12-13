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
  lobbycode = this.lcservice.lobbycode;
  ngOnInit(): void {
    this.lobbyCode = this.lcservice.lobbycode;
    this.wsService.messages$.subscribe(
      (x) => {
        console.log(x);
        //@ts-ignore
        if (x.retData) {
          //@ts-ignore
          this.messageFromServer = JSON.parse(x.retData);
          console.log(this.messageFromServer);
          console.log(JSON.stringify(this.messageFromServer));
        }
      },
      (err) => {
        console.error('something wrong occurred: ' + err);
      }
    );

    this.getLobbyPlayers();
    setTimeout(() => {
      this.insertData();
    }, 5000);
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
      this.wsService.sendToServer({
        action: 'admin',
        data: { path: 'getPlayers', lobbyCode: this.lobbyCode, name: '' },
      });
      this.players = this.messageFromServer;
    }, 2000);
  }

  compareConnectionId(x: string) {
    this.wsService.sendToServer({
      action: 'admin',
      data: { path: 'compareHostId', lobbyCode: this.lobbyCode, name: '' },
    });
  }

  // Lobbycode tulee parametrina tähän funktioon

  //Async function to get hostId from server then players from server

  leavingLobby(x: string) {
    this.wsService.closeServer();
  }
  //Makes random name for player. For testing purposes.
  /*  testPlayers(){
    let randName = Math.random().toString(36).substring(7);
    this.players.push(randName);
  } */

  insertData() {
    this.wsService.sendToServer({
      action: 'admin',
      data: { path: 'updateGameState', lobbyCode: this.lobbycode, turn: '', deck: '', gamestatus: 'inlobby' },
    });
  }
  gamebegining() {
    this.wsService.sendToServer({
      action: 'admin',
      data: { path: 'updateGameState', lobbyCode: this.lobbycode, turn: '', deck: '', gamestatus: 'ingame' },
    });
  }
  test() {
    this.wsService.sendToServer({
      action: 'admin',
      data: { path: 'getAllData', lobbyCode: this.lobbycode, turn: '', deck: '', gamestatus: 'ingame' },
    });
  }
}
