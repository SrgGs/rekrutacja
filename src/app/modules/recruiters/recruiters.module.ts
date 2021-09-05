import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecruitersRoutingModule } from './recruiters-routing.module';
import { RecruitersComponent } from '@modules/recruiters/recruiters.component';
import { SharedModule } from '@shared/shared.module';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    RecruitersComponent,
  ],
  imports: [
    CommonModule,
    RecruitersRoutingModule,
    SharedModule,
    MatButtonModule,
  ],
})
export class RecruitersModule { }
