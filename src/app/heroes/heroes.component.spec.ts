import {HeroesComponent} from './heroes.component';
import {of} from 'rxjs/internal/observable/of';

describe('HeroesComponent', () => {
  let component: HeroesComponent;
  let HEROES;
  let mockHeroService;

  beforeEach(() => {
   HEROES = [
     {id: 1, name: 'SpiderDude', strength: 8},
     {id: 1, name: 'Wonderful Woman', strength: 24},
     {id: 1, name: 'SuperDude', strength: 55},
   ];
    // a mock service
    mockHeroService = jasmine.createSpyObj(['getHeroes', 'addHero', 'deleteHero']);
   component = new HeroesComponent(mockHeroService);
  });

  describe('delete', () => {
    it('should remove the indicated hero from the heroes list', () => {
      mockHeroService.deleteHero.and.returnValue(of(true));
      component.heroes = HEROES;
      component.delete(HEROES[2]);
      expect(component.heroes.length).toBe(2);
    });
  });
});
