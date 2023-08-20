import {Component, OnInit } from '@angular/core';
import { CurrencyDataService } from './components/services/currency-data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{      

  constructor(public api: CurrencyDataService){  } 

  currencies: any = [
    {
      cc: "USD",
      rate: 0
    },
    {
      cc: "EUR",
      rate: 0
    }
    ];           

  usd: number = 0;
  eur : number = 0;
 
  setCurrencies() {
    this.api.takeData().subscribe((dataCurrency: []) => {
      dataCurrency.forEach((data : {cc: string, rate: number}) => {
        if (data.cc === "USD") {
          this.currencies[0].rate = data.rate;   
          this.usd = data.rate;   
          console.log(this.usd);       
          console.log("USD"+" "+this.currencies[0].rate);       
        }     
        if (data.cc === "EUR") {
          this.currencies[1].rate = data.rate;          
          this.eur = data.rate;
          console.log("EUR"+" "+this.currencies[1].rate);       
        }
      });
    });           
    //  this.api.takeData().subscribe(res => this.currencies.cc = "USD")
  }    
  
  ngOnInit(): void {
     this.setCurrencies();
  }  
}
