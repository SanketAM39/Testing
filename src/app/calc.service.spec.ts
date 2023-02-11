import { TestBed } from '@angular/core/testing';
import { CalcService } from './calc.service';
import { SharedService } from './shared.service';

describe('CalcService', () => {
  let shared: SharedService;
  let calc: CalcService;

  beforeEach(() => {
    console.log('Before Execution');
    shared = jasmine.createSpyObj('SharedService', ['sharedFunction']);
    TestBed.configureTestingModule({
      providers: [
        CalcService,
        {
          provide: SharedService,
          useValue: shared,
        },
      ],
    });
    shared = TestBed.inject(SharedService);
    calc = TestBed.inject(CalcService);
  });
  it('Should multiply two numbers', () => {
    const shared = new SharedService();
    const calc = new CalcService(shared);

    const result = calc.multiply(3, 5);
    expect(result).toBe(15);
  });

  it('should call shared function', () => {
    // const shared = new SharedService();
    const shared = jasmine.createSpyObj('SharedService', ['sharedFunction']); // to mock a service
    // spyOn(shared, 'sharedFunction');
    // spyOn(shared, 'sharedFunction').and.callThrough(); // for actualy calling shared function
    const calc = new CalcService(shared);
    const result = calc.multiply(3, 5);
    expect(shared.sharedFunction).toHaveBeenCalled();
  });
});
