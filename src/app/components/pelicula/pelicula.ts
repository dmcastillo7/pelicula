import { Component, Input, Output, EventEmitter } from '@angular/core';

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

   // ===============================
  // @Output realizado por Sebastián
  // ===============================

  // Creamos un evento llamado peliculaSeleccionada
  @Output() peliculaSeleccionada = new EventEmitter<any>();

  // Método que se ejecuta al hacer click
  seleccionarPelicula() {

    // Enviamos el nombre de la película al componente padre
    this.peliculaSeleccionada.emit(this.datosPelicula);
}
}