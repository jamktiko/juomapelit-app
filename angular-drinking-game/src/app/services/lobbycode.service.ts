import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LobbycodeService {
  public lobbycode = '';

  changeLobbycode(x: string) {
    this.lobbycode = x;
  }

  constructor() {}
}
