import { Component, OnInit, Input } from '@angular/core';
import{ Form } from '../form';
import { Quote } from '@angular/compiler';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes = [
    new Form("Jeff Ross","Elbert Herbad","Don't Take life too serious or else you will never get out of it alive",new Date(2018,4,10), 0, 0),
    new Form("Seth MacFarlane","Reba McEntire","To Succeed in Life one needs three things: a WishBone, a BackBone and a Funny Bone",new Date(2018,4,10), 0, 0),
    new Form("John Deere","Chris Rock","Behind every great man is a woman rolling her eyes",new Date(2018,4,10), 0, 0),
  ]

  @Input() quoteVote:Quote;

  onClick(index){
    this.quotes[index].showDetails= !this.quotes[index].showDetails;
  }
  addNewQuote(quote){
    this.quotes.push(quote);
  }
  quoteDelete(index){
    if(index){
      this.quotes.splice(index,1);
    }
  }

  constructor() { }
  ngOnInit() {
  }
}
