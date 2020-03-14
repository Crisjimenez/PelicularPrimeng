import { Injectable } from '@angular/core';
import { PeliculaModel } from '../models/peliculas';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  private url = 'https://api.themoviedb.org/3/movie/now_playing?api_key=1405bd325e4c6661e865053effe1c12a&language=es-ES';

  constructor(private _httpClient: HttpClient) { }

  consultarEnCartelera(): Observable<any> {
    return this._httpClient.get<any>(this.url);
  }



}
