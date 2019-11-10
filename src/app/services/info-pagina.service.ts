import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Infopagina } from '../interfaces/info-pagina.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: Infopagina = {};
  cargada = false;
  equipo: any[] = [];

  constructor(private http: HttpClient) {
    this.cargarInfo();
    this.cargarEquipo();
  }

  private cargarInfo() {
    //Leer el archivo JSON
    this.http.get('assets/data/data-pagina.json')
      .subscribe((response: Infopagina) => {
        this.cargada = true;
        this.info = response;

        console.log(response);
      });
  }

  private cargarEquipo() {
    //Leer el servicio de firebase
    this.http.get('https://portafolio-angularjs.firebaseio.com/equipo.json')
    .subscribe((response: any[]) => {
      this.cargada = true;
      this.equipo = response;

      console.log(response);
    })
  }
}
