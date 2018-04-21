import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { QuoteComponent } from './quote/quote.component';
import { DateCountPipe } from './date-count.pipe';
import { VoteComponent } from './vote/vote.component';
import { FormComponent } from './form/form.component';


@NgModule({
  declarations: [
    AppComponent,
    QuoteComponent,
    DateCountPipe,
    VoteComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
