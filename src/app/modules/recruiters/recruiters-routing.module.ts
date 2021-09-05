import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoutesPath } from '@core/enums/route-path.enum';
import { RecruitersComponent } from '@modules/recruiters/recruiters.component';

const routes: Routes = [
  {
    path: '',
    component: RecruitersComponent
  },
  {
    path: RoutesPath.RECRUITERS_TABLE,
    loadChildren: () => import('@modules/recruiters-table/recruiters-table.module').then(m => m.RecruitersTableModule)
  },
  {
    path: RoutesPath.RECRUITERS_ADD,
    loadChildren: () => import('@modules/recruiters-add/recruiters-add.module').then(m => m.RecruitersAddModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecruitersRoutingModule { }
