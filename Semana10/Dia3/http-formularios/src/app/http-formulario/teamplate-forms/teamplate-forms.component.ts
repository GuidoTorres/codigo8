import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teamplate-forms',
  templateUrl: './teamplate-forms.component.html',
  styleUrls: ['./teamplate-forms.component.css']
})
export class TeamplateFormsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  formulario1(pais, edad, nombre, email) {
    console.log(pais);
    console.log(edad);
    console.log(nombre);
    console.log(email);
  }

}
