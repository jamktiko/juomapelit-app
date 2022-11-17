import { Component, OnInit } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
import { timeout } from 'rxjs';
import { MainMenuComponent } from '../main-menu/main-menu.component';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }

  submitted = false;
  contactionForm = new FormGroup({
    header: new FormControl(''),
    type: new FormControl(''),
    problem: new FormControl(''),
    email: new FormControl(''),
  })
  
  
  public sendEmail(e: Event) {
    e.preventDefault();
    emailjs.sendForm('service_nzqqia9(x)', 'template_pkkwgxn', e.target as HTMLFormElement, 'VvNpmdrxMAxW2nvcX')
      .then((result: EmailJSResponseStatus) => {
        console.log(result.text);
        console.log("tämä onnistui");
      }, (error) => {
        console.log(error.text);
        console.log("tämä epäonnistui");
      });
    }

  collapsed: boolean = true;

  submitClicked: boolean = false;

  submittedFunction() {
    this.submitClicked = true;
    this.contactionForm.reset();
  }

  openForm() {
    this.collapsed = false;
  }

  closeForm() {
    this.collapsed = true;
  }


  ngOnInit(): void {
  }

}
