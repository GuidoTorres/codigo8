import { TeamplateForms4Component } from './http-formulario/teamplate-forms4/teamplate-forms4.component';
import { TeamplateForms3Component } from './http-formulario/teamplate-forms3/teamplate-forms3.component';
import { NotfoundComponent } from './http-formulario/notfound/notfound.component';
import { ProductosComponent } from './http-formulario/productos/productos.component';
import { HomeComponent } from './http-formulario/home/home.component';
import { TeamplateFormsComponent } from './http-formulario/teamplate-forms/teamplate-forms.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TeamplateForms2Component } from './http-formulario/teamplate-forms2/teamplate-forms2.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'productos', component: ProductosComponent },
    { path: 'templateforms', component: TeamplateFormsComponent },
    { path: 'templateform2', component: TeamplateForms2Component },
    { path: 'templateform3', component: TeamplateForms3Component },
    { path: 'templateform4', component: TeamplateForms4Component },
    { path: '**', component: NotfoundComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    declarations: [],
})
export class RoutingModule { }