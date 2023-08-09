import { Component } from '@angular/core';

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.css']
})
export class CurrencyComponent {
  title = 'Курси валют'; 

  currencies: any = [
  {
   name: "USD",
   full_name : "Долар США",
   rate: 36.50
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
 }
]
}
