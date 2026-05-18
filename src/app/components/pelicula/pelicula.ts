import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pelicula',
  imports: [],
  templateUrl: './pelicula.html',
  styleUrl: './pelicula.css',
})
export class Pelicula {
  // ¡@Input por Dayra Mosquera! 
  // @Input permite que este componente reciba datos desde afuera.
  @Input() datosPelicula: any;
}