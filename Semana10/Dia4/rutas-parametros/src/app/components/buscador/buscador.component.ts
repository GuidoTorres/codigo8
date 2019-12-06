import { ActivatedRoute, Params } from "@angular/router";
import { Component, OnInit, OnDestroy } from "@angular/core";
import { Subscription } from "rxjs";
@Component({
  selector: "app-buscador",
  templateUrl: "./buscador.component.html",
  styleUrls: ["./buscador.component.css"]
})
export class BuscadorComponent implements OnInit {
  subscriptor: Subscription;
  constructor(public _sActivatedRoute: ActivatedRoute) {}

  ngOnInit() {
    //imprimir el parametro que viene por la ruta
    this.subscriptor = this._sActivatedRoute.params.subscribe(
      (parametros: Params) => {
        console.log("ESta entrando un nueva ruta");
        console.log(parametros.producto_id);
      },
      () => {}
    );
  }

  ngOnDestroy(): void {
    this.subscriptor.unsubscribe();
  }
}
