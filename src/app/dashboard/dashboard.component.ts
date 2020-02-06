import { Component, OnInit } from '@angular/core';
import { TestBed } from '@angular/core/testing';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

//let data;

export class DashboardComponent implements OnInit {

  data;

  test: Array<Object> = [];
  constructor() { }

  ngOnInit() {

    //let blob = await fetch('https://www.blockchain.com/ticker');

    fetch('https://www.blockchain.com/ticker')
      .then((response) => {
        return response.json();

      })
      .then((myJson) => {
        for (var prop in myJson) {
          let row = document.createElement("tr");

          let n1 = document.createElement("td");
          let t1 = document.createTextNode(prop);
          n1.appendChild(t1);
          row.appendChild(n1);

          let n2 = document.createElement("td");
          let t2 = document.createTextNode(myJson[prop].buy);
          n2.appendChild(t2);
          row.appendChild(n2);

          let n3 = document.createElement("td");
          let t3 = document.createTextNode(myJson[prop].sell);
          n3.appendChild(t3);
          row.appendChild(n3);

          //let node = document.createTextNode(prop + ": " + myJson[prop].buy + "||" + myJson[prop].sell);
          //row.appendChild(node);

          var element = document.getElementById("dashboardTable");
          element.appendChild(row);
          //console.log(myJson[prop]);
        }


        console.log(Object.keys(myJson).map(function (key) {
          //test.push([key,myJson[key]]);
          return [key, myJson[key]];
        }));



        //var data = JSON.parse(myJson);
        //this.data = myJson;
      });

    this.loadData().then();

    //console.log(this.data);
  }

  async loadData() {
    let response = await fetch('https://www.blockchain.com/ticker');
    let data = await response.json();
    //console.log(data);
    this.data = data.USD;
    return data;
  }


}
