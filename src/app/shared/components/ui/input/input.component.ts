import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { UserFormDetails } from '@shared/interfaces/user-form.interface';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent {

  @Input() parentFormGroup: FormGroup;
  @Input() controlName: string;
  @Input() options: UserFormDetails;

}