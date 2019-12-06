import { CalendarioComponent } from './components/calendario/calendario.component';

import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChartsComponent } from './components/charts/charts.component';
const routes: Routes = [
  { path: '', component: HomeComponent },

  {path: 'calendario', component: CalendarioComponent},
  {path: 'charts', component:ChartsComponent},
  { path: '**', redirectTo: '' }


//   { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: [],
})
export class RoutingModule { }


