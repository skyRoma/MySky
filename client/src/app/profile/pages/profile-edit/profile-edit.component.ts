import {
  Component,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
} from '@angular/core';
import {
  Validators,
  FormBuilder,
  AbstractControl,
  FormControl,
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile-edit.component.html',
  styleUrls: ['./profile-edit.component.scss', '../../profile.module.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'half-page' },
})
export class ProfileEditComponent {
  profileEdit = this.fb.group({
    firstName: ['Иван', [Validators.required]],
    lastName: ['Иванов', [Validators.required]],
    email: ['romaddfd@mail.ru', [Validators.required, Validators.email]],
  });

  hidePassword = true;
  hideConfirmPassword = true;
  loading: boolean;
  errorMsg: string;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private cdr: ChangeDetectorRef
  ) {}

  onSubmit(): void {
    this.loading = true;
  }

  get firstName(): AbstractControl {
    return this.profileEdit.get('firstName');
  }
  get lastName(): AbstractControl {
    return this.profileEdit.get('lastName');
  }
  get email(): AbstractControl {
    return this.profileEdit.get('email');
  }

  getErrorMessage(formControl: FormControl): string {
    return formControl.hasError('required')
      ? 'Вы должны ввести значение'
      : formControl.hasError('email')
      ? 'Вы должны ввести значение'
      : formControl.hasError('mustMatch')
      ? 'Пароли не совпадают'
      : formControl.hasError('minlength')
      ? `Значение должно содержать не менее ${
          formControl.errors.minlength.requiredLength
        } символов`
      : '';
  }
}
