import { ProEditComponent } from './http-formulario/productos/pro-edit.component';
import { RoutingModule } from './app.routing';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './http-formulario/home/home.component';
import { NotfoundComponent } from './http-formulario/notfound/notfound.component';
import { NavbarComponent } from './http-formulario/navbar/navbar.component';
import { ProductosComponent } from './http-formulario/productos/productos.component';
import { ProductoComponent } from './http-formulario/productos/producto.component';
import {HttpClientModule} from '@angular/common/http';
import { TeamplateFormsComponent } from './http-formulario/teamplate-forms/teamplate-forms.component'
import {FormsModule} from '@angular/forms';
import { TeamplateForms2Component } from './http-formulario/teamplate-forms2/teamplate-forms2.component';
import { TeamplateForms3Component } from './http-formulario/teamplate-forms3/teamplate-forms3.component';
import { TeamplateForms4Component } from './http-formulario/teamplate-forms4/teamplate-forms4.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotfoundComponent,
    NavbarComponent,
    ProductosComponent,
    ProductoComponent,
    TeamplateFormsComponent,
    TeamplateForms2Component,
    TeamplateForms3Component,
    TeamplateForms4Component,
    ProEditComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
