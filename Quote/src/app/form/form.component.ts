import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Form } from '../form';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  newQuote= new Form("", "", "", new Date(),0,0);

  @Output() formComplete= new EventEmitter<Form>();

  onSubmit(newQuote){
    this.formComplete.emit(this.newQuote);
    }
  constructor() { }

  ngOnInit() {
  }

}
