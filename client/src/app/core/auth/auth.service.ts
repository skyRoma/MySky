import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { MysHttpResponse } from '../interfaces/http-responses';
import { MysToken } from '../interfaces/token';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient, private router: Router) {}

  // redirectUrl: string;
  jwtHelper = new JwtHelperService();

  signup(
    email: string,
    password: string,
    firstName: string,
    lastName: string
  ): Observable<MysHttpResponse> {
    return this.http.post<MysHttpResponse>(
      `http://localhost:3000/auth/signup`,
      {
        email,
        password,
        firstName,
        lastName,
      }
    );
  }

  login(email: string, password: string): Observable<MysHttpResponse> {
    return this.http
      .post<MysHttpResponse>(`http://localhost:3000/auth/signin`, {
        email,
        password,
      })
      .pipe(
        tap(res => {
          if (res) {
            localStorage.setItem('MySkyJwt', res.msg);
          }
        })
      );
  }

  logout(): void {
    localStorage.removeItem('MySkyJwt');
    this.router.navigate(['/auth/login']);
  }

  getToken(): string {
    return localStorage.getItem('MySkyJwt');
  }

  getDecodedToken(): MysToken {
    return this.jwtHelper.decodeToken(this.getToken());
  }

  isAuthenticated(): boolean {
    const token = this.getToken();
    return !this.jwtHelper.isTokenExpired(token);
  }
}
