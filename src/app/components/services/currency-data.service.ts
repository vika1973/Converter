import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CurrencyDataService {

  constructor(public api: HttpClient) { }
          
  getCurrencies():Observable<any> {
    return this.api
      .get('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json')
      .pipe(
        map((res: any) =>
          res.map((data: any) => {
            return { cc: data.cc, rate: data.rate };
          })
        )
      )    
  }

}
