import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { webSocket } from 'rxjs/webSocket';

@Injectable({
  providedIn: 'root',
})
export class WebsocketService {
  private socket$ = webSocket('wss://gjv4qktnr1.execute-api.us-east-1.amazonaws.com/production');
  public messages$ = this.socket$.asObservable();

  public wsData: any;

  constructor() {}


  sendToServer(msg: any) {
    this.socket$.next(msg);
    //console.log('Message sent to server : ' + JSON.stringify(event));
  }

  closeServer() {
    this.socket$.complete();
    console.log('Connection closed');
  }
}
