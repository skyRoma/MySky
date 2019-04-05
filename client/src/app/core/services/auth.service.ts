import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';

import { AuthHttpResponse, MysToken } from '../models';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private currentUserIdSubject: BehaviorSubject<string>;
  public currentUserId: Observable<string>;

  // redirectUrl: string;
  jwtHelper = new JwtHelperService();

  constructor(private http: HttpClient, private router: Router) {
    const token = this.getDecodedToken();

    this.currentUserIdSubject = new BehaviorSubject<string>(
      token ? token.sub : null
    );
    this.currentUserId = this.currentUserIdSubject.asObservable();
  }

  signup(
    email: string,
    password: string,
    firstName: string,
    lastName: string
  ): Observable<AuthHttpResponse> {
    return this.http.post<AuthHttpResponse>(
      `http://localhost:3000/auth/signup`,
      {
        email,
        password,
        firstName,
        lastName,
      }
    );
  }

  login(email: string, password: string): Observable<AuthHttpResponse> {
    return this.http
      .post<AuthHttpResponse>(`http://localhost:3000/auth/signin`, {
        email,
        password,
      })
      .pipe(
        tap(res => {
          if (res) {
            localStorage.setItem('MySkyJwt', res.msg);
            this.currentUserIdSubject.next(this.getDecodedToken().sub);
          }
        })
      );
  }

  logout(): void {
    localStorage.removeItem('MySkyJwt');
    this.currentUserIdSubject.next(null);
    this.router.navigate(['/auth/login']);
  }

  getToken(): string {
    return localStorage.getItem('MySkyJwt');
  }

  getDecodedToken(): MysToken {
    return this.jwtHelper.decodeToken(this.getToken());
  }

  isAuthTokenExpired(): boolean {
    const token = this.getToken();
    return this.jwtHelper.isTokenExpired(token);
  }
}
