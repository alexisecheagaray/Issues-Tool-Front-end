import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigurationCustomerComponent } from './configuration-customer.component';

describe('ConfigurationCustomerComponent', () => {
  let component: ConfigurationCustomerComponent;
  let fixture: ComponentFixture<ConfigurationCustomerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfigurationCustomerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigurationCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
