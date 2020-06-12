import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigurationSupportDepartmentComponent } from './configuration-support-department.component';

describe('ConfigurationSupportDepartmentComponent', () => {
  let component: ConfigurationSupportDepartmentComponent;
  let fixture: ComponentFixture<ConfigurationSupportDepartmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfigurationSupportDepartmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigurationSupportDepartmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
