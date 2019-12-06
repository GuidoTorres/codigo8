import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-teamplate-forms3',
  templateUrl: './teamplate-forms3.component.html',
  styleUrls: ['./teamplate-forms3.component.css']
})
export class TeamplateForms3Component implements OnInit {
  objpersona={
    nombre:"Codigo 8",
    edad:0,
    email:'codigo@gmi',
    pais:2
  };
  // nombreinicial: string = "codigo";

  constructor() { }

  ngOnInit() {
  }
  registrar(formulario: NgForm) {
    if (formulario.valid) {
      console.log("Valor formulario");
      console.log(formulario.value);
      console.log("Objeto");
      console.log(this.objpersona);

    }

  }
}
