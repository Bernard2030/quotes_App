import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  quotes:Quotes[] = [
    new Quotes(1, "Morgan", "confidence", "No body can make you feel inferior without your consent", "created By Bernard",  new Date("2021, 8, 21")),
    new Quotes(2, "BenCarson","Inspiration", "A person who never made a mistake never tried anything new", "created By Bernard", new Date("2016, 2, 12")),
    new Quotes(3,"Lawrence", "Love", "Love your neighbors as you love your self", "created By Bernard", new Date("2018,9,9")),
    new Quotes(4, "Dorcas", "Love", "No woman ever hates a man for being in love with her,but many a woman hates a man for being a friend to her", "created By Bernard", new Date("2021, 6, 1")),
    new Quotes(5, "Bernard", "Change", "They say that time changes things but you actually have to change them yourself", "created By Bernard", new Date("2021, 8, 10")),
    new Quotes(6, "Kevin", "Belief", "I'm not storms for I am learning how to sail my ship", "created By Bernard", new Date("2020, 12, 6"))

  ];

  quotesDelete(quoteDeleteEvent, index){
    if (quoteDeleteEvent) {
      let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].quoteType}?`)

      if (toDelete){
        this.quotes.splice(index,1)
      }
    }
  }

  toggleDetails(index){
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }
  Upvote(quoteUpvoteEvent,index){
    if(quoteUpvoteEvent){
      this.quotes[index].Upvote++
    }
  }
  DownVote(quoteDownVoteEvent,index){
    if(quoteDownVoteEvent){
      this.quotes[index].DownVote++
    }
  }
  addnewQuote(quote){
    // let quotelength = this.quotes.length
    // quote.id = quotelength+1
    // quote.createdDate = new Date()
    this.quotes.push(quote)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
