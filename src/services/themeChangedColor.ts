import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ThemeChangedColorSevice {
  private renderer: Renderer2;

  constructor(rendererFactory: RendererFactory2) {
    this.renderer = rendererFactory.createRenderer(null, null);
  }

  // Инициализация темы при старте приложения
  initTheme() {
    const savedTheme = localStorage.getItem('theme');
    
    if (savedTheme === 'dark') {
      this.applyDarkTheme();
    } else {
      this.applyLightTheme(); // светлая по умолчанию
    }
  }

  applyLightTheme() {
    const body = document.body;
    this.renderer.removeClass(body, 'dark-theme');
    this.renderer.addClass(body, 'light-theme');
    localStorage.setItem('theme', 'light');
  }

  applyDarkTheme() {
    const body = document.body;
    this.renderer.removeClass(body, 'light-theme');
    this.renderer.addClass(body, 'dark-theme');
    localStorage.setItem('theme', 'dark');
  }

  toggleTheme() {
    const isDark = document.body.classList.contains('dark-theme');
    
    if (isDark) {
      this.applyLightTheme();
    } else {
      this.applyDarkTheme();
    }
  }

  getCurrentTheme() {
    return document.body.classList.contains('dark-theme');
  }
}