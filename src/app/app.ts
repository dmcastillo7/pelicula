import { Component, signal } from '@angular/core';
import { Pelicula } from './components/pelicula/pelicula';

@Component({
  selector: 'app-root',
  imports: [Pelicula],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('pelicula');

  // Agregamos la lista de películas al componente Padre
  peliculas = [
    {
      nombre: 'Interstellar',
      genero: 'Ciencia Ficción/Aventura',
      anio: '2014',
      imagen: 'https://m.media-amazon.com/images/I/91kFYg4fX3L.jpg'
    },
    {
      nombre: 'Avengers Endgame',
      genero: 'Acción/Ciencia Ficción',
      anio: '2019',
      imagen: 'https://m.media-amazon.com/images/I/81ExhpBEbHL.jpg'
    },
    {
      nombre: 'Joker',
      genero: 'Crimen/Suspenso',
      anio: '2024',
      imagen: 'https://preview.redd.it/new-poster-for-joker-folie-%C3%A0-deux-v0-7hn9ng3lammd1.jpeg?width=640&crop=smart&auto=webp&s=6e3df0224b8a74a953674ef94c948ad942675018'
    },
    {
      nombre: 'Project Hail Mary',
      genero: 'Ciencia Ficción/Aventura',
      anio: '2026',
      imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2RjKXB8Y71bO52umxhR3gKTbVw0Y2HvJfEg&s'
    }
  ];
}
