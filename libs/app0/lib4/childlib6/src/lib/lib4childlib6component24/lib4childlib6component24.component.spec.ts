import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib4childlib6component24Component } from './lib4childlib6component24.component';

describe('Lib4childlib6component24Component', () => {
  let component: Lib4childlib6component24Component;
  let fixture: ComponentFixture<Lib4childlib6component24Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib4childlib6component24Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib4childlib6component24Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
