import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerCharterComponent } from './customer-charter.component';

describe('CustomerCharterComponent', () => {
  let component: CustomerCharterComponent;
  let fixture: ComponentFixture<CustomerCharterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerCharterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerCharterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
