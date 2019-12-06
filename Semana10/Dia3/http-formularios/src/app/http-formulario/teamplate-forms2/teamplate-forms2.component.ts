import { Component, OnInit } from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';

@Component({
  selector: 'app-teamplate-forms2',
  templateUrl: './teamplate-forms2.component.html',
  styleUrls: ['./teamplate-forms2.component.css']
})
export class TeamplateForms2Component implements OnInit {

  constructor() { }

  ngOnInit() {
    
  }

  formulario2(nombre: FormControl, edad: FormControl, email: FormControl, pais: FormControl) {
    console.log(nombre);
    console.log(edad);
    console.log(email);
    console.log(pais);
  }

  registrar(formulario: NgForm) {
    if (formulario.valid) {
      console.log(formulario);
    }

  }
}
