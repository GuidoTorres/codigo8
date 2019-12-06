import { TemplateFormsComponent } from './components/template-forms/template-forms.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { ProductosComponent } from './components/productos/productos.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'productos', component: ProductosComponent},
    {path: 'templateforms', component: TemplateFormsComponent},
    {path: '**', component: NotfoundComponent}
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    declarations: [],
})
export class RoutingModule { }