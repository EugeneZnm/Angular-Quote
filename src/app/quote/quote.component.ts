import { Component, OnInit, Output, Input } from '@angular/core';
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
    new Quote(1, 'what does not kill you', 'Nietzsche', 'Luther')
  ];

   // create addNewQuote function
  addNewQuote(quote) {
   const quoteLength = this.quote.length;
   quote.id = quoteLength + 1;
   this.quote.push(quote);
  }

  constructor() { }

  ngOnInit() {
  }

}
