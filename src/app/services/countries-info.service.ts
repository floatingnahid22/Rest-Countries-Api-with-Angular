import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class CountriesInfoService {

  private apiUrl = environment.apiUrl;
  private accessToken = 'getaccesstoken'
  private countryEndPoints = 'countries/'

  constructor(private http: HttpClient) { }

  getAccessToken(): Observable<any> {
    const url = `${this.apiUrl}/${this.accessToken}`;
    const apiToken = environment.apiToken;
    const userEmail = environment.userEmail;

    const headers = {
      Accept: 'application/json',
      'api-token': apiToken,
      'user-email': userEmail
    };

    return this.http.get<any>(url, { headers });
  }

  makeApiCall(authToken: string): Observable<any> {
    const url = `${this.apiUrl}/${this.countryEndPoints}`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${authToken}`
    });

    return this.http.get(url, { headers });
  }
}
