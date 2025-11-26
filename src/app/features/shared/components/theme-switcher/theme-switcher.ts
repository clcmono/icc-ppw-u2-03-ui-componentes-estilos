import { Component, signal, inject } from '@angular/core';
import { TitleCasePipe } from '@angular/common';
import { themeServices } from '../../../simpsons/services/themeServices';

@Component({
  selector: 'app-theme-switcher',
  standalone: true,
  imports: [TitleCasePipe],
  templateUrl: './theme-switcher.html',
  styleUrl: './theme-switcher.css',
})
export class ThemeSwitcher {
  themes = ['valentine', 'dark'];

  private themeService = inject(themeServices);

  currentTheme = signal<string>(this.themeService.loadTheme());

  constructor() {
    this.themeService.applyTheme(this.currentTheme());
  }

  setTheme(theme: string): void {
    this.currentTheme.set(theme);
    this.themeService.applyTheme(theme);
    this.themeService.saveTheme(theme);
  }
}
