 export class Form {
  public showDetails:boolean;
  constructor(public name:string, public author:string, public quote:string, public date: Date, public upVote: number, public downVote: number){
    this.showDetails=false;
  }
}
