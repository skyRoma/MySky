import { CanDeactivate } from '@angular/router';

import { ComponentCanDeactivate } from '../interfaces/component-can-deactivate';

export class ExitGuard implements CanDeactivate<ComponentCanDeactivate> {
  canDeactivate(component: ComponentCanDeactivate): boolean {
    return component.canDeactivate ? component.canDeactivate() : true;
  }
}
