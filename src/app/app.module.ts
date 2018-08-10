import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { QuoteComponent } from './quote/quote.component';
import { QuoteFormComponent } from './quote-form/quote-form.component';
import { QuoteDetailsComponent } from './quote-details/quote-details.component';
import { QuotePublisherComponent } from './quote-publisher/quote-publisher.component';
import { QuoteAuthorComponent } from './quote-author/quote-author.component';

@NgModule({
  declarations: [
    AppComponent,
    QuoteComponent,
    QuoteFormComponent,
    QuoteDetailsComponent,
    QuotePublisherComponent,
    QuoteAuthorComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
