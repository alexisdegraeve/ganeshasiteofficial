import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private darkThemeSource = new BehaviorSubject<boolean>(true);

  get darkThemeSource$() {
    return this.darkThemeSource.asObservable();
  }

  constructor() {
    // Charger le thème depuis sessionStorage au démarrage du service
    const storedTheme = sessionStorage.getItem('theme');
    if (storedTheme) {
      this.setDarkTheme(storedTheme === 'dark');
    } else {
      this.setDarkTheme(true);  // Par défaut on applique le mode sombre
    }
  }

  // Fonction pour appliquer le thème
  setDarkTheme(dark: boolean) {
    this.darkThemeSource.next(dark);
    sessionStorage.setItem('theme', dark ? 'dark' : 'light');

    // Mise à jour de la classe du body en fonction du thème
    if (dark) {
      document.body.classList.add('dark-theme');
      document.body.classList.remove('light-theme');  // Retirer la classe 'light-theme' si elle existe
    } else {
      document.body.classList.add('light-theme');
      document.body.classList.remove('dark-theme');  // Retirer la classe 'dark-theme' si elle existe
    }
  }

  // Basculer entre les modes sombre et clair
  toggleDarkTheme(): void {
    const currentTheme = sessionStorage.getItem('theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    this.setDarkTheme(newTheme === 'dark');
  }
}
