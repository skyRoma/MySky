import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  ViewChild,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Jump, User } from 'src/app/core/models';

import { JumpPanelComponent } from '../../components/jump-panel/jump-panel.component';

@Component({
  selector: 'app-profile-statistics',
  templateUrl: './profile-statistics.component.html',
  styleUrls: ['./profile-statistics.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'vertical-offset-level-1',
  },
})
export class ProfileStatisticsComponent implements OnInit {
  @ViewChild('jumpPanelRef')
  jumpPanelRef: JumpPanelComponent;

  jumps: Jump[];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.data.subscribe((data: { profile: User }) => {
      this.jumps = data.profile.jumps.map(jump => jump);
    });
  }

  onEdit(jump: Jump): void {
    this.jumpPanelRef.open(jump);
  }
}
