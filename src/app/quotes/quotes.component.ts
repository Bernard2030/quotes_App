import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  quotes:Quotes[] = [
    {id:1, name:'Morgan', quoteType:'Motivational', description:'The love of skirts will kill you'},
    {id:2, name:'Bencarson', quoteType:'Inspiration', description:'The value of love is unmatched'},
    {id:3, name:'Lawrence', quoteType:'Love', description:'Love your neigbour as you love your self'},
    {id:4, name:'Sydney', quoteType:'Success', description:'Never Compromise ladie life'},
    {id:5, name:'Labeca', quoteType:'Life', description:'Count on me always'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
