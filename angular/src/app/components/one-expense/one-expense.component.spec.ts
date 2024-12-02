import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OneExpenseComponent } from './one-expense.component';

describe('OneExpenseComponent', () => {
  let component: OneExpenseComponent;
  let fixture: ComponentFixture<OneExpenseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OneExpenseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OneExpenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
