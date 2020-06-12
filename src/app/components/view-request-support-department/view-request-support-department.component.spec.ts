import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewRequestSupportDepartmentComponent } from './view-request-support-department.component';

describe('ViewRequestSupportDepartmentComponent', () => {
  let component: ViewRequestSupportDepartmentComponent;
  let fixture: ComponentFixture<ViewRequestSupportDepartmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewRequestSupportDepartmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewRequestSupportDepartmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
