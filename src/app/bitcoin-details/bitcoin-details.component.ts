import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bitcoin-details',
  templateUrl: './bitcoin-details.component.html',
  styleUrls: ['./bitcoin-details.component.css']
})
export class BitcoinDetailsComponent implements OnInit {

  details = {
    marketcap: {
      titel: "Marktkapitalisierung",
      url: "https://blockchain.info/q/marketcap"
    },
    totalbc: {
      titel: "Anzahl aller Bitcoins im Umlauf",
      url: "https://blockchain.info/q/totalbc"
    },
    transactioncount: {
      titel: "Anzahl der Transaktionen in den letzten 24h",
      url: "https://blockchain.info/q/24hrtransactioncount"
    },
    btcsent: {
      titel: "Anzahl gesendeter Bitcoin in den letzten 24h",
      url: "https://blockchain.info/q/24hrbtcsent"
    },
    hashrate: {
      titel: "Aktuelle Hashrate",
      url: "https://blockchain.info/q/hashrate"
    },
    getdifficulty: {
      titel: "Aktueller Schwierigkeitsgrad",
      url: "https://blockchain.info/q/getdifficulty"
    },
  }

  constructor() { }

  initDetails() {
    for (var detail in this.details) {
      console.log(this.details[detail]);
      let titel = this.details[detail].titel;

      fetch(this.details[detail].url)
        .then((response) => {
          return response.text();

        })
        .then((result) => {

          let container = document.createElement("div");

          let n1 = document.createElement("div");
          let t1 = document.createTextNode(titel+": ");
          n1.appendChild(t1);
          container.appendChild(n1);

          let n2 = document.createElement("div");
          let t2 = document.createTextNode(result);
          n2.appendChild(t2);
          container.appendChild(n2);

          //let node = document.createTextNode(prop + ": " + myJson[prop].buy + "||" + myJson[prop].sell);
          //row.appendChild(node);

          var element = document.getElementById("detailsContainer");
          element.appendChild(container);

        });
    }



  }

  ngOnInit() {
    this.initDetails();
  }



}
