import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1childlib0component31Component } from './lib1childlib0component31.component';

describe('Lib1childlib0component31Component', () => {
  let component: Lib1childlib0component31Component;
  let fixture: ComponentFixture<Lib1childlib0component31Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib1childlib0component31Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1childlib0component31Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
