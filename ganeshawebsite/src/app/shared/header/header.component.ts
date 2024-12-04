import { Component } from '@angular/core';
import { ThemeService } from '../theme.service';


@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  protected darkTheme: boolean = false;

  constructor(private themeService: ThemeService) {
    this.themeService.darkTheme$.subscribe( dark =>
      this.darkTheme = dark
    );
  }

  switchTheme() {
    this.themeService.setDarkTheme(!this.darkTheme) ;
    this.themeService.toggleDarkTheme();
  }

}
