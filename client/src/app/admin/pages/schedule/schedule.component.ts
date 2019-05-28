import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'app-schedule vertical-offset-level-2',
  },
})
export class ScheduleComponent {
  jumpingDays = [
    {
      date: new Date(),
      size: 0,
      users: new Array(30).fill({ firstName: 'Иван', lastName: 'Иванов' }),
    },
    {
      date: new Date(),
      size: 0,
      users: new Array(30).fill({ firstName: 'Иван', lastName: 'Иванов' }),
    },
    {
      date: new Date(),
      size: 14,
      users: new Array(30).fill({ firstName: 'Иван', lastName: 'Иванов' }),
    },
    {
      date: new Date(),
      size: 27,
      users: new Array(30).fill({ firstName: 'Иван', lastName: 'Иванов' }),
    },
  ];
}
