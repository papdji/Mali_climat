import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { timeout, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class APIService {

  constructor(private http: HttpClient) {}

  /* GENERIC */
  getGeneric(endpoint: string): Observable<any> {
    return this.http.get<any>(`${environment.API_URL}${endpoint}`).pipe(timeout(1000), retry(2));
  }

  postGeneric(endpoint: string, body: any): Observable<any> {
    return this.http.post<any>(`${environment.API_URL}${endpoint}`, body).pipe(timeout(1000), retry(2));
  }

  /* Obtenir la météo actuelle */
  getCurrentWeather(query: string){
    return this.getGeneric(`current.json?key=${environment.API_KEY}&q=${query}&aqi=yes`);
  }
  // Prévisions météorologiques
  getForecastWeather(query: string){
    return this.getGeneric(`forecast.json?key=${environment.API_KEY}&q=${query}&days=7&aqi=yes&alerts=yes`);
  }

}
