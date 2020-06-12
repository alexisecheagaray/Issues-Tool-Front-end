import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeSupportDepartmentComponent } from './home-support-department.component';

describe('HomeSupportDepartmentComponent', () => {
  let component: HomeSupportDepartmentComponent;
  let fixture: ComponentFixture<HomeSupportDepartmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeSupportDepartmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeSupportDepartmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
