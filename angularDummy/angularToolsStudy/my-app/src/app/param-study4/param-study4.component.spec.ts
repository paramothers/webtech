import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParamStudy4Component } from './param-study4.component';

describe('ParamStudy4Component', () => {
  let component: ParamStudy4Component;
  let fixture: ComponentFixture<ParamStudy4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParamStudy4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParamStudy4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
