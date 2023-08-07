import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Currency converter';
  currency1 : number = 0;
  currency2 : number = 0;
  result : number = 0;

   //пусть курс валюты USD 37.23  
  usdKurs : number = 37.25;
   //пусть курс валюты UAH 0.0268
  uahKurs : number = 0.0268;

  fromCurrencyInput(e: any): void{
    this.currency1 = e.target.value;       
    this.result = this.currency1 * this.usdKurs;
    console.log("USD --> UAH "+ this.result);
  }

  toCurrencyInput(e: any): void{
    this.currency2 = e.target.value;  
    this.result = this.currency2 * this.uahKurs;
    console.log("UAH --> USD "+ this.result);
  }    
}
