import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private darkThemeSource = new Subject<boolean>();

  darkTheme$ = this.darkThemeSource.asObservable();

  constructor() {
    // Charger le thème depuis le sessionStorage au chargement du service
    const storedTheme = sessionStorage.getItem('theme');
    if (storedTheme) {
      this.setDarkTheme(storedTheme === 'dark');
    }
  }

  setDarkTheme(dark: boolean) {
    this.darkThemeSource.next(dark);
    sessionStorage.setItem('theme', dark ? 'dark' : 'light');  // Sauvegarder le thème dans le sessionStorage
    document.body.classList.toggle('dark-theme', dark);  // Mettre à jour le body class en fonction du thème
  }

  toggleDarkTheme(): void {
    const currentTheme = sessionStorage.getItem('theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    this.setDarkTheme(newTheme === 'dark');
  }
}
