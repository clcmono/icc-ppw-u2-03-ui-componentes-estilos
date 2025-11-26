import { SimpsonDetailPage } from './features/simpsons/pages/simpson-detail-page/simpson-detail-page';
import { Routes } from '@angular/router';
import { EstilosPage } from './features/estilos-page/estilos-page';
import { SignalBoxComponent } from './features/SignalBoxComponent/SignalBoxComponent';
import { DaisyuiPage } from './features/daisyui-page/daisyui-page';
import { SimpsonsPageComponent } from './features/simpsons/pages/simpsons-page/simpsons-page';


export const routes: Routes = [
  {
    path: 'pages',
    component: EstilosPage,
  },
  // {
  //   path: '',
  //   component: SignalBoxComponent,
  // }

  {
  path: '',
  redirectTo: 'inicio',
  pathMatch: 'full'
  },
  {
    path: 'inicio',
    component:DaisyuiPage,
  },
  {
  path: 'simpsons',
  component: SimpsonsPageComponent,
},
{
  path: 'simpsons/:id',
  loadComponent: () =>
    import('./features/simpsons/pages/simpson-detail-page/simpson-detail-page')
      .then(m => m.SimpsonDetailPage),
  data: { renderMode: 'client' } // 👈 evita el error de prerender
}
];
