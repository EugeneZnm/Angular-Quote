import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// 1 Import forms module
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { QuoteComponent } from './quote/quote.component';
import { QuoteFormComponent } from './quote-form/quote-form.component';
import { QuotePublisherComponent } from './quote-publisher/quote-publisher.component';
import { QuoteAuthorComponent } from './quote-author/quote-author.component';

@NgModule({
  declarations: [
    AppComponent,
    QuoteComponent,
    QuoteFormComponent,
    QuotePublisherComponent,
    QuoteAuthorComponent
  ],
  imports: [
    BrowserModule,
    // 2 add imported FormModule to imports array
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
