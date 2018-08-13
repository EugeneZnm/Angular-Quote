import { Component } from '@angular/core';
// 1 import class Quote
import { Quote} from './quote';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // 2 create array of instances of class Quote
  quote = [
    new Quote(1, 'what does not kill you', 'Nietzsche', 'Luther', 0, 0, new Date (2018, 7, 14))
  ];

  constructor () { }
}
