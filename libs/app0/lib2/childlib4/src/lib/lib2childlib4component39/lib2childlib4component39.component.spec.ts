import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2childlib4component39Component } from './lib2childlib4component39.component';

describe('Lib2childlib4component39Component', () => {
  let component: Lib2childlib4component39Component;
  let fixture: ComponentFixture<Lib2childlib4component39Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib2childlib4component39Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2childlib4component39Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
