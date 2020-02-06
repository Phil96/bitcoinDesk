import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {DashboardComponent} from "./dashboard/dashboard.component";
import {BitcoinDetailsComponent} from "./bitcoin-details/bitcoin-details.component";
import {BitcoinConverterComponent} from "./bitcoin-converter/bitcoin-converter.component";
import {BitcoinDiagramComponent} from "./bitcoin-diagram/bitcoin-diagram.component";



const routes: Routes = [
  {path: "dashboard", component: DashboardComponent},
  {path: "bitcoin-details",component:BitcoinDetailsComponent},
  {path: "bitcoin-converter",component:BitcoinConverterComponent},
  {path: "bitcoin-diagram",component:BitcoinDiagramComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
