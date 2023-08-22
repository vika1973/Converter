import {Component, OnInit } from '@angular/core';
import { CurrencyDataService } from './components/services/currency-data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {      
  
  currencies: any[] = [];

  constructor(public api: CurrencyDataService){  }    

  usd : number = 0;
  eur : number = 0;  

  ngOnInit(): void {
    this.api.getCurrencies().subscribe((data) => {
      data.forEach((element: any) => {                        
        if (element.cc == 'USD') {
          this.currencies.push(element);
          this.usd = element.rate;
        }
        if (element.cc == 'EUR') {
          this.currencies.push(element);
          this.eur = element.rate;
        }
      });      
    });    
  }   

}
