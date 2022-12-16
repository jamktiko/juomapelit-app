import { Component, OnInit } from '@angular/core';
import { WebsocketService } from 'src/app/services/websocket.service';
import { LobbycodeService } from 'src/app/services/lobbycode.service';

@Component({
  selector: 'app-create-lobby',
  templateUrl: './create-lobby.component.html',
  styleUrls: ['./create-lobby.component.css'],
})
export class CreateLobbyComponent implements OnInit {
  koodi = this.randomFourLetterCode();
  messageFromServer: any;

  constructor(public wsService: WebsocketService, private lcservice: LobbycodeService) {}

  ngOnInit(): void {
    this.randomFourLetterCode();
    this.lcservice.changeLobbycode(this.koodi);
    this.lcservice.changeHost();
    this.wsService.messages$.subscribe({
      next: (x) => {
        this.messageFromServer = x;
      },
      error(err: any) {
        console.error('something wrong occurred: ' + err);
      },
    });
  }

  randomFourLetterCode() {
    let text = '';
    let possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    for (let i = 0; i < 4; i++) text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
  }

  getUserInput(val: string) {
    this.msg.data.name = val;
  }

  msg = { action: 'admin', data: { path: 'hostLobby', lobbyCode: this.koodi, name: 'pelaaja1' } };
}
