import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
// 1 import Quote class
import {Quote} from '../quote';
import { $ } from 'protractor';

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

  @Input()  Quote: Quote;
  // 4 emitter object taking a boolean
  @Output() isComplete = new EventEmitter<boolean>();

  // 5 creating quoteComplete function
    quoteComplete(complete: boolean) {
      // 6 calling emit method on isComplete EventEmitter object passing event to parent company
      this.isComplete.emit(complete);
    }
   // 3 create addNewQuote function
  addNewQuote(quote) {
   const quoteLength = this.quote.length;
   quote.id = quoteLength + 1;
   this.quote.push(quote);
  }
//  // 6 deleteQuote function taking boolean value and index of goal
//   deleteQuote(isComplete) {
//     if (isComplete) {
//       const toDelete = confirm(`YOU STILL CANNOT TAKE IT BACK!!'${this.quote[index].saying}`);

//       if (toDelete) {
//         this.quote.splice(index, 1);
//       }
//     }
//   }
  constructor() { }

  ngOnInit() {
  }

}
