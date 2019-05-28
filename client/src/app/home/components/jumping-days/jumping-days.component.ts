import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-jumping-days',
  templateUrl: './jumping-days.component.html',
  styleUrls: ['./jumping-days.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'app-jumping-days',
  },
})
export class JumpingDaysComponent {
  jumpingDays = [
    { date: new Date(), size: 0 },
    { date: new Date(), size: 0 },
    { date: new Date(), size: 14 },
    { date: new Date(), size: 27 },
  ];
}
