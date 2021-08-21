import { Component, Input, OnInit } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-quotes-detail',
  templateUrl: './quotes-detail.component.html',
  styleUrls: ['./quotes-detail.component.css']
})
export class QuotesDetailComponent implements OnInit {

  @Input() quote: Quotes;
  // @Output()isComlete = new EventEmitter<boolean>();

  // quoteComplete(complete:boolean){
  //   this.isComplete.emit(complete)
  // }

  constructor() { }

  ngOnInit(): void {
  }

}
