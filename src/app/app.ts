import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DrawerNavbar } from "./features/daisyui-page/components/drawer-navbar/drawer-navbar";
import { Footer } from "./features/daisyui-page/components/footer/footer";
import { BackToTop } from "./features/shared/components/back-to-top/back-to-top";
import { ThemeSwitcher } from "./features/shared/components/theme-switcher/theme-switcher";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, DrawerNavbar, Footer, BackToTop, ThemeSwitcher],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('03-ui-componentes-estilos');
}
