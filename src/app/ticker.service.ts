import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { MessageService } from './message.service';


@Injectable({
  providedIn: 'root'
})
export class TickerService {

 /*  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }; */

  public currencies:String[];

  constructor(private http:HttpClient, private messageService: MessageService) {
    this.currencies = ["EUR","USD","AUD","NZD","GBP"];
  }
 
    // Uses http.get() to load data from a single API endpoint
    getTicker():Observable<any> {
      return this.http.get("https://www.blockchain.com/ticker")
      .pipe(
        tap(_ => console.log('fetched data')),
        catchError(this.handleError('error', []))
      );
    }

    getMarketcap():Observable<any>{
      return this.http.get("https://blockchain.info/q/marketcap")
      .pipe(
        tap(_ => console.log('fetched data')),
        catchError(this.handleError('error', []))
      );
    }

    getTotalbc():Observable<any>{
      return this.http.get("https://blockchain.info/q/totalbc")
      .pipe(
        tap(_ => console.log('fetched data')),
        catchError(this.handleError('error', []))
      );
    }

    getTransactioncount():Observable<any>{
      return this.http.get("https://blockchain.info/q/24hrtransactioncount")
      .pipe(
        tap(_ => console.log('fetched data')),
        catchError(this.handleError('error', []))
      );
    }

    getBtcsent():Observable<any>{
      return this.http.get("https://blockchain.info/q/24hrbtcsent")
      .pipe(
        tap(_ => console.log('fetched data')),
        catchError(this.handleError('error', []))
      );
    }

    getHashrate():Observable<any>{
      return this.http.get("https://blockchain.info/q/hashrate")
      .pipe(
        tap(_ => console.log('fetched data')),
        catchError(this.handleError('error', []))
      );
    }

    getDifficulty():Observable<any>{
      return this.http.get("https://blockchain.info/q/getdifficulty")
      .pipe(
        tap(_ => console.log('fetched data')),
        catchError(this.handleError('error', []))
      );
    }

    getTransactionsPerDay():Observable<any>{
      return this.http.get("https://api.blockchain.info/charts/n-transactions?format=json")
      .pipe(
        tap(_ => console.log('fetched data')),
        catchError(this.handleError('error', []))
      );
    }

    private handleError<T> (operation = 'operation', result?: T) {
      return (error: any): Observable<T> => {
  
        // TODO: send the error to remote logging infrastructure
        console.error(error); // log to console instead
  
        // TODO: better job of transforming error for user consumption
        this.log(`${operation} failed: ${error.message}`);
  
        // Let the app keep running by returning an empty result.
        return of(result as T);
      };
    }

    private log(message: string) {
      this.messageService.add(`TickerService: ${message}`);
    }

}
