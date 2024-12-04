import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ThemeService } from './theme.service';



@NgModule({
  imports: [
    CommonModule,
    HeaderComponent,
    FooterComponent
  ],
  exports : [
    HeaderComponent,
    FooterComponent,
    CommonModule
  ],
  providers: [
    ThemeService
  ]
})
export class SharedModule { }
