import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';

@Injectable()
export class AuthService {
  constructor(private http: HttpClient) {}

  signup(credentials: User): Observable<User> {
    return this.http.post<User>('http://localhost:3000/api/users', credentials);
  }
}
