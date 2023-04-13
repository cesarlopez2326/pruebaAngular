import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
@Injectable({
  providedIn: 'root'
})
export class ApiPeliculaService {
public ruta: String;
public headersVariable = new HttpHeaders().set('Content-Type', 'application/json');
public url = `https://www.omdbapi.com/?apikey=8e8d202&t=batman&y=2022`


  constructor(public _http: HttpClient) {
    this.ruta = this.url;
   }

  obtenerPeliculas(pelicula: String, year: String): Observable <any>{
    return this._http.get(`https://www.omdbapi.com/?apikey=8e8d202&t=${pelicula}&y=${year}` )
  }
}

