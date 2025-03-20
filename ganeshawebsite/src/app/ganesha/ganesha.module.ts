import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArtistComponent } from './artist/artist.component';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../shared/shared.module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    ArtistComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    TranslateModule,
    HttpClientModule
  ],
  exports: [
    ArtistComponent
  ]
})
export class GaneshaModule { }
