import { Component, OnInit } from '@angular/core';
import{ Form } from '../form';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes = [
    new Form("David Lutta","John Doe","Eat Healthy to remain Healthy",new Date(2018,4,10), 0, 0),
    new Form("David Lutta","John Doe","Eat Healthy to remain Healthy",new Date(2018,4,10), 0, 0),
    new Form("David Lutta","John Doe","Eat Healthy to remain Healthy",new Date(2018,4,10), 0, 0),
  ]

  onClick(index){
    this.quotes[index].showDetails= !this.quotes[index].showDetails;
  }

  constructor() { }
  ngOnInit() {
  }

}
