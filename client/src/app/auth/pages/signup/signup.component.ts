import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
} from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../../../core/services';

import { MustMatch } from './must-match-validator';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['../../auth.module.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'half-page' },
})
export class SignupComponent {
  signupForm = this.fb.group(
    {
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(8)]],
    },
    {
      validator: MustMatch('password', 'confirmPassword'),
    }
  );

  hidePassword = true;

  hideConfirmPassword = true;

  loading: boolean;

  errorMsg: string;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private cdr: ChangeDetectorRef
  ) {}

  onSubmit(): void {
    this.loading = true;
    this.authService
      .signup(
        this.email.value,
        this.password.value,
        this.firstName.value,
        this.lastName.value
      )
      .subscribe(
        () => {
          this.router.navigate(['/auth/login'], {
            queryParams: { from: 'signup' },
          });
        },
        error => {
          this.errorMsg = error.error.msg;
          this.loading = false;
          this.cdr.detectChanges();
        }
      );
  }

  get firstName(): AbstractControl {
    return this.signupForm.get('firstName');
  }

  get lastName(): AbstractControl {
    return this.signupForm.get('lastName');
  }

  get email(): AbstractControl {
    return this.signupForm.get('email');
  }

  get password(): AbstractControl {
    return this.signupForm.get('password');
  }

  get confirmPassword(): AbstractControl {
    return this.signupForm.get('confirmPassword');
  }

  getErrorMessage(formControl: FormControl): string {
    return formControl.hasError('required')
      ? '???? ???????????? ???????????? ????????????????'
      : formControl.hasError('email')
      ? '?????????????? ???????????????????? ?????????? ?????????????????????? ??????????'
      : formControl.hasError('mustMatch')
      ? '???????????? ???? ??????????????????'
      : formControl.hasError('minlength')
      ? `???????????????? ???????????? ?????????????????? ???? ?????????? ${
          formControl.errors.minlength.requiredLength
        } ????????????????`
      : '';
  }
}
