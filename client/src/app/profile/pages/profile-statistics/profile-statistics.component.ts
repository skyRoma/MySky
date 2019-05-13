import { ChangeDetectionStrategy, Component, ViewChild } from '@angular/core';
import { Jump } from 'src/app/core/models/jump';

import { JumpPanelComponent } from '../../components/jump-panel/jump-panel.component';

@Component({
  selector: 'app-profile-statistics',
  templateUrl: './profile-statistics.component.html',
  styleUrls: ['./profile-statistics.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfileStatisticsComponent {
  @ViewChild('jumpPanelRef')
  jumpPanelRef: JumpPanelComponent;

  onEdit(jump: Jump): void {
    this.jumpPanelRef.open(jump);
  }
}
