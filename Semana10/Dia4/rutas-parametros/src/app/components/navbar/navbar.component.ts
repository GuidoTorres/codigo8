import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public _sRouter: Router) { }

  ngOnInit() {
  }

  buscar(idbuscado: FormControl) {

    this._sRouter.navigate(['/buscador', idbuscado.value])
  }

}
