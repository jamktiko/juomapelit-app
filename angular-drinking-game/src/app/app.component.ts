import { Component } from '@angular/core';
import { ModalService } from './_modal';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-drinking-game';

  constructor(public modalService: ModalService) {}
}
