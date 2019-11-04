import {TestBed} from '@angular/core/testing';
import {HeroService} from './hero.service';
import {MessageService} from './message.service';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';

describe('HeroService', () => {
  let mockMessageService;
  let httpTestingController: HttpTestingController;
  beforeEach(() => {
    mockMessageService = jasmine.createSpyObj(['add']);
   TestBed.configureTestingModule({
     imports: [ HttpClientTestingModule ],
     providers: [ HeroService,
       { provide: MessageService, useValue: mockMessageService }
     ]
   });
   httpTestingController = TestBed.get(HttpTestingController); // how to get instance of a service in a testing module
  });
});
