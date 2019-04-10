import { Component, ViewEncapsulation } from '@angular/core';
import { FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';

@Component({
  selector: 'app-add-jump-panel',
  templateUrl: './add-jump-panel.component.html',
  styleUrls: ['./add-jump-panel.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'add-jump-panel',
  },
})
export class AddJumpPanelComponent {
  singleLine: boolean;

  jumpForm = this.fb.group({
    date: ['', [Validators.required]],
    exercise: ['', [Validators.required]],
    parachute: ['', [Validators.required]],
    aircrafType: ['', [Validators.required]],
    height: ['', [Validators.required]],
    freeFallTime: ['', [Validators.required]],
    result: ['', [Validators.required]],
  });

  constructor(
    private fb: FormBuilder,
    private _breakpointObserver: BreakpointObserver
  ) {
    _breakpointObserver
      .observe('(min-width: 1450px)')
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          this.singleLine = true;
        } else {
          this.singleLine = false;
        }
      });
  }

  get date(): AbstractControl {
    return this.jumpForm.get('date');
  }
  get exercise(): AbstractControl {
    return this.jumpForm.get('exercise');
  }
  get parachute(): AbstractControl {
    return this.jumpForm.get('parachute');
  }
  get aircrafType(): AbstractControl {
    return this.jumpForm.get('aircrafType');
  }
  get height(): AbstractControl {
    return this.jumpForm.get('height');
  }
  get freeFallTime(): AbstractControl {
    return this.jumpForm.get('freeFallTime');
  }
  get result(): AbstractControl {
    return this.jumpForm.get('result');
  }

  onSubmit() {}
}
