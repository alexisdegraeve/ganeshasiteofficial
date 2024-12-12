import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryLogoComponent } from './gallery-logo.component';

describe('GalleryLogoComponent', () => {
  let component: GalleryLogoComponent;
  let fixture: ComponentFixture<GalleryLogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GalleryLogoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GalleryLogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
