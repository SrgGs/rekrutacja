import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoutesPath } from '@core/enums/route-path.enum';

const routes: Routes = [
  {
    path: '',
    redirectTo: RoutesPath.RECRUITERS,
    pathMatch: 'full'
  },
  {
    path: RoutesPath.RECRUITERS,
    loadChildren: () => import('@modules/recruiters/recruiters.module').then(m => m.RecruitersModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
