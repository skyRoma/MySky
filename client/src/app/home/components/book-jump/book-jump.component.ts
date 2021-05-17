import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { EXERCISE_OPTIONS } from 'src/app/profile/components/jump-panel/jump-panel-config';

@Component({
  selector: 'app-book-jump',
  templateUrl: './book-jump.component.html',
  styleUrls: ['./book-jump.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BookJumpComponent {
  exerciseOprions = EXERCISE_OPTIONS;

  jumpForm = this.fb.group({
    exercise: ['', [Validators.required]],
  });

  constructor(private fb: FormBuilder) {}

  get exercise(): AbstractControl {
    return this.jumpForm.get('exercise');
  }
}
