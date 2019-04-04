// import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs';
// import { HttpClient } from '@angular/common/http';

// import { User } from '../models';

// @Injectable({
//   providedIn: 'root',
// })
// export class UserService {
//   constructor(private http: HttpClient) {}

//   getAllUsers(): Observable<User[]> {
//     return this.http.get<User[]>(`http://localhost:3000/users`);
//   }

//   getUser(id: string): Observable<User> {
//     return this.http.get<User>(`http://localhost:3000/users/${id}`);
//   }
//   // TODO : which type I should specify
//   updateUser(id: string, data): Observable<User> {
//     return this.http.put<User>(`http://localhost:3000/users/${id}`, data);
//   }

//   deleteUser(id: string): Observable<User> {
//     return this.http.delete<User>(`http://localhost:3000/users/${id}`);
//   }
// }
