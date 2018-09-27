import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParamStudy2Component } from './param-study2.component';

describe('ParamStudy2Component', () => {
  let component: ParamStudy2Component;
  let fixture: ComponentFixture<ParamStudy2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParamStudy2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParamStudy2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
