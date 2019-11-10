import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  constructor(private http: HttpClient) {

    // console.log("Servicio de página cargada");

    //Leer el archivo JSON
    this.http.get('assets/data/data-pagina.json')
      .subscribe(response => {
        console.log(response['twitter']);
      });

  }
}
