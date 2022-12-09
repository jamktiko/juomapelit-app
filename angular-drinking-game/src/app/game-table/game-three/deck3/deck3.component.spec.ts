import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Deck3Component } from './deck3.component';

describe('Deck3Component', () => {
  let component: Deck3Component;
  let fixture: ComponentFixture<Deck3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Deck3Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Deck3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
