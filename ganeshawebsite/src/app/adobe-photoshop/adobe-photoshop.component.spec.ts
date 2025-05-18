import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdobePhotoshopComponent } from './adobe-photoshop.component';

describe('AdobePhotoshopComponent', () => {
  let component: AdobePhotoshopComponent;
  let fixture: ComponentFixture<AdobePhotoshopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdobePhotoshopComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdobePhotoshopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
