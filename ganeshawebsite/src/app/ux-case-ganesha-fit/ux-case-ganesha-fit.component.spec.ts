import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UxCaseGaneshaFitComponent } from './ux-case-ganesha-fit.component';

describe('UxCaseGaneshaFitComponent', () => {
  let component: UxCaseGaneshaFitComponent;
  let fixture: ComponentFixture<UxCaseGaneshaFitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UxCaseGaneshaFitComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UxCaseGaneshaFitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
