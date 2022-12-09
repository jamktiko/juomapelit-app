import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LobbycodeService {
  public lobbycode = '';
  public isHost= false;
  changeLobbycode(x: string) {
    this.lobbycode = x;
  }

  changeHost() {
    this.isHost = true;
  }

  changeHostFalse() {
    this.isHost = false;
  }

  constructor() {}
}
