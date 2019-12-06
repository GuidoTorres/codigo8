import { RoutingModule } from './app.routing';
import { BrowserModule} from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProductosComponent } from './components/productos/productos.component';

import {FormsModule} from '@angular/forms';

//Modulo para consumir datos externos (AJAX)
import {HttpClientModule} from '@angular/common/http';
import { TemplateFormsComponent } from './components/template-forms/template-forms.component'
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotfoundComponent,
    NavbarComponent,
    ProductosComponent,
    TemplateFormsComponent,
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
