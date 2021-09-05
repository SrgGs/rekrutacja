import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from '@shared/components/ui/input/input.component';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { FormComponent } from '@shared/components/form/form.component';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    InputComponent,
    FormComponent
  ],
  imports: [
    CommonModule,
    MatInputModule,
    ReactiveFormsModule,
    MatButtonModule
  ],
  exports: [
    InputComponent,
    FormComponent
  ]
})
export class SharedModule { }
