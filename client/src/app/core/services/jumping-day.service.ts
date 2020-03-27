import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class JumpingDaysService {
  constructor(private http: HttpClient) {}

  getJumpingDays(): Observable<any[]> {
    return this.http.get<any[]>(`http://localhost:3000/jumping-days`);
  }

  createJumpingDay(data: any): Observable<any> {
    return this.http.post<any>(`http://localhost:3000/jumping-days`, data);
  }

  updateJumpingDay(id: number, data: any): Observable<any> {
    return this.http.put<any>(
      `http://localhost:3000/jumping-days/${id}`,
      data
    );
  }

  deleteJumpingDay(id: number): Observable<any[]> {
    return this.http.delete<any[]>(
      `http://localhost:3000/jumping-days/${id}`
    );
  }
}
