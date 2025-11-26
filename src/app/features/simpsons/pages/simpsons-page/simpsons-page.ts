import { Component, inject, signal, effect } from '@angular/core';
import { RouterModule, RouterLink } from '@angular/router';
import { map } from 'rxjs';
import { rxResource } from '@angular/core/rxjs-interop';

import { PaginationService } from '../../services/PaginationService';
import { SimpsonsService } from '../../services/SimpsonServices';
import { PaginationComponent } from '../../../shared/components/PaginationComponent/PaginationComponent';
import { HeroSimpsons } from "../../components/hero-simpsons/hero-simpsons";
import { Breadcrumbs } from "../../../shared/components/breadcrumbs/breadcrumbs";
import { BackToTop } from "../../../shared/components/back-to-top/back-to-top";

@Component({
  selector: 'app-simpsons-page',
  standalone: true,
  imports: [RouterModule, RouterLink, PaginationComponent, HeroSimpsons, Breadcrumbs, BackToTop],
  templateUrl: './simpsons-page.html',
  styleUrl: './simpsons-page.css',
})
export class SimpsonsPageComponent {

  private simpsonsService = inject(SimpsonsService);
  paginationService = inject(PaginationService);

  charactersPerPage=signal (10);
  totalPages = signal(0);

simpsonsResource = rxResource({
  params: () => ({
    page: this.paginationService.currentPage() - 1,
    limit: this.charactersPerPage(),
  }),
  stream: ({ params }) => {
    return this.simpsonsService.getCharactersOptions({
      offset: params.page,
      limit: params.limit,
    });
  },
});
}
