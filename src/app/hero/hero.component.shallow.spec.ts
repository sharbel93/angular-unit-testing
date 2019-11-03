import {ComponentFixture, TestBed} from '@angular/core/testing';
import {HeroComponent} from './hero.component';
import {NO_ERRORS_SCHEMA} from '@angular/core';

describe('HeroComponent (shallow tests)', () => {
  let fixture: ComponentFixture<HeroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeroComponent],
      schemas: [NO_ERRORS_SCHEMA] // ignore errors of unknown attribute/ element in the template
    });
    fixture = TestBed.createComponent(HeroComponent);
  });
  it ('should have the correct hero', () => {
    fixture.componentInstance.hero = {
      id: 1, name: 'SuperDude', strength: 3
    };
    expect(fixture.componentInstance.hero.name).toEqual('SuperDude');
  });
});
