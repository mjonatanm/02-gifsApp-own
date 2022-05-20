import { Injectable } from '@angular/core';
import { Gif, SearchGifsResponse } from '../interface/gifs.interface';
import { HttpClient, HttpParams } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})

export class GifsService {
  private servicioUrl : string    = 'https://api.giphy.com/v1/gifs'; 
  private apiKey      : string    = 'MR4XePujsqUiXmXtYOvO04v009SwvDS2';
  public resultado    : Gif[]     = [];
  public _historial   : string[]  = [];

  constructor( private http: HttpClient ) { 
    this._historial = JSON.parse( localStorage.getItem('historial') !) || [];
    this.resultado  = JSON.parse( localStorage.getItem('resultado') !) || [];
  }

  buscarGifs( query:string ){

    query = query.trim().toLocaleLowerCase();

    if (!this._historial.includes(query)) {
      this._historial.unshift( query );
      this._historial = this._historial.splice(0,10);
      localStorage.setItem('historial',JSON.stringify(this._historial))
    }

    const params = new HttpParams()
      .set('api_key', this.apiKey)
      .set('limit','10')
      .set('q',query);

    this.http.get<SearchGifsResponse>(`${this.servicioUrl}/search`,{ params }).subscribe (
      ( response ) => {
        this.resultado = response.data;

        localStorage.setItem('resultado',JSON.stringify(this.resultado))
      })
  }
}