import { ClickComponent } from './components/click/click.component';
import { NgstyleComponent } from './components/ngstyle/ngstyle.component';
import { NgclassComponent } from './components/ngclass/ngclass.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainComponent } from './components/main/main.component';
import { HeaderComponent } from './components/header/header.component';
// import { NotFoundComponent } from './components/not-found/not-found.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {path: 'header', component: HeaderComponent},
    {path: 'main', component: MainComponent },
    {path: 'footer', component: FooterComponent},
    {path: 'ngclass', component: NgclassComponent},
    {path: 'ngstyle', component: NgstyleComponent},
    {path: 'click', component: ClickComponent}



    // {path: '**', component: NotFoundComponent}
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    declarations: [],
})
export class RoutingModule { }