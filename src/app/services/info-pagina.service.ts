import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  constructor() {
    console.log("Servicio de página cargada");
  }
}
