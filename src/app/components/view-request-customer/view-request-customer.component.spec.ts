import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewRequestCustomerComponent } from './view-request-customer.component';

describe('ViewRequestCustomerComponent', () => {
  let component: ViewRequestCustomerComponent;
  let fixture: ComponentFixture<ViewRequestCustomerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewRequestCustomerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewRequestCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
