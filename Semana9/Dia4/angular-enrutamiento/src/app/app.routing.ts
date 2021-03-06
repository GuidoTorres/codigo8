import { NotFoundComponent } from './components/not-found/not-found.component';
import { CanchasComponent } from './components/canchas/canchas.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'home', component: HomeComponent},
    {path: 'canchas', component: CanchasComponent},
    {path: '**', component: NotFoundComponent}
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    declarations: [],
})
export class RoutingModule { }