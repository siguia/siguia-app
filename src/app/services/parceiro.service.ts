import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { appConfig } from '../app.config'

@Injectable({
  providedIn: 'root'
})
export class ParceiroService {

  constructor(
    private http: HttpClient,
  ) { }

  buscar(origem: string, destino: string, lat_long: string = '') {
    const params = {
      lat_long,
      origem,
      destino,
    }
    return this.http.get(`${appConfig.apiUrl}/parceiros`, {params});
  }

  get(id: number) {
    return this.http.get(`${appConfig.apiUrl}/parceiros/${id}`);
  }
}
