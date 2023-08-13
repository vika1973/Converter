import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ConverterComponent } from './components/converter/converter.component';
import { CurrencyComponent } from './components/currency/currency.component';
import { CurrencyCorrectPipe } from './components/pipes/currency-correct.pipe';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ConverterComponent,
    CurrencyComponent,
    CurrencyCorrectPipe,                                    
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
