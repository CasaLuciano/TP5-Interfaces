import { Component, OnInit } from '@angular/core';
import { NoticiaService } from '../noticias.service';
import { Noticia } from './Noticia';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.scss']
})
export class NoticiasComponent implements OnInit {
  noticias: Noticia[] = [];

  constructor(private noticiaService: NoticiaService) {}

  ngOnInit(): void {
    this.noticiaService.getNoticias().subscribe(
      (data) => {
        this.noticias = data;
      },
      (error) => {
        console.error('Error al obtener noticias:', error);
      }
    );
  }
}
