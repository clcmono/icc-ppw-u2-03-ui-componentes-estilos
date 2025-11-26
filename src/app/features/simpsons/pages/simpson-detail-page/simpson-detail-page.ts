import { CommonModule } from '@angular/common';
import { toSignal } from '@angular/core/rxjs-interop';
import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { map, switchMap } from 'rxjs';
import { SimpsonsService } from '../../services/SimpsonServices';


@Component({
  selector: 'app-simpson-detail-page',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './simpson-detail-page.html',
  styleUrl: './simpson-detail-page.css',
})
export class SimpsonDetailPage {
  private route = inject(ActivatedRoute);
  private service = inject(SimpsonsService);

  personaje = toSignal(
    this.route.paramMap.pipe(
      map(params => +params.get('id')!),
      switchMap(id => this.service.getCharacterById(id))
    ),
    { initialValue: null }
  );
}


