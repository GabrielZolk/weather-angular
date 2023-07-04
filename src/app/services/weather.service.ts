import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private apiKey = 'f68e024893bb2ceed7fdaa1892f3f303';

  constructor(private http: HttpClient) { }

  getWeatherData(cityName: string): Observable<any> {
    const params = new HttpParams()
      .set('q', cityName)
      .set('units', 'metric')
      .set('appid', this.apiKey);

    return this.http.get<any>(`${environment.weatherApiBaseUrl}/weather`, {
      params: params
    });
  }
}
