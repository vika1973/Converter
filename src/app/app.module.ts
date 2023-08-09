import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ConverterComponent } from './components/converter/converter.component';
import { CurrencyComponent } from './components/currency/currency.component';
import { CurrencyCorrectPipe } from './components/pipes/currency-correct.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ConverterComponent,
    CurrencyComponent,
    CurrencyCorrectPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
