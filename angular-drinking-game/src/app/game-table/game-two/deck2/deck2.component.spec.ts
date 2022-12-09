import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Deck2Component } from './deck2.component';

describe('Deck2Component', () => {
  let component: Deck2Component;
  let fixture: ComponentFixture<Deck2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Deck2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Deck2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
