import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CatdisplayService {
  private apiUrl = 'https://catfact.ninja';

  constructor(private http: HttpClient) { }

  // getCatFacts(): Observable<any> {
  //   return this.http.get<any>(`${this.apiUrl}/facts`);
  // }

  // getCatFacts(): Observable<any> {
  //   return this.http.get(
  //     'https://catfact.ninja/facts'
  //   );
  // }

  getCatFacts(): Observable<any> {
  return this.http.get<any>(`${this.apiUrl}/facts`)
    .pipe(
      tap(data => console.log('API response:', data)),
      catchError(error => {
        console.error('Error fetching cat facts:', error);
        return [];
      })
    );
}

getCatBreeds(): Observable<any> {
  return this.http.get<any>(`${this.apiUrl}/breeds`)
    .pipe(
      tap(data => console.log('API response:', data)),
      catchError(error => {
        console.error('Error fetching cat breeds:', error);
        return [];
      })
    );
}

  
}
