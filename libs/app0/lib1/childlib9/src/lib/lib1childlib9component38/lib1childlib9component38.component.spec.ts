import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1childlib9component38Component } from './lib1childlib9component38.component';

describe('Lib1childlib9component38Component', () => {
  let component: Lib1childlib9component38Component;
  let fixture: ComponentFixture<Lib1childlib9component38Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib1childlib9component38Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1childlib9component38Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
