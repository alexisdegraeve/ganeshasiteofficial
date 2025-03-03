import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ThemeService } from './theme.service';
import { TranslateModule } from '@ngx-translate/core';



@NgModule({
  imports: [
    CommonModule,
    HeaderComponent,
    FooterComponent
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
