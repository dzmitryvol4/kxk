import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ThemeChangedColorSevice } from '../services/themeChangedColor';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('agency');
  constructor(private themeChangedColorSevice: ThemeChangedColorSevice) {}

  ngOnInit() {
    // ВАЖНО: вызываем инициализацию темы при старте приложения
    this.themeChangedColorSevice.initTheme();
  }
}
