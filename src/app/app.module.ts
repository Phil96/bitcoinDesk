import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BitcoinDetailsComponent } from './bitcoin-details/bitcoin-details.component';
import { BitcoinConverterComponent } from './bitcoin-converter/bitcoin-converter.component';
import { BitcoinDiagramComponent } from './bitcoin-diagram/bitcoin-diagram.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MyBitcoinsComponent } from './my-bitcoins/my-bitcoins.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NavbarComponent,
    BitcoinDetailsComponent,
    BitcoinConverterComponent,
    BitcoinDiagramComponent,
    MyBitcoinsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
