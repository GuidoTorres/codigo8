import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngstyle',
  templateUrl: './ngstyle.component.html',
  styleUrls: ['./ngstyle.component.css']
})
export class NgstyleComponent implements OnInit {

  miCard = {
    boxShadow: '2px 2px 10px blue',
    borderRadius: '20px',
  }
  rojo: String = "#ff0000";
  constructor() { }

  ngOnInit() {
  }

}
