import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import { Form } from '../form';
// import { quote }from '../quote';

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.css']
})
export class VoteComponent implements OnInit {

  // @Input() quote;

  // upVote(){
  //   return this.quote.upVote ++;
  //   console.log(this.quote.upVote);
  // }

  // @import() quote:quote;

  constructor() { }

  ngOnInit() {
  }

}
