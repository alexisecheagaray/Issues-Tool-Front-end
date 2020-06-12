import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateRequestCustomerComponent } from './create-request-customer.component';

describe('CreateRequestCustomerComponent', () => {
  let component: CreateRequestCustomerComponent;
  let fixture: ComponentFixture<CreateRequestCustomerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateRequestCustomerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateRequestCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
