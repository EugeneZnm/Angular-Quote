import { Component, OnInit, Input } from '@angular/core';
// 1 import Quote class
import {Quote} from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

    // 2 create array of instances of class Quote
  quote = [
    new Quote(1, 'what does not kill you', 'Nietzsche', 'Luther', 0, 0, new Date (2018, 7, 14, 12))
  ];

  @Input()  Quote: Quote;

   // 3 create addNewQuote function
  addNewQuote( quote) {
   const quoteLength = this.quote.length;
   quote.id = quoteLength + 1;
   this.quote.push(quote);
  }
 // 5 deleteQuote function taking boolean value of quote
  deleteQuote(index) {
    this.quote.splice(index, 1);
  }
 // upvote function
upVote(index) {
  this.quote[index].cool ++;
}
// downvote function
downVote(index) {
  this.quote[index].sucks --;
}
  constructor() { }

  ngOnInit() {
 }
}
