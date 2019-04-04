import {
  Component,
  ChangeDetectionStrategy,
  OnInit,
  ChangeDetectorRef,
} from '@angular/core';
import {
  FormBuilder,
  Validators,
  FormControl,
  AbstractControl,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';

import { AuthService } from '../../../core/services';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss', '../../auth.module.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'half-page' },
})
export class LoginComponent implements OnInit {
  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8)]],
  });

  hidePassword = true;
  returnUrl: string;
  loading = false;
  errorMsg: string;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService,
    private cdr: ChangeDetectorRef,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.authService.logout();
    const queryParams = this.route.snapshot.queryParams;
    this.returnUrl = queryParams['returnUrl'] || '/';

    if (queryParams['from'] === 'signup') {
      setTimeout(() => {
        this.snackBar.open(
          'Поздравляем! Вы успешно зарегестрировались!',
          '',
          {
            duration: 5000,
          }
        );
      });
    }
  }

  onSubmit(): void {
    this.loading = true;
    this.authService.login(this.email.value, this.password.value).subscribe(
      () => {
        this.router.navigate([this.returnUrl]);
      },
      error => {
        this.errorMsg = error.error.msg;
        this.loading = false;
        this.cdr.detectChanges();
      }
    );
  }

  get email(): AbstractControl {
    return this.loginForm.get('email');
  }
  get password(): AbstractControl {
    return this.loginForm.get('password');
  }

  getErrorMessage(formControl: FormControl): string {
    return formControl.hasError('required')
      ? 'Вы должны ввести значение'
      : formControl.hasError('email')
      ? 'Вы должны ввести значение'
      : formControl.hasError('minlength')
      ? `Значение должно содержать не менее ${
          formControl.errors.minlength.requiredLength
        } символов`
      : '';
  }
}
