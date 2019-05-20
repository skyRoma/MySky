import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { News } from '../models';

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  constructor(private http: HttpClient) {}

  getNews(): Observable<News[]> {
    return this.http.get<News[]>(`http://localhost:3000/news`);
  }

  createNews(data: News): Observable<News> {
    return this.http.post<News>(`http://localhost:3000/news`, data);
  }

  updateNews(id: string, data: News): Observable<News> {
    return this.http.put<News>(`http://localhost:3000/news/${id}`, data);
  }

  deleteNews(id: string): Observable<News> {
    return this.http.delete<News>(`http://localhost:3000/news/${id}`);
  }
}
