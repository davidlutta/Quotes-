import { Component, OnInit } from '@angular/core';
import { Form } from '../form';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  newQuote= new Form("", "", "", new Date(),0,0);
  onSubmit(){
    this.quotes.push(this.newQuote);
    this.newQuote = '';
  }
  constructor() { }

  ngOnInit() {
  }

}
