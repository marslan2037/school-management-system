import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { AllSalesComponent } from '../sale/all-sales/all-sales.component';
// import { NewSaleComponent } from '../sale/new-sale/new-sale.component';

import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
  { 
    path: '', 
    component: DashboardComponent,
    
    // children: [
    //   {
    //     path: 'sale/new',
    //     component: NewSaleComponent
    //   },
    //   {
    //     path: 'sale/all',
    //     component: AllSalesComponent
    //   },
    // ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }