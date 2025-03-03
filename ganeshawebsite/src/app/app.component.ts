import { Component } from '@angular/core';
import { ThemeService } from './shared/theme.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  standalone: false,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ganeshawebsite';
  darkTheme$ = this.themeService.darkThemeSource$;
  isWinterSeason = false;

  constructor(private themeService: ThemeService, translate: TranslateService) {
    // Vérifiez si la date actuelle est entre le 1er décembre et le 10 janvier
    const currentDate = new Date();
    const startDate = new Date(currentDate.getFullYear(), 11, 1); // 1er décembre
    const endDate = new Date(currentDate.getFullYear() + 1, 0, 10); // 10 janvier
    this.isWinterSeason = (currentDate >= startDate && currentDate <= endDate);
    // this language will be used as a fallback when a translation isn't found in the current language
    translate.setDefaultLang('en');
    // the lang to use, if the lang isn't available, it will use the current loader to get them
    translate.use('en');
  }
}
