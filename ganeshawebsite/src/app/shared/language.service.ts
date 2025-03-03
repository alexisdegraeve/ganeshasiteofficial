import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  private currentLangSubject = new BehaviorSubject<string>('en');  // Langue par défaut
  public currentLang$: Observable<string> = this.currentLangSubject.asObservable();

  constructor(private translate: TranslateService) {
    const savedLang = localStorage.getItem('lang') || 'en';
    this.setLanguage(savedLang); // Charger la langue sauvegardée
  }

  setLanguage(lang: string) {
    this.translate.use(lang);
    this.currentLangSubject.next(lang);  // Notifie les abonnés
    localStorage.setItem('lang', lang);  // Sauvegarde la langue
  }

  getCurrentLanguage(): string {
    return this.currentLangSubject.getValue();
  }
}
