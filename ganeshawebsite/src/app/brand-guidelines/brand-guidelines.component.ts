import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { PageHeaderComponent } from '../shared/page-header/page-header.component';

@Component({
  selector: 'app-brand-guidelines',
  imports: [TranslateModule, PageHeaderComponent],
  templateUrl: './brand-guidelines.component.html',
  styleUrl: './brand-guidelines.component.scss'
})
export class BrandGuidelinesComponent {

}
