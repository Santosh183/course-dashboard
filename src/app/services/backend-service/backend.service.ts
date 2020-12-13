import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor(private http: HttpClient) { }

  getDashBoardCards():  Observable<Object> {
    return this.http.get('https://my-json-server.typicode.com/shripad-agashe/fake-api/dashboard');
  }

  getStudents(): Observable<Object> {
    return this.http.get('https://my-json-server.typicode.com/shripad-agashe/fake-api/students');
  }
}
