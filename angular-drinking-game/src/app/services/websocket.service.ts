import { Injectable } from '@angular/core';
import { webSocket } from 'rxjs/webSocket';

@Injectable({
  providedIn: 'root',
})
export class WebsocketService {
  subject = webSocket('wss://gjv4qktnr1.execute-api.us-east-1.amazonaws.com/production');

  constructor() {}

  sendToServer(event: any) {
    this.subject.subscribe();
    this.subject.next(event);
    console.log('Message sent to server : ' + event);
  }

  closeServer() {
    this.subject.complete();
    console.log('Connection closed');
  }
}
