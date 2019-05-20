import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { News, User } from 'src/app/core/models';

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
  news: News[];

  constructor(private route: ActivatedRoute) {}

  getFullName(user: User): string {
    return user.firstName + ' ' + user.lastName;
  }

  ngOnInit(): void {
    this.route.data.subscribe((data: { news: News[] }) => {
      this.news = data.news;
    });
  }
}
