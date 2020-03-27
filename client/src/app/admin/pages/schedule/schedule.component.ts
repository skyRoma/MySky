import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ActivatedRoute } from '@angular/router';

import { AddJumpingDayComponent } from '../../components/add-jumping-day/add-jumping-day.component';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'app-schedule vertical-offset-level-2',
  },
})
export class ScheduleComponent implements OnInit {
  jumpingDays = [];

  constructor(private route: ActivatedRoute, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.route.data.subscribe((data: { jumpingDays: any[] }) => {
      this.jumpingDays = data.jumpingDays.map(day => {
        return {
          date: day.date,
          size: day.size - day.users.length,
          users: day.users,
        };
      });
    });
  }

  addDay() {
    this.dialog.open(AddJumpingDayComponent);
  }
}
