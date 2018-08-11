import { Component, OnInit } from '@angular/core';
 // 1 Import class Quote
 import { Quote} from '../quote';

@Component({
  selector: 'app-quote-author',
  templateUrl: './quote-author.component.html',
  styleUrls: ['./quote-author.component.css']
})
export class QuoteAuthorComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
