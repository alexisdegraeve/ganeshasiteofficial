import { Component } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { LanguageService } from '../language.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  imports: [TranslateModule],
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  constructor(private translate: TranslateService, private languageService: LanguageService ) {
    this.languageService.currentLang$.subscribe((lang) => {
      this.translate.use(lang); // Mettre à jour la langue dans ngx-translate
    });
  }
}
