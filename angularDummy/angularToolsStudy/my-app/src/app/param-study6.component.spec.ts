import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParamStudy6Component } from './param-study6.component';

describe('ParamStudy6Component', () => {
  let component: ParamStudy6Component;
  let fixture: ComponentFixture<ParamStudy6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParamStudy6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParamStudy6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
