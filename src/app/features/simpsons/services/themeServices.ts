import { Injectable, inject } from '@angular/core';
import { PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({ providedIn: 'root' })
export class themeServices {
  private platformId = inject(PLATFORM_ID);
  private readonly THEME_KEY = 'app-theme';

  // Guardar tema
  saveTheme(theme: string): void {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem(this.THEME_KEY, theme);
    }
  }

  // Cargar tema
  loadTheme(): string {
    if (isPlatformBrowser(this.platformId)) {
      return localStorage.getItem(this.THEME_KEY) ?? 'light';
    }
    return 'light'; // Valor por defecto en SSR
  }

  // Aplicar al html
  applyTheme(theme: string): void {
    if (isPlatformBrowser(this.platformId)) {
      document.documentElement.setAttribute('data-theme', theme);
    }
  }
}
