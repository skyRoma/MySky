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
  news: News[] = [
    {
      author: {
        firstName: 'Ivan',
        lastName: 'Ivanov',
        id: '223',
        role: 'Администратор',
        email: 'dfd@dlfdf',
      },
      content:
        'dffffffffffff dfffffffffffff dfffffffffffff dfffffffffffff dfffffffffffff dfdffffffffffff df dffffffffffff df dffffffffffff df dffffffffffff df',
      createdAt: new Date(),
      id: 3,
    },
    {
      author: {
        firstName: 'Ivan',
        lastName: 'Ivanov',
        id: '223',
        role: 'Администратор',
        email: 'dfd@dlfdf',
      },
      content:
        'dffffffffffff dfdffffffffffff df dffffffffffff df dffffffffffff df dffffffffffff df',
      createdAt: new Date(),
      id: 3,
    },
    {
      author: {
        firstName: 'Ivan',
        lastName: 'Ivanov',
        id: '223',
        role: 'Администратор',
        email: 'dfd@dlfdf',
      },
      content:
        'dffffffffffff dfdffffffffffff df dffffffffffff df dffffffffffff df dffffffffffff df',
      createdAt: new Date(),
      id: 3,
    },
  ];

  constructor(private route: ActivatedRoute) {}

  getFullName(user: User): string {
    return user.firstName + ' ' + user.lastName;
  }

  ngOnInit(): void {
    this.route.data.subscribe((data: { news: News[] }) => {
      console.log(data.news);
    });
  }
}
