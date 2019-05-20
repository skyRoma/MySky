import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { NewsService } from 'src/app/core/services/news.service';

@Injectable({
  providedIn: 'root',
})
export class NewsResolverService implements Resolve<any> {
  constructor(private newsService: NewsService) {}

  resolve(): Observable<any> | Observable<any> {
    return this.newsService.getNews();
  }
}
