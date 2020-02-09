import { Component, OnInit } from '@angular/core';
import { TickerService } from "../ticker.service";


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

//let data;

export class DashboardComponent implements OnInit {

  public ticker;
  public cap;
  public usd;

  test: Array<Object> = [];
  constructor(private tickerService: TickerService) { }

  ngOnInit() {
    this.getTicker();
  }

  /*async loadData() {
    let response = await fetch('https://www.blockchain.com/ticker');
    let data = await response.json();
    //console.log(data);
    this.data = data.USD;
    return data;
  } */

  getMarketcap(){
    this.tickerService.getMarketcap().subscribe(
      data => {this.cap = data;}
    );
  }

  getTicker() {
    this.tickerService.getTicker().subscribe(
      data => {
      this.ticker = data;
      this.usd = data["USD"];
      console.log(this.usd);
        console.log(this.ticker);
        for (let key in data) {
          console.log(data[key]);
        }
      },
      err => console.error(err),
      () => console.log("ticker geladen")
    );
  }

}
