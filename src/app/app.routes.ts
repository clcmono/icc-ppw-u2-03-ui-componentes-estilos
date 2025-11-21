import { Routes } from '@angular/router';
import { EstilosPage } from './features/estilos-page/estilos-page';
import { SignalBoxComponent } from './features/SignalBoxComponent/SignalBoxComponent';

export const routes: Routes = [
  {
    path: '',
    component: EstilosPage,
  },
  {
    path: '',
    component: SignalBoxComponent,
  }
];
