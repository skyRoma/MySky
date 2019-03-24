import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable()
export class AuthService {
  constructor(public jwtHelper: JwtHelperService) {}

  redirectUrl: string;

  getToken(): string {
    return localStorage.getItem('token');
  }

  isAuthenticated(): boolean {
    const token = this.getToken();
    return !this.jwtHelper.isTokenExpired(token);
  }
}
