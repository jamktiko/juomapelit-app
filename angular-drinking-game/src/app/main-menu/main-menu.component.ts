import { Component, OnInit } from '@angular/core';
import { ModalService } from '../_modal';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css'],
})
export class MainMenuComponent implements OnInit {
  constructor(public modalService: ModalService) {}

  ngOnInit(): void {}
}
