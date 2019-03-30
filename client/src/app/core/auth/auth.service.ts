import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { HttpClient } from '@angular/common/http';

import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  // redirectUrl: string;
  jwtHelper = new JwtHelperService();

  signup(
    email: string,
    password: string,
    firstName: string,
    lastName: string
  ) {
    return this.http.post<string>(`http://localhost:3000/auth/signup`, {
      email,
      password,
      firstName,
      lastName,
    });
  }

  login(email: string, password: string) {
    return this.http
      .post<any>(`http://localhost:3000/auth/signin`, { email, password })
      .pipe(
        tap(res => {
          if (res) {
            localStorage.setItem('MySkyJwt', res.token);
          }
        })
      );
  }

  logout() {
    localStorage.removeItem('MySkyJwt');
  }

  getToken(): string {
    return localStorage.getItem('MySkyJwt');
  }

  getDecodedToken() {
    return this.jwtHelper.decodeToken(this.getToken());
  }

  isAuthenticated(): boolean {
    const token = this.getToken();
    return !this.jwtHelper.isTokenExpired(token);
  }
}
