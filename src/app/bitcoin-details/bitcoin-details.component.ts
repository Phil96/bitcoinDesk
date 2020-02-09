import { Component, OnInit } from '@angular/core';
import { TickerService } from "../ticker.service";

@Component({
  selector: 'app-bitcoin-details',
  templateUrl: './bitcoin-details.component.html',
  styleUrls: ['./bitcoin-details.component.css']
})
export class BitcoinDetailsComponent implements OnInit {

  private details:Object = [
    {
      titel: "Marktkapitalisierung",
      value: ""
    },
    {
      titel: "Anzahl aller Bitcoins im Umlauf",
      value: ""
    },
    {
      titel: "Anzahl der Transaktionen in den letzten 24h",
      value: ""
    },
    {
      titel: "Anzahl gesendeter Bitcoin in den letzten 24h",
      value: ""
    },
    {
      titel: "Aktuelle Hashrate",
      value: ""
    },
    {
      titel: "Aktueller Schwierigkeitsgrad",
      value: ""
    },
  ]

  constructor(private tickerService:TickerService) { }


  ngOnInit() {
    this.getMarketcap();
    this.getTotalbc();
    this.getTransactioncount();
    this.getBtcsent();
    this.getHashrate();
    this.getDifficulty();
  }

  getMarketcap(){
    this.tickerService.getMarketcap().subscribe(
      data => {this.details[0].value = data;}
    );
  }

  getTotalbc(){
    this.tickerService.getTotalbc().subscribe(
      data => {this.details[1].value = data;}
    );
  }

  getTransactioncount(){
    this.tickerService.getTransactioncount().subscribe(
      data => {this.details[2].value = data;}
    );
  }

  getBtcsent(){
    this.tickerService.getBtcsent().subscribe(
      data => {this.details[3].value = data;}
    );
  }

  getHashrate(){
    this.tickerService.getHashrate().subscribe(
      data => {this.details[4].value = data;}
    );
  }

  getDifficulty(){
    this.tickerService.getDifficulty().subscribe(
      data => {this.details[5].value = data;}
    );
  }  



}
