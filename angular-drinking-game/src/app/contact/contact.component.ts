import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }

  collapsed: boolean = true;

  openForm() {
    this.collapsed = false;
  }

  closeForm() {
    this.collapsed = true;
  }
  ngOnInit(): void {
  }

}
