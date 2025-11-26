import { Routes } from '@angular/router';
import { EstilosPage } from './features/estilos-page/estilos-page';
import { SignalBoxComponent } from './features/SignalBoxComponent/SignalBoxComponent';
import { DaisyuiPage } from './features/daisyui-page/daisyui-page';
import { SimpsonsPageComponent } from './features/simpsons/pages/simpsons-page/simpsons-page';
import { SimpsonDetailPage } from './features/simpsons/pages/simpson-detail-page/simpson-detail-page';

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
    component:DaisyuiPage,
  },
  {
  path: 'simpsons',
  component: SimpsonsPageComponent,
},
{
  path: 'simpsons/:id',
  component: SimpsonDetailPage,
}
];
