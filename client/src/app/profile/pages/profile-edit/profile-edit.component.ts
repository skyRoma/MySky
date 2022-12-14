import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/core/models';
import { UserService } from 'src/app/core/services';

@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile-edit.component.html',
  styleUrls: ['./profile-edit.component.scss', '../../profile.module.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'half-page' },
})
export class ProfileEditComponent implements OnInit {
  profileEdit: FormGroup;

  hidePassword = true;

  hideConfirmPassword = true;

  loading: boolean;

  errorMsg: string;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService
  ) {}

  ngOnInit() {
    this.route.parent.data.subscribe((data: { profile: User }) => {
      const { profile } = data;
      this.profileEdit = this.fb.group({
        firstName: [profile.firstName, [Validators.required]],
        lastName: [profile.lastName, [Validators.required]],
        email: [profile.email, [Validators.required, Validators.email]],
        phoneNumber: [profile.phoneNumber, [Validators.required]],
      });
    });
  }

  onSubmit(): void {
    const id = this.route.parent.snapshot.paramMap.get('id');
    this.userService.updateUser(id, this.profileEdit.value).subscribe(
      () => {
        this.router.navigate([`profile/${id}`]);
      },
      () => {
        this.loading = false;
      }
    );
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

  get phoneNumber(): AbstractControl {
    return this.profileEdit.get('phoneNumber');
  }

  getErrorMessage(formControl: FormControl): string {
    return formControl.hasError('required')
      ? '???? ???????????? ???????????? ????????????????'
      : formControl.hasError('email')
      ? '???? ???????????? ???????????? ????????????????'
      : formControl.hasError('minlength')
      ? `???????????????? ???????????? ?????????????????? ???? ?????????? ${
          formControl.errors.minlength.requiredLength
        } ????????????????`
      : '';
  }
}
