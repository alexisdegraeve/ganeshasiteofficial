import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UxCasesComponent } from './ux-cases.component';

describe('UxCasesComponent', () => {
  let component: UxCasesComponent;
  let fixture: ComponentFixture<UxCasesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UxCasesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UxCasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
