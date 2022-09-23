import { Component, OnInit } from '@angular/core';
import { KORTIT } from '../mock-cards';
import { Kortti } from '../kortti';

@Component({
  selector: 'app-deck',
  templateUrl: './deck.component.html',
  styleUrls: ['./deck.component.css']
})

export class DeckComponent implements OnInit {
  loppu = false; // Onko peli loppu vai ei
  kortit = KORTIT;
  korttiLkm = 1; // Montako korttia on pelattu
  constructor() { }

  shufflatutKortit: any[] = []; // Shufflattu korttipakka
  pelatutKortit: any[] = []; // Taulukko pelatuille korteille. Lähinnä debuggausta varten

  ngOnInit(): void {
    this.shufflatutKortit = this.shuffle(this.kortit); // Shufflaa kortit
  }
  
  shuffle(kortit: Kortti[]) {
    for (let i = kortit.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [kortit[i], kortit[j]] = [kortit[j], kortit[i]];
    }
    return kortit;
  } // https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
  

  seuraava() {
    this.korttiLkm++;
    this.pelatutKortit.push(this.shufflatutKortit[0]);
    this.shufflatutKortit.splice(0, 1);
    if (this.shufflatutKortit.length === 0) {
      this.loppu = true;
  }
  console.log(this.kortit)
}
  uusiPeli() {
    this.loppu = false;
    this.korttiLkm = 1;
    this.shufflatutKortit = this.shuffle(this.pelatutKortit);
    this.pelatutKortit = [];
    console.log(this.kortit)
  }
}
