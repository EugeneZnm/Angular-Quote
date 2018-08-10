import { Component, OnInit } from '@angular/core';
 // 1 Import class Quote
 import { Quote} from '../quote';

@Component({
  selector: 'app-quote-author',
  templateUrl: './quote-author.component.html',
  styleUrls: ['./quote-author.component.css']
})
export class QuoteAuthorComponent implements OnInit {

   // 2 create array of instances of class Quote
   quote = [
    new Quote(1, 'what does not kill you', 'Nietzsche', 'Luther')
  ];
  constructor() { }

  ngOnInit() {
  }

}
