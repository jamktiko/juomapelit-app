import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css'],
})
export class SettingsComponent implements OnInit {
  constructor() {}

  bgON = true;

  turnON() {
    this.bgON = true;
  }
  turnOFF() {
    this.bgON = false;
  }

  ngOnInit(): void {}
}
