import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-jumping-day',
  templateUrl: './add-jumping-day.component.html',
  styleUrls: ['./add-jumping-day.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddJumpingDayComponent {
  jumpForm = this.fb.group({
    exercise: ['', [Validators.required]],
    aircraft: ['', [Validators.required]],
  });

  constructor(private fb: FormBuilder) {}
}
