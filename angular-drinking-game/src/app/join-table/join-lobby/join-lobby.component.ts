import { Component, OnInit } from '@angular/core';
import { WebsocketService } from 'src/app/services/websocket.service';
import { LobbycodeService } from 'src/app/services/lobbycode.service';

@Component({
  selector: 'app-join-lobby',
  templateUrl: './join-lobby.component.html',
  styleUrls: ['./join-lobby.component.css'],
})
export class JoinLobbyComponent implements OnInit {
  messageFromServer: any;
  constructor(public wsService: WebsocketService, private lcservice: LobbycodeService) {}

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
  }

  getLobbyCode(val: string) {
    this.msg.data.lobbyCode = val;
    console.log(this.msg);
    this.lcservice.lobbycode = val;
  }

  getUserInput(val: string) {
    this.msg.data.name = val;
    console.log(this.msg);
  }

  msg = { action: 'admin', data: { path: 'addPlayer', lobbyCode: 'ABCD', name: 'pelaaja1' } };
}
