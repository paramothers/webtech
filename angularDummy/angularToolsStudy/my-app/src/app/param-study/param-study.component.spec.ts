import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParamStudyComponent } from './param-study.component';

describe('ParamStudyComponent', () => {
  let component: ParamStudyComponent;
  let fixture: ComponentFixture<ParamStudyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParamStudyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParamStudyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
