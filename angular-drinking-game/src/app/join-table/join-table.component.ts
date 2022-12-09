import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-join-table',
  templateUrl: './join-table.component.html',
  styleUrls: ['./join-table.component.css'],
})
export class JoinTableComponent implements OnInit {
  constructor() {}

  isCollapsed = true;

  toggleCollapse() {
    if(this.isCollapsed) {
      this.isCollapsed = false;
    } else {
      this.isCollapsed = true;
    }
  }

  ngOnInit(): void {}
}
