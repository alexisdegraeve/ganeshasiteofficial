import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UxCaseGaneshaMusicComponent } from './ux-case-ganesha-music.component';

describe('UxCaseGaneshaMusicComponent', () => {
  let component: UxCaseGaneshaMusicComponent;
  let fixture: ComponentFixture<UxCaseGaneshaMusicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UxCaseGaneshaMusicComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UxCaseGaneshaMusicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
