import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ConverterComponent } from './components/converter/converter.component';
import { CurrencyComponent } from './components/currency/currency.component';
import { CurrencyCorrectPipe } from './components/pipes/currency-correct.pipe';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input'

@NgModule({
  declarations: [
    AppComponent,
    ConverterComponent,
    CurrencyComponent,
    CurrencyCorrectPipe,                                    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
