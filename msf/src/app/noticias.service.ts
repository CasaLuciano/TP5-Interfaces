// noticia.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Noticia } from './noticias/Noticia';

@Injectable({
  providedIn: 'root'
})
export class NoticiaService {

  private apiUrl = 'https://673e230f0118dbfe860a3f42.mockapi.io/api/v1/noticia';  // URL de tu MockAPI

  constructor(private http: HttpClient) { }

  getNoticias(): Observable<Noticia[]> {
    return this.http.get<Noticia[]>(this.apiUrl);
  }
}