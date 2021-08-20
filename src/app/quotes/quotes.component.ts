import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  quotes:Quotes[] = [
    {id:1, name:'Morgan', description:'The love of skirts will kill you'},
    {id:2, name:'Bencarson', description:'The value of love is unmatched'},
    {id:3, name:'Lawrence', description:'Love your neigbour as you love your self'},
    {id:4, name:'Sydney', description:'Never Compromise ladie life'},
    {id:5, name:'Labeca', description:'Count on me always'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
