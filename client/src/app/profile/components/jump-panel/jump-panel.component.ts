import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  ViewChild,
} from '@angular/core';
import { AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { MatExpansionPanel } from '@angular/material';
import { Jump } from 'src/app/core/models';

import { EXERCISE_OPTIONS } from './jump-panel-config';

@Component({
  selector: 'app-jump-panel',
  templateUrl: './jump-panel.component.html',
  styleUrls: ['./jump-panel.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    class: 'jump-panel',
  },
})
export class JumpPanelComponent {
  singleLine: boolean;

  exerciseOprions = EXERCISE_OPTIONS;

  isJumpExist: boolean;

  jumpForm = this.fb.group({
    date: ['', [Validators.required]],
    exercise: ['', [Validators.required]],
    parachute: ['', [Validators.required]],
    aircraft: ['', [Validators.required]],
    height: ['', [Validators.required]],
    freeFallTime: ['', [Validators.required]],
    result: ['', [Validators.required]],
  });

  @ViewChild('jumpFormRef')
  jumpFormRef: ElementRef;

  @ViewChild('matPanel')
  matPanel: MatExpansionPanel;

  constructor(
    private fb: FormBuilder,
    private breakpointObserver: BreakpointObserver
  ) {
    breakpointObserver
      .observe('(min-width: 1750px)')
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

  get title(): string {
    return this.isJumpExist ? '???????????????? ????????????' : '?????????? ????????????';
  }

  get btnText(): string {
    return this.isJumpExist ? '????????????????' : '????????????????';
  }

  open(jump: Jump): void {
    this.setFormValues(jump);
    this.matPanel.open();
    this.isJumpExist = true;
    this.jumpFormRef.nativeElement.scrollIntoView();
  }

  onSubmit(): void {
    this.isJumpExist = false;
    this.jumpForm.reset();
    this.matPanel.close();
  }

  private setFormValues(jump: Jump): void {
    Object.keys(this.jumpForm.controls).forEach(formControlName => {
      this.jumpForm.controls[formControlName].setValue(
        this.getFormControlValue(jump, formControlName)
      );
    });
    this.setDropDownValue(jump);
  }

  private setDropDownValue(jump: Jump): void {
    let exerciseValue: string;
    this.exerciseOprions.forEach(option => {
      if (option.name === jump.exercise.name) {
        exerciseValue = option.value;
      }
    });
    this.jumpForm.controls.exercise.setValue(exerciseValue);
  }

  private getFormControlValue(jump: Jump, formControlName: string): any {
    return jump[formControlName].id
      ? jump[formControlName].name
      : jump[formControlName];
  }
}
