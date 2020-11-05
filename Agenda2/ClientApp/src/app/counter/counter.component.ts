import { Component } from '@angular/core';
import { getRegistro } from '../models/registro.model';
import { HttpClient } from '@angular/common/http'
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-counter-component',
  templateUrl: './counter.component.html'
})
export class CounterComponent {
  public getRegistros: Array<getRegistro> = []

  constructor(private http: HttpClient, private router: RouterModule) {
    this.getRegistros = [{ "nombre": "victor", "telefono": "2345", "direccion": "Denarios", "ciudad": "mexico", "estado": "mexico" }]
    this.http.get<Array<getRegistro>>("").subscribe(res => {
      this.getRegistros = res;
      this.getRegistros = [{"nombre":"victor","telefono":"2345","direccion":"Denarios","ciudad":"mexico","estado":"mexico"}]
    }, err => { })
  }


  onTapEliminar(dato) {
    console.log(dato)
    this.http.delete(dato).subscribe(res => { /*this.router.parent.navigate([`${home}`]);*/ }, err => { })
  }

  onTapRegistros(datos) {
    this.http.put('',datos).subscribe(res => { }, err => {})
  }
  /*public currentCount = 0;

  public incrementCounter() {
    this.currentCount++;
  }*/
}
