import { ChangeDetectionStrategy, Component } from '@angular/core';

import { AuthService } from './core/services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  title = 'MySky';
  currentUserId: string;

  constructor(public authService: AuthService) {
    this.authService.currentUserId.subscribe(id => {
      this.currentUserId = id;
    });
  }

  logout(): void {
    this.authService.logout();
  }
}
