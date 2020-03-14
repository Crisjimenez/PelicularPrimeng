import { Component, OnInit } from '@angular/core';
import { PeliculaModel } from '../models/peliculas';
import { PeliculasService } from './peliculas.service';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.scss']
})
export class PeliculasComponent implements OnInit {

  peliculas: PeliculaModel[];
  cols: any[];

  constructor(private peliculasService: PeliculasService) { }
  
  ngOnInit() {
    this.peliculasService.consultarEnCartelera().subscribe( datos => {
      this.peliculas = datos.results;
    });
    this.cols= [
      { field: 'title', header: 'Titulo'},
      { field: 'genre_ids', header: 'Género'},
      { field: 'release_date', header: 'Fecha'},
      { field: 'vote_average', header: 'Puntaje'},
      { field: 'poster_path', header: 'Imagen'},
    ]

  }

}
