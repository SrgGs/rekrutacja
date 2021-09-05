import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecruitersTableComponent } from '@modules/recruiters-table/recruiters-table.component';

const routes: Routes = [
  {
    path: '',
    component: RecruitersTableComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecruitersTableRoutingModule { }
