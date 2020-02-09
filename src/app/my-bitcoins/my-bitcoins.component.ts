import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-bitcoins',
  templateUrl: './my-bitcoins.component.html',
  styleUrls: ['./my-bitcoins.component.css']
})
export class MyBitcoinsComponent implements OnInit {

  public  userInput:number;
  public  myBitcoins:number;

  constructor() {
    //sessionStorage.setItem("myBitcoins", "0");
    this.myBitcoins = 0;
    this.userInput = 0;
  }

  ngOnInit() {
    this.myBitcoins = parseInt(localStorage.getItem("myBitcoins").valueOf());
  }



  //Versuch mit localStorage
  //leider ohne Erfolg
addBitcoins(){
    let currBitcoins = parseInt(localStorage.getItem("myBitcoins").valueOf());
    let addedBitcoins = this.userInput;
    
    let newBitcoins = currBitcoins + addedBitcoins;
    this.myBitcoins = newBitcoins;
    
    localStorage.setItem("myBitcoins", newBitcoins.toString());
    console.log(localStorage.getItem("myBitcoins").valueOf());
  
  } 

  deleteBitcoins(){
      let currBitcoins = parseInt(localStorage.getItem("myBitcoins").valueOf());
      let addedBitcoins = this.userInput;
      
      let newBitcoins = currBitcoins - addedBitcoins;
      this.myBitcoins = newBitcoins;
      
      localStorage.setItem("myBitcoins", newBitcoins.toString());
      console.log(localStorage.getItem("myBitcoins").valueOf());
    
    
  }


}
