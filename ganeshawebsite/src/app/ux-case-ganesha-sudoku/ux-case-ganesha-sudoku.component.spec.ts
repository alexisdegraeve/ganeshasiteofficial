import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UxCaseGaneshaSudokuComponent } from './ux-case-ganesha-sudoku.component';

describe('UxCaseGaneshaSudokuComponent', () => {
  let component: UxCaseGaneshaSudokuComponent;
  let fixture: ComponentFixture<UxCaseGaneshaSudokuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UxCaseGaneshaSudokuComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UxCaseGaneshaSudokuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
