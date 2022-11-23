import { Component, OnInit } from '@angular/core';
import { WebsocketService } from 'src/app/services/websocket.service';

@Component({
  selector: 'app-join-lobby',
  templateUrl: './join-lobby.component.html',
  styleUrls: ['./join-lobby.component.css'],
})
export class JoinLobbyComponent implements OnInit {
  constructor(public wsService: WebsocketService) {}

  ngOnInit(): void {}

  getLobbyCode(val: string) {
    this.msg.data.lobbyCode = val;
    console.log(this.msg);
  }

  getUserInput(val: string) {
    this.msg.data.name = val;
    console.log(this.msg);
  }

  msg = { action: 'admin', data: { path: 'addPlayer', lobbyCode: 'ABCD', name: 'pelaaja1' } };
}
