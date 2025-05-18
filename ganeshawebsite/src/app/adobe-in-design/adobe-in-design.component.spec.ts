import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdobeInDesignComponent } from './adobe-in-design.component';

describe('AdobeInDesignComponent', () => {
  let component: AdobeInDesignComponent;
  let fixture: ComponentFixture<AdobeInDesignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdobeInDesignComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdobeInDesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
