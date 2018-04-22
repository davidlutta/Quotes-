import { Component, OnInit } from '@angular/core';
import { Form } from '../form';

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.css']
})
export class VoteComponent implements OnInit {
  count: number = 0;
  count2: number = 0;

  onUpVote() {
    return this.count += 1;
  }
  onDownVote() {
    return this.count2 += 1;
  }
  highlight(count, count2){
    if(count >= 100){
      console.log("Wow");
    }
  }
  constructor() { }

  ngOnInit() {
  }

}
