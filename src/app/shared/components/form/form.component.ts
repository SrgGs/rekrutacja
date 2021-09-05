import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { USER_FORM } from '@modules/recruiters-table/constans/user-form.const';
import { Recruiter } from '@shared/interfaces/recruiter.interface';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  @Input() data: Recruiter;
  @Output() action = new EventEmitter();

  userForm: FormGroup;

  readonly USER_FORM = USER_FORM

  constructor(
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      first_name: [this.data?.first_name || '', [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(25)
      ]],
      last_name: [this.data?.last_name || '', [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(25)
      ]],
      email: [this.data?.email || '', [
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ]],
      phone: [this.data?.phone || '', [Validators.required,]],
      language: [this.data?.language || '', [Validators.required,]],
      position: [this.data?.position || '', [Validators.required,]]
    });
  }

  save(): void {
    if(this.userForm.status === 'VALID') {
      this.action.emit(this.data ? { id: this.data.id, ...this.userForm.value } : { ...this.userForm.value })
    }

    this.validateAllGroupFields(this.userForm);
  }

  validateAllGroupFields(formGroup: FormGroup): void {
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);

      if (control instanceof FormControl) {
        control.markAsDirty();
        control.updateValueAndValidity();
      } else if (control instanceof FormGroup) {
        this.validateAllGroupFields(control);
      }
    });
  }

}
