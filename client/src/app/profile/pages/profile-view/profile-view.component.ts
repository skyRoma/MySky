import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { User } from 'src/app/core/models';

@Component({
  selector: 'app-profile-view',
  templateUrl: './profile-view.component.html',
  styleUrls: ['./profile-view.component.scss', '../../profile.module.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'half-page' },
})
export class ProfileViewComponent implements OnInit {
  profile: User;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.parent.data.subscribe((data: { profile: User }) => {
      this.profile = data.profile;
    });
  }
}
