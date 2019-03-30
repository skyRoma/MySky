import {
  Component,
  ChangeDetectionStrategy,
  ViewEncapsulation,
  ChangeDetectorRef,
} from '@angular/core';
import { Validators, FormBuilder, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

import { MustMatch } from './must-match-validator';
import { AuthService } from 'src/app/core/auth/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss', '../../auth.module.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  host: { class: 'app-signup' },
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

  onSubmit() {
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

  get firstName(): any {
    return this.signupForm.get('firstName');
  }
  get lastName(): any {
    return this.signupForm.get('lastName');
  }
  get email(): any {
    return this.signupForm.get('email');
  }
  get password(): any {
    return this.signupForm.get('password');
  }
  get confirmPassword(): any {
    return this.signupForm.get('confirmPassword');
  }

  getErrorMessage(formControl: FormControl) {
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
