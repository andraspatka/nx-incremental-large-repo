import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1childlib7component43Component } from './lib1childlib7component43.component';

describe('Lib1childlib7component43Component', () => {
  let component: Lib1childlib7component43Component;
  let fixture: ComponentFixture<Lib1childlib7component43Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib1childlib7component43Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1childlib7component43Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
