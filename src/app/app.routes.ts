import { SalesVisitMapComponent } from './components/sales-visit-map/sales-visit-map.component';
import { Routes } from '@angular/router';
import { AddSalesVisitComponent } from './components/add-sales-visit/add-sales-visit.component';

export const routes: Routes = [
  { path: '', component: SalesVisitMapComponent, pathMatch: 'full' },
  { path: 'add-sales-visits', component: AddSalesVisitComponent },
];
