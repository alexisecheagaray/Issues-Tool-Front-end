import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateRequestSupportDepartmentComponent } from './create-request-support-department.component';

describe('CreateRequestSupportDepartmentComponent', () => {
  let component: CreateRequestSupportDepartmentComponent;
  let fixture: ComponentFixture<CreateRequestSupportDepartmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateRequestSupportDepartmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateRequestSupportDepartmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
