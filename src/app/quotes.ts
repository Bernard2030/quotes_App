export class Quotes {
  showDescription: boolean;
  constructor(public id: number,public author: string, public quoteType:string, public description: string, public quoteCreator:string,  public createdDate:Date, public Upvote:number=0){
    this.showDescription=false;
  }
}

// *ngIf='quote.showDescription' [quotes]='quotes'
