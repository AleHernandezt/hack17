import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Comunidad } from '../Interfaces/comunidad.interface';

@Injectable({
  providedIn: 'root'
})
export class ComunidadService {

  private apiUrl = 'localhost:3000/api/community/';

  constructor(private http: HttpClient) { }

  getComunidadId(id: number) {
    return this.http.get<Comunidad>(`${this.apiUrl}/${id}`);
  }

  createComunidad(comunidad: Comunidad) {
    return this.http.post<Comunidad>(this.apiUrl, comunidad);
  }

  updateComunidad(id: number, comunidad: Comunidad) {
    return this.http.put<Comunidad>(`${this.apiUrl}/${id}`, comunidad);
  }

}