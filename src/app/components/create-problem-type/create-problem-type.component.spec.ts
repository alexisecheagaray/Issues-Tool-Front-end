import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateProblemTypeComponent } from './create-problem-type.component';

describe('CreateProblemTypeComponent', () => {
  let component: CreateProblemTypeComponent;
  let fixture: ComponentFixture<CreateProblemTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateProblemTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateProblemTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
