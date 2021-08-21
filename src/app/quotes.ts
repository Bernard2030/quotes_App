export class Quotes {
  showDescription: boolean;
  constructor(public id: number,public name: string, public quoteType:string, public description: string, public createdDate:Date){
    this.showDescription=false;
  }
}
