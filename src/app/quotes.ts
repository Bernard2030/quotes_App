export class Quotes {
  [x: string]: any;
  showDescription: boolean;
  constructor(public id: number,public author: string, public quoteType:string, public description: string, public quoteCreator:string,  public createdDate:Date, public Upvote:number=0, DownVote:number=0){
    this.showDescription=false;
  }
}

// *ngIf='quote.showDescription' [quotes]='quotes'
