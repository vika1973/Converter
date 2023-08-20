import { Component, Input } from '@angular/core';
import { CurrencyDataService } from '../services/currency-data.service';

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.css']
})
export class CurrencyComponent {
  title = 'Курси валют';  

  constructor(public api: CurrencyDataService){  }   
  
  @Input() currencies: any = [
    {
      cc: "",
      rate: 0
    }   
    ];       
}
