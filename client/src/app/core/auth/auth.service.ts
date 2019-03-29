import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';

import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  constructor(public jwtHelper: JwtHelperService, private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<User>(
      JSON.parse(this.getToken())
    );
    this.currentUser = this.currentUserSubject.asObservable();
  }

  redirectUrl: string;

  getToken(): string {
    return localStorage.getItem('token');
  }

  isAuthenticated(): boolean {
    const token = this.getToken();
    return !this.jwtHelper.isTokenExpired(token);
  }
}
