import { ChangeDetectionStrategy, Component , signal} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'barra-componente',
  imports: [CommonModule],
  templateUrl: './barraComponente.html',
  styleUrl: './barraComponente.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BarraComponente {

  progreso = signal(0);

 
  actualizarProgreso(event: Event) {
    const valor = Number((event.target as HTMLInputElement).value);
    this.progreso.set(valor);
  }
   obtenerClases() {
    const p = this.progreso();

    if (p <= 40) return ['bg-pink-500'];
    if (p <= 70) return ['bg-amber-800'];
    return ['bg-black'];
  }



 }
