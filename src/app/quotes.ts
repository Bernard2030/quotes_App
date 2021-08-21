export class Quotes {
  showDescription: boolean;
  constructor(public id: number,public author: string, public quoteType:string, public description: string, public quoteCreator:string,  public createdDate:Date){
    this.showDescription=false;
  }
}
