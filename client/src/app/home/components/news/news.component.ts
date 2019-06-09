import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { News, User } from 'src/app/core/models';
import { AuthService } from 'src/app/core/services';
import { NewsService } from 'src/app/core/services/news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'app-news',
  },
})
export class NewsComponent implements OnInit {
  addNewsFormControl = new FormControl('');

  news: News[];

  currentUserId: string;

  constructor(
    private route: ActivatedRoute,
    private newsService: NewsService,
    private authService: AuthService,
    private cdr: ChangeDetectorRef
  ) {
    this.authService.currentUserId.subscribe(id => {
      this.currentUserId = id;
    });
  }

  ngOnInit(): void {
    this.route.data.subscribe((data: { news: News[] }) => {
      this.news = data.news;
    });
  }

  get isAdministrator(): boolean {
    const token = this.authService.getDecodedToken();
    return token && token.role === 'Администратор';
  }

  getFullName(user: User): string {
    return user.firstName + ' ' + user.lastName;
  }

  deleteNews(id: number): void {
    this.newsService.deleteNews(id).subscribe(() => {
      this.newsService.getNews().subscribe(news => {
        this.news = news;
      });
    });
  }

  addNews(content: string): void {
    this.newsService
      .createNews({
        authorId: this.currentUserId,
        content,
      })
      .subscribe(() => {
        this.newsService.getNews().subscribe(news => {
          this.news = news;
          this.addNewsFormControl.reset();
          this.cdr.detectChanges();
        });
      });
  }
}
