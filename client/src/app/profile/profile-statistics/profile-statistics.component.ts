import {
  Component,
  ChangeDetectionStrategy,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'app-profile-statistics',
  templateUrl: './profile-statistics.component.html',
  styleUrls: ['./profile-statistics.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class ProfileStatisticsComponent {}
