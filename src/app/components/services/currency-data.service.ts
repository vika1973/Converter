import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CurrencyDataService {

  constructor(public api: HttpClient) { }
  
  takeData(): Observable<any>{ 
    return this.api.get('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json')
  }

}
