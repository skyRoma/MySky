import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { JumpingDaysService } from 'src/app/core/services';

@Injectable({
  providedIn: 'root',
})
export class JumpingDayResolverService implements Resolve<any> {
  constructor(private jumpingDaysService: JumpingDaysService) {}

  resolve(): Observable<any> | Observable<any> {
    return this.jumpingDaysService.getJumpingDays();
  }
}
