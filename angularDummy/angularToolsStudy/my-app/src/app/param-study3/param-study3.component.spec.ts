import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParamStudy3Component } from './param-study3.component';

describe('ParamStudy3Component', () => {
  let component: ParamStudy3Component;
  let fixture: ComponentFixture<ParamStudy3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParamStudy3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParamStudy3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
