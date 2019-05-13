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

  get isAdministrator(): boolean {
    const token = this.authService.getDecodedToken();
    return token && token.role === 'Администратор';
  }

  logout(): void {
    this.authService.logout();
  }
}
