import {async, ComponentFixture, fakeAsync, flush, TestBed, tick} from '@angular/core/testing';
import {HeroDetailComponent} from './hero-detail.component';
import {ActivatedRoute} from '@angular/router';
import {HeroService} from '../hero.service';
import {Location} from '@angular/common';
import {of} from 'rxjs/internal/observable/of';
import {FormsModule} from '@angular/forms';

describe('HeroDetailComponent', () => {
  let fixture: ComponentFixture<HeroDetailComponent>;
  let mockActivatedRoute, mockHeroService, mockLocation;
  beforeEach(() => {
    mockActivatedRoute = {
      snapshot: {paramMap: { get: () => '3'}}
    };
    mockHeroService = jasmine.createSpyObj(['getHero', 'updateHero']);
    mockLocation = jasmine.createSpyObj(['back']);
    //
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [HeroDetailComponent],
      providers: [
        { provide: ActivatedRoute, useValue: mockActivatedRoute },
        { provide: HeroService, useValue: mockHeroService },
        { provide: Location, useValue: mockLocation }
      ]
    });
    fixture = TestBed.createComponent(HeroDetailComponent);
    //
    mockHeroService.getHero.and.returnValue(of({id: 3, name: 'SuperDude', strength: 100}));
  });
  it('should render hero name in a h2 tag', () => {
    fixture.detectChanges();
    //
    expect(fixture.nativeElement.querySelector('h2').textContent).toContain('SUPERDUDE');
  });
  // By default use fakeAsync
  // it ('should call updateHero when  save is called', fakeAsync(() => {
  //   mockHeroService.updateHero.and.returnValue(of({}));
  //   fixture.detectChanges();
  //   //
  //   fixture.componentInstance.save();
  //   // use tick() or flush()
  //   // tick(250);
  //   flush();
  //   //
  //   expect(mockHeroService.updateHero).toHaveBeenCalled();
  // }));

  // using async helper function ; this relies on the zone.js that deals with the promises
  it ('should call updateHero when  save is called', async(() => {
    mockHeroService.updateHero.and.returnValue(of({}));
    fixture.detectChanges();
    //
    fixture.componentInstance.save();
    //
    fixture.whenStable().then(() => {
      // wont be called until all other promises has been fulfilled
      expect(mockHeroService.updateHero).toHaveBeenCalled();
    });
  }));

});
