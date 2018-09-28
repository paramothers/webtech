import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExecrciseDescriptionComponent } from './execrcise-description.component';

describe('ExecrciseDescriptionComponent', () => {
  let component: ExecrciseDescriptionComponent;
  let fixture: ComponentFixture<ExecrciseDescriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExecrciseDescriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExecrciseDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
