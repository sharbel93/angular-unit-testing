import {inject, TestBed} from '@angular/core/testing';
import {HeroService} from './hero.service';
import {MessageService} from './message.service';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';

describe('HeroService', () => {
  let mockMessageService;
  let httpTestingController: HttpTestingController;
  let service: HeroService;
  beforeEach(() => {
    mockMessageService = jasmine.createSpyObj(['add']);
   TestBed.configureTestingModule({
     imports: [ HttpClientTestingModule ],
     providers: [ HeroService,
       { provide: MessageService, useValue: mockMessageService }
     ]
   });
   httpTestingController = TestBed.get(HttpTestingController); // how to get instance of a service in a testing module
   service = TestBed.get(HeroService);
  });
  describe('getHero', () => {
    it ('should call get with the correct URL', () => {
              service.getHero(4).subscribe();
              const req = httpTestingController.expectOne('api/heroes/4');
              req.flush({id: 4, name: 'SuperDude', strength: 100});
              httpTestingController.verify(); // get exactlty what you expect i.e incase you called 2 different requests
        });

  });
});
