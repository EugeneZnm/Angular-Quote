import { Component, OnInit } from '@angular/core';
  // 1 import class Quote
  import {Quote} from '../quote';
@Component({
  selector: 'app-quote-publisher',
  templateUrl: './quote-publisher.component.html',
  styleUrls: ['./quote-publisher.component.css']
})
export class QuotePublisherComponent implements OnInit {

  // 2 create array of instances of class Quote
  quote = [
    new Quote(1, 'what does not kill you', 'Nietzsche', 'Luther', 0, 0, new Date (2018, 7, 14, 0))
  ];
  constructor() { }

  ngOnInit() {
  }

}
