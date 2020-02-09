import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { TickerService } from '../ticker.service';

@Component({
  selector: 'app-bitcoin-converter',
  templateUrl: './bitcoin-converter.component.html',
  styleUrls: ['./bitcoin-converter.component.css']
})
export class BitcoinConverterComponent implements OnInit {

  selectedCurrency;
  currencyData;

  userInput:number;
  output:number;

  constructor(private tickerService:TickerService) { 
    this.selectedCurrency = "EUR";
    this.userInput = 0;
    this.output = 0;
  }

  ngOnInit() {
    this.getCurrencyData();
  }

  currencyConvert() {
    this.output = this.userInput / this.currencyData[this.selectedCurrency].last;
  }

  getCurrencyData() {
    this.tickerService.getTicker().subscribe(
      data => {
      this.currencyData = data;
      },
      err => console.error(err),
      () => console.log("ticker geladen")
    );
  }


}
