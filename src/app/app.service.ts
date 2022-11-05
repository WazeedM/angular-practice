import { HttpClient } from '@angular/common/http';
import './data.json';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class apiDataService {
  constructor(private http: HttpClient) {}
  getApiData() {
    return this.http.get('https://reqres.in/api/users');
  }
}
