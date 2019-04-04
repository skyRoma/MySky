import { Component, ChangeDetectionStrategy } from '@angular/core';
import { AuthService } from './core/services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  title = 'MySky';

  constructor(public authService: AuthService) {}

  logout(): void {
    this.authService.logout();
  }
}
