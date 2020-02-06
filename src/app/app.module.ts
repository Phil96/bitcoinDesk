import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BitcoinDetailsComponent } from './bitcoin-details/bitcoin-details.component';
import { BitcoinConverterComponent } from './bitcoin-converter/bitcoin-converter.component';
import { BitcoinDiagramComponent } from './bitcoin-diagram/bitcoin-diagram.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NavbarComponent,
    BitcoinDetailsComponent,
    BitcoinConverterComponent,
    BitcoinDiagramComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
