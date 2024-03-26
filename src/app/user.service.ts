import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Inter } from './Inter';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl = 'http://localhost:8080/api/users';

  constructor(private http: HttpClient) { }

  getData(){
    let getUrl = "http://localhost:8080/api/employees";
    return this.http.get(getUrl);
  }

  postData(data: any): Observable<any> {
    const postUrl = "http://localhost:8080/api/employees";
    const headers = new HttpHeaders({  'Content-type': 'application/json'});
    return this.http.post<any>(postUrl, data, {headers});
  }

  login(inter: Inter): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/login`, inter);
  }

  register(inter: Inter): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/register`, inter);
  }
}
