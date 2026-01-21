import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UxCaseGaneshaBattlefieldComponent } from './ux-case-ganesha-battlefield.component';

describe('UxCaseGaneshaBattlefieldComponent', () => {
  let component: UxCaseGaneshaBattlefieldComponent;
  let fixture: ComponentFixture<UxCaseGaneshaBattlefieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UxCaseGaneshaBattlefieldComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UxCaseGaneshaBattlefieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
