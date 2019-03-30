import {
  Component,
  ChangeDetectionStrategy,
  ViewEncapsulation,
  OnInit,
  ChangeDetectorRef,
} from '@angular/core';
import { FormBuilder, Validators, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';

import { AuthService } from 'src/app/core/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss', '../../auth.module.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  host: { class: 'app-login' },
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

  ngOnInit() {
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

  onSubmit() {
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

  get email(): any {
    return this.loginForm.get('email');
  }
  get password(): any {
    return this.loginForm.get('password');
  }

  getErrorMessage(formControl: FormControl) {
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
