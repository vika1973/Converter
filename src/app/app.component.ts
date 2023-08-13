import {Component } from '@angular/core';
import { CurrencyDataService } from './components/services/currency-data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {      

  constructor(public api: CurrencyDataService){  } 

  currencies: any = [
    {
      cc: "USD",
      rate: 0
    },
    {
      cc: "EUR",
      rate: 0
    },
    {
      cc: "PLN",
      rate: 0
    }
    ];        
   
  setCurrencies() {
    this.api.takeData().subscribe((dataCurrency: []) => {
      dataCurrency.forEach((data : {cc: string, rate: number}) => {
        if (data.cc === "USD") {
          this.currencies[0].rate = data.rate;             
          console.log("USD"+" "+this.currencies[0].rate);       
        }     
        if (data.cc === "EUR") {
          this.currencies[1].rate = data.rate;          
          console.log("EUR"+" "+this.currencies[1].rate);       
        }     
        if (data.cc === "PLN") {
          this.currencies[2].rate = data.rate;          
          console.log("PLN"+" "+this.currencies[2].rate);       
        }                                 
      });
    });             
  }    
 
}
