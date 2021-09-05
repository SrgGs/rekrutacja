import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecruitersAddRoutingModule } from '@modules/recruiters-add/recruiters-add-routing.module';
import { RecruitersAddComponent } from '@modules/recruiters-add/recruiters-add.component';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  declarations: [
    RecruitersAddComponent
  ],
  imports: [
    CommonModule,
    RecruitersAddRoutingModule,
    SharedModule
  ]
})
export class RecruitersAddModule { }
