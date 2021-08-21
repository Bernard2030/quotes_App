import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  quotes:Quotes[] = [
    new Quotes(1, "Morgan", "confidence", "No body can make you feel inferior without your consent", new Date("2021, 5, 16"))
    new Quotes(1, "BenCarson", )
    // {1, 'Morgan', 'Confidence', 'No body can make you feel inferior without your consent'},
    // {id:2, :'Bencarson', quoteType:'Inspiration', description:'Aperson who never made a mistake never tried anything new.'},
    // {id:3, name:'Lawrence', quoteType:'Love', description:'Love your neigbour as you love your self'},
    // {id:4, name:'Sydney', quoteType:'Success', description:'Continuous efforts, not strength or intelligence is the key to unlocking our potential'},
    // {id:5, name:'Dorcas', quoteType:'Love', description:'No woman ever hates a man for being in love with her,but many a woman hates a man for being a friend to her'},
    // {id:6, name:'Bernard', quoteType:'Change', description:'They say that time changes things but you actually have to change them yourself'},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
