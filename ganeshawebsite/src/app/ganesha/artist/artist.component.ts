import { Component, ElementRef } from '@angular/core';
import Rellax from 'rellax';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrl: './artist.component.scss'
})
export class ArtistComponent {
  private rellax!: any;

  constructor(private el: ElementRef) {}

  ngAfterViewInit() {
    this.rellax = new Rellax('.cloud', { speed: -3 });
  }

}
