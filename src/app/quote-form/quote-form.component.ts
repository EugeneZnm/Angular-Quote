import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Quote } from '../quote';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {

  // New quote property
  newQuote = new Quote(0, '', '', '', 0, 0, new Date ());

  // EventEmitter object of type Quote
  @Output() addQuote = new EventEmitter<Quote>();

  submitQuote(form: NgForm) {
    this.addQuote.emit(this.newQuote);
    form.resetForm();
  }



  constructor() { }

  ngOnInit() {
  }

}
