import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParamStudy5Component } from './param-study5.component';

describe('ParamStudy5Component', () => {
  let component: ParamStudy5Component;
  let fixture: ComponentFixture<ParamStudy5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParamStudy5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParamStudy5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
