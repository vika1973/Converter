import { NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { CurrencyDataService } from '../services/currency-data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.css']
})
export class ConverterComponent {               

  title = 'Конвертер валют';

  constructor(public api: CurrencyDataService){  } 

  @Input() currencies:  any = [
    {
      cc: "",
      rate: 0
    }   
    ];                     

  convert_from: number = Number(localStorage.getItem("convert_from"));
  convert_to: number = Number(localStorage?.getItem("convert_to"));

  currency1 : number = 0;
  currency2 : number = 0;
  result : number = 0;
  base = '';  
  
  //курс валюты, которую нужно поменять
  fromCurrencyKurs : number = 0;  
  //курс валюты, на которую нужно поменять
  toCurrencyKurs : number = 0;   
  
  setRates( a: string, mode : number ) {    
    console.log(this.currencies);
    this.currencies.forEach((currency: {cc: string, rate: number}) => {     
      if (currency.cc == a && mode == 0){       
        this.fromCurrencyKurs = currency.rate;
        console.log("Курс fromCurrencyKurs = " + this.fromCurrencyKurs);
      }
      if (currency.cc == a && mode == 1){        
        this.toCurrencyKurs = currency.rate;
        console.log("Курс toCurrencyKurs = " + this.toCurrencyKurs);
      }    
    });    
  }
  
  changeFromCurrencySelect(a: string) {
    this.base = a;     
    this.setRates(a, 0);
    this.result = this.currency1 * this.fromCurrencyKurs;
    console.log(this.fromCurrencyKurs);                                                   
  }
  
  fromCurrencyInput(e: any): void{   
    localStorage.setItem("convert_from", e.target.value);
    this.convert_from = Number(localStorage.getItem("convert_from"));
    this.result = 0;
    if (this.fromCurrencyKurs==0)   
    {
      this.currencies.forEach((currency: {cc: string, rate: number}) => { 
        if (currency.cc == "USD"){       
          this.fromCurrencyKurs = currency.rate;          
        }                                
      });    
    }       
    console.log(this.fromCurrencyKurs);
    this.currency1 = e.target.value;       
    this.result = this.currency1 * this.fromCurrencyKurs;
    console.log(this.fromCurrencyKurs);
    console.log(this.result);    
  }

  changeToCurrencySelect(a: string) {
    this.base = a;     
    this.setRates(a, 1);
    this.result = this.currency2 * this.toCurrencyKurs;
    console.log(this.toCurrencyKurs);                                                   
  }

  toCurrencyInput(e: any): void{   
    localStorage.setItem("convert_to", e.target.value);
    this.convert_to = Number(localStorage.getItem("convert_to"));
    this.result = 0;
    if (this.toCurrencyKurs==0)   
    {
      this.currencies.forEach((currency: {cc: string, rate: number}) => { 
        if (currency.cc == "EUR"){       
          this.toCurrencyKurs = currency.rate;          
        }                                
      });    
    }       
    console.log(this.toCurrencyKurs);
    this.currency2 = e.target.value;       
    this.result = this.currency2 * this.toCurrencyKurs;
    console.log(this.toCurrencyKurs);
    console.log(this.result);    
  }
}
