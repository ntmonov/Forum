import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';

@Injectable()
export class AuthService {
  constructor(private http: HttpClient) {}

  signup(credentials): Observable<{ message: string }> {
    return this.http.post<{ message: string }>(
      'http://localhost:3000/api/users',
      credentials
    );
  }

  signin(credentials): Observable<User> {
    return this.http.post<User>(
      'http://localhost:3000/api/users/login',
      credentials
    );
  }
}
