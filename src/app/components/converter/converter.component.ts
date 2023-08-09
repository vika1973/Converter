import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule }   from '@angular/forms';

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.css']
})
export class ConverterComponent {
  title = 'Конвертер валют';
  currency1 : number = 0;
  currency2 : number = 0;
  result : number = 0;
  //пусть курс валюты USD 37.23  
  // usdKurs : number = 37.25;
  //пусть курс валюты UAH 0.0268
  // uahKurs : number = 0.0268;  

  //курс текущей валюты, которую нужно поменять
  fromCurrencyKurs : number = 0;
  //курс текущей валюты, на которую нужно поменять
  toCurrencyKurs : number = 0;

  fromCurrencyInput(e: any): void{   
    //пока так
    if (this.fromCurrencyKurs == 0) 
      this.fromCurrencyKurs= this.currencies[0].rate;
    this.currency1 = e.target.value;       
    this.result = this.currency1 * this.fromCurrencyKurs;
    console.log(this.result);
  }

  toCurrencyInput(e: any): void{
    //пока так
    if (this.toCurrencyKurs == 0) 
      this.toCurrencyKurs = this.currencies[0].rate;
    this.currency2 = e.target.value;  
    this.result = this.currency2 * this.toCurrencyKurs;
    console.log(this.result);   
  }    
    
  select(e: any){
    console.log(e.target.value+" tyt");
  }

  changefromCurrency(e:any ){          
    this.fromCurrencyKurs = e.target.value;
    this.result = this.currency1 * this.fromCurrencyKurs;
    console.log(this.result);        
  }

  changeToCurrency(e:any ){ 
    this.toCurrencyKurs = e.target.value;   
    this.result = this.currency2 * this.toCurrencyKurs;          
    console.log(this.result);        
  }

  currencies: any = [
  {
    name: "USD",
    full_name : "Долар США",
    rate: 36.5
  },
  {
    name: "EUR",
    full_name : "Євро",
    rate: 40.01
  },
  {
    name: "PLN",
    full_name : "Злотий",
    rate: 9.01
  },
]
}
