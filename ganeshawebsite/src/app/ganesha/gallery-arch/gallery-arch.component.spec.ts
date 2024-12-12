import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryArchComponent } from './gallery-arch.component';

describe('GalleryArchComponent', () => {
  let component: GalleryArchComponent;
  let fixture: ComponentFixture<GalleryArchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GalleryArchComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GalleryArchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
