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
}
