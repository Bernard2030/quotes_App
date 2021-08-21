import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-quotes-detail',
  templateUrl: './quotes-detail.component.html',
  styleUrls: ['./quotes-detail.component.css']
})
export class QuotesDetailComponent implements OnInit {

  @Output() quoteDeleteEvent = new EventEmitter<Quotes>();

  quotesDelete(theQuoteToDelete:Quotes){
  this.quoteDeleteEvent.emit(theQuoteToDelete)

  }

  @Input() quote: Quotes;
  

  constructor() { }

  ngOnInit(): void {
  }

}
