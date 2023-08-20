import { Component, EventEmitter, Input, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CurrencyDataService } from '../services/currency-data.service';

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.css']
})
export class ConverterComponent implements OnInit{               

  title = 'Конвертер валют';
  
  constructor(public api: CurrencyDataService){  } 
  
  @Input() currencies: any = [
    {
      cc: "",
      rate: 0
    }   
    ];                     
    
  @Input() usd : number = 0;
  @Input() eur : number = 0;

  currency_control_from = new FormGroup({
    fromInputControl: new FormControl('',Validators.pattern(/^\d+([.])?(\d+)?$/)),
    fromSelectControl: new FormControl({})
  });   

    currency_control_to = new FormGroup({
    toInputControl: new FormControl('', Validators.pattern(/^\d+([.])?(\d+)?$/)),
    toSelectControl: new FormControl({})
  });

  currency_list = {
    name: [""],
    symb: [""],
  }  
  
  currency_data_from = {
    name: "",
    symb: "",
  }

  currency_data_to = {
    name: "",
    symb: "",  
  }

  ngOnInit(): void {              
    this.currency_list = { name: ["USD", "EUR", "UAH"], symb: ["$", "€", "₴"] };
    this.currency_data_from = { name: this.currency_list.name[0], symb: this.currency_list.symb[0] };        
    this.currency_data_to = { name: this.currency_list.name[1], symb: this.currency_list.symb[1] };                                        

    this.currency_control_from.controls.fromSelectControl.setValue(this.currency_data_from.name);
    this.currency_control_to.controls.toSelectControl.setValue(this.currency_data_to.name);
  }   

  currency_convertor(amount: String, from: String, to: String, order: String): Number {
    let first_currency = 0,
    second_currency = 0;
    if (order == "from-to"){
      first_currency = from == "USD" ? this.usd : from == "EUR" ? this.eur : 1;
      second_currency = to == "USD" ? this.usd : to == "EUR" ? this.eur : 1;
    }
    else{       
      first_currency = to == "USD" ? this.usd : to == "EUR" ? this.eur : 1;
      second_currency = from == "USD" ? this.usd : from == "EUR" ? this.eur : 1;
    }             
    return parseFloat((Number(amount) * first_currency / second_currency).toFixed(2));   
  }

  currency_from_input(event: any): void{   
    if (event.target.value != ""){    
      let currency_value = event.target.value;    
      currency_value = this.currency_convertor(currency_value, this.currency_data_from.name, this.currency_data_to.name, "from-to"); 
      console.log(currency_value);
      this.currency_control_to.get('toInputControl')!.setValue(currency_value);    
    }  
    else{
      this.currency_control_to.get('toInputControl')!.setValue('0'); 
    }
  }

  currency_to_input(event: any): void{   
    if (event.target.value != ""){    
      let currency_value = event.target.value;    
      currency_value = this.currency_convertor(currency_value, this.currency_data_from.name, this.currency_data_to.name, "to-from");
      console.log(currency_value);
      this.currency_control_from.get('fromInputControl')!.setValue(currency_value);
    }  
    else{
      this.currency_control_from.get('fromInputControl')!.setValue('0');
    }
  }

  currency_from_change(event: any): void{  
    let currency_index = this.currency_list.name.indexOf(event.value);
    this.currency_data_from = {
      name: this.currency_list.name[currency_index],
      symb: this.currency_list.symb[currency_index]
    };
    let currency_value : any =  this.currency_control_from.get('fromInputControl')?.value;
    currency_value = this.currency_convertor(currency_value, this.currency_data_from.name, this.currency_data_to.name, 'from-to');  
    this.currency_control_to.get('toInputControl')!.setValue(currency_value);      
  }
                            
  currency_to_change(event: any): void{  
    let currency_index = this.currency_list.name.indexOf(event.value);
    this.currency_data_to = {
      name: this.currency_list.name[currency_index],
      symb: this.currency_list.symb[currency_index]
    };
    let currency_value : any =  this.currency_control_to.get('toInputControl')?.value;
    currency_value = this.currency_convertor(currency_value, this.currency_data_from.name, this.currency_data_to.name, 'to-from');  
    this.currency_control_from.get('fromInputControl')!.setValue(currency_value);    
  }
}
