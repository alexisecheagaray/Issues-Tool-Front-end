import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewProblemTypeComponent } from './view-problem-type.component';

describe('ViewProblemTypeComponent', () => {
  let component: ViewProblemTypeComponent;
  let fixture: ComponentFixture<ViewProblemTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewProblemTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewProblemTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
