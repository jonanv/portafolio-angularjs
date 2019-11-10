import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Infopagina } from '../interfaces/info-pagina.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: Infopagina = {};
  cargada = false;

  constructor(private http: HttpClient) {

    //Leer el archivo JSON
    this.http.get('assets/data/data-pagina.json')
      .subscribe((response: Infopagina) => {
        this.cargada = true;
        this.info = response;

        console.log(response);
      });

  }
}
