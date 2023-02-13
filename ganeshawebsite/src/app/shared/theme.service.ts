import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private darkThemeSource = new Subject<boolean>();

  darkTheme$ = this.darkThemeSource.asObservable();

  setDarkTheme(dark: boolean) {
    this.darkThemeSource.next(dark);
  }

  constructor() { }

  toggleDarkTheme(): void {
    document.body.classList.toggle('dark-theme');
 }

}
