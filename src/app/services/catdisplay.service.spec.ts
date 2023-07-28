// catdisplay.service.spec.ts
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { CatdisplayService } from './catdisplay.service';

describe('CatdisplayService', () => {
  let service: CatdisplayService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CatdisplayService]
    });
    service = TestBed.inject(CatdisplayService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch cat facts', () => {
    const mockFacts = [{ fact: 'Mock fact 1', length: 100 }, { fact: 'Mock fact 2', length: 150 }];

    service.getCatFacts().subscribe((facts) => {
      expect(facts).toEqual(mockFacts);
    });

    const request = httpMock.expectOne('https://catfact.ninja/facts');
    expect(request.request.method).toBe('GET');
    request.flush(mockFacts);
  });

  it('should fetch cat breeds', () => {
    const mockBreeds = [
      { breed: 'Mock breed 1', country: 'Mock country 1', origin: 'Mock origin 1', coat: 'Mock coat 1', pattern: 'Mock pattern 1' },
      { breed: 'Mock breed 2', country: 'Mock country 2', origin: 'Mock origin 2', coat: 'Mock coat 2', pattern: 'Mock pattern 2' }
    ];

    service.getCatBreeds().subscribe((breeds) => {
      expect(breeds).toEqual(mockBreeds);
    });

    const request = httpMock.expectOne('https://catfact.ninja/breeds');
    expect(request.request.method).toBe('GET');
    request.flush({ data: mockBreeds });
  });
});
