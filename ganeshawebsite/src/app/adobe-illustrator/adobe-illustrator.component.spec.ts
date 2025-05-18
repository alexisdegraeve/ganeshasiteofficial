import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdobeIllustratorComponent } from './adobe-illustrator.component';

describe('AdobeIllustratorComponent', () => {
  let component: AdobeIllustratorComponent;
  let fixture: ComponentFixture<AdobeIllustratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdobeIllustratorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdobeIllustratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
