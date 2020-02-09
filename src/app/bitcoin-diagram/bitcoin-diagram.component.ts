import { Component, OnInit } from '@angular/core';
import { TickerService } from "../ticker.service";

import { Chart } from 'chart.js';

@Component({
  selector: 'app-bitcoin-diagram',
  templateUrl: './bitcoin-diagram.component.html',
  styleUrls: ['./bitcoin-diagram.component.css']
})
export class BitcoinDiagramComponent implements OnInit {

  public diagramData;

  constructor(private tickerService: TickerService) {

  }

  ngOnInit() {


    //Testcode von https://www.chartjs.org/docs/latest/getting-started/
    //hat leider nicht funktioniert bzw. fehler nicht gefunden
  
    /* var canvas = <HTMLCanvasElement>document.getElementById('myChart');
    var ctx = canvas.getContext('2d');
    var chart = new Chart(ctx, {
      // The type of chart we want to create
      type: 'line',

      // The data for our dataset
      data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
          label: 'My First dataset',
          backgroundColor: 'rgb(255, 99, 132)',
          borderColor: 'rgb(255, 99, 132)',
          data: [0, 10, 5, 2, 20, 30, 45]
        }]
      },

      // Configuration options go here
      options: {}
    }); */

  }

  getTransaytionsPerDay() {
    this.tickerService.getTransactionsPerDay().subscribe(
      data => { this.diagramData = data; }
    );
  }

}
