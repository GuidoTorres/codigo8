import { Component, OnInit, ViewChild } from '@angular/core';
import { DayService, WeekService, WorkWeekService, MonthService, AgendaService, EventSettingsModel, ScheduleComponent } from '@syncfusion/ej2-angular-schedule';


@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.component.html',
  styleUrls: ['./calendario.component.css'],
  providers: [DayService, WeekService, WorkWeekService, MonthService, AgendaService],
  // specifies the template string for the Schedule component 
})
export class CalendarioComponent implements OnInit {

  //VIEWCHILD captura a un elemento de la vista cuyo nombre esta marcado con el operador # ejem: #fila2
  @ViewChild("fila2", {static: true}) fila2;
  @ViewChild("miCalendario", {static: true}) miCalendario: ScheduleComponent;




  data: object[] = [{
    Id: 1,
    Subject: 'Meeting',
    StartTime: new Date(2019, 11, 6, 11, 0),
    EndTime: new Date(2019, 11, 6, 13, 0)
  }];
  eventSettings: EventSettingsModel = {
    dataSource: this.data
  }
  constructor() { }

  ngOnInit() {
    console.log(this.fila2);

  }

  agregarEvento(){

    let data: object[] = [{
      Id: 1,
      Subject: 'Reserva Guido Torres',
      StartTime: new Date(2019, 11, 6, 11, 0),
      EndTime: new Date(2019, 11, 6, 13, 0)
    }];
  
this.miCalendario.addEvent(data)
}
agregarEventoHtml(objEvento){

  console.log(objEvento);
  
}
}




