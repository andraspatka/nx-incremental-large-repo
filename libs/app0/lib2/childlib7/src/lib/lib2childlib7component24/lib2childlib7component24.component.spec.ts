import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2childlib7component24Component } from './lib2childlib7component24.component';

describe('Lib2childlib7component24Component', () => {
  let component: Lib2childlib7component24Component;
  let fixture: ComponentFixture<Lib2childlib7component24Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib2childlib7component24Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2childlib7component24Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
