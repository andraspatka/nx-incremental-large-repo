import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1childlib2component22Component } from './lib1childlib2component22.component';

describe('Lib1childlib2component22Component', () => {
  let component: Lib1childlib2component22Component;
  let fixture: ComponentFixture<Lib1childlib2component22Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib1childlib2component22Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1childlib2component22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});