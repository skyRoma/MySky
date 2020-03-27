import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ActivatedRoute } from '@angular/router';

import { BookJumpComponent } from '../book-jump/book-jump.component';

@Component({
  selector: 'app-jumping-days',
  templateUrl: './jumping-days.component.html',
  styleUrls: ['./jumping-days.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'app-jumping-days',
  },
})
export class JumpingDaysComponent implements OnInit {
  jumpingDays;

  constructor(private route: ActivatedRoute, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.route.data.subscribe((data: { jumpingDays: any[] }) => {
      this.jumpingDays = data.jumpingDays.map(day => {
        return {
          date: day.date,
          size: day.size - day.users.length,
        };
      });
    });
  }

  bookJump() {
    this.dialog.open(BookJumpComponent);
  }
}
