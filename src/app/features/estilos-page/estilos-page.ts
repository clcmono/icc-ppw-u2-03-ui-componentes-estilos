import { Component } from '@angular/core';
import { SignalBoxComponent } from '../SignalBoxComponent/SignalBoxComponent';

@Component({
  selector: 'app-estilos-page',
  standalone: true,  
  imports: [SignalBoxComponent],       
  templateUrl: './estilos-page.html',
  styleUrl: './estilos-page.css',
})
export class EstilosPage {}
