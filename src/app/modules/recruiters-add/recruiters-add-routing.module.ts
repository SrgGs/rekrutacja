import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecruitersAddComponent } from '@modules/recruiters-add/recruiters-add.component';

const routes: Routes = [
  {
    path: '',
    component: RecruitersAddComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecruitersAddRoutingModule { }
