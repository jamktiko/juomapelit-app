import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-lobby',
  templateUrl: './create-lobby.component.html',
  styleUrls: ['./create-lobby.component.css']
})
export class CreateLobbyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  this.randomFourLetterCode();}

  randomFourLetterCode() {
    let text = "";
    let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    for (let i = 0; i < 4; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
  }

  koodi = this.randomFourLetterCode();
}