import { CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';

import { ComponentCanDeactivate } from '../interfaces/component-can-deactivate';

export class ExitGuard implements CanDeactivate<ComponentCanDeactivate> {
  canDeactivate(
    component: ComponentCanDeactivate
  ): Observable<boolean> | boolean {
    return component.canDeactivate ? component.canDeactivate() : true;
  }
}
