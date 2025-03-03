import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ThemeService } from './theme.service';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    HeaderComponent,
    FooterComponent,
    TranslateModule.forChild({
      defaultLanguage: 'en'
    })
  ],
  exports : [
    HeaderComponent,
    FooterComponent,
    CommonModule,
    TranslateModule
  ],
  providers: [
    ThemeService
  ]
})
export class SharedModule { }
