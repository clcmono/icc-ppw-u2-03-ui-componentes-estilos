import { Component } from '@angular/core';
import { SignalBoxComponent } from '../SignalBoxComponent/SignalBoxComponent';
import { BarraComponente } from '../barraComponente/barraComponente';

@Component({
  selector: 'app-estilos-page',
  standalone: true,  
  imports: [SignalBoxComponent, BarraComponente],       
  templateUrl: './estilos-page.html',
  styleUrl: './estilos-page.css',
})
export class EstilosPage {}
