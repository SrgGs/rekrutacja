import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecruitersTableRoutingModule } from '@modules/recruiters-table/recruiters-table-routing.module';
import { MatTableModule } from '@angular/material/table';
import { CdkTableModule } from '@angular/cdk/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '@shared/shared.module';
import { MatSortModule } from '@angular/material/sort';
import { MatDialogModule } from '@angular/material/dialog';
import { TableActionComponent } from '@modules/recruiters-table/components/table-action/table-action.component';
import { DialogConfirmUsComponent } from '@modules/recruiters-table/components/dialog-confirm-us/dialog-confirm-us.component';
import { RecruitersTableComponent } from '@modules/recruiters-table/recruiters-table.component';
import { DialogEditComponent } from './components/dialog-edit/dialog-edit.component';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    RecruitersTableComponent,
    TableActionComponent,
    DialogConfirmUsComponent,
    DialogEditComponent,
  ],
  imports: [
    CommonModule,
    RecruitersTableRoutingModule,
    MatTableModule,
    CdkTableModule,
    MatPaginatorModule,
    MatDialogModule,
    ReactiveFormsModule,
    SharedModule,
    MatSortModule,
    MatButtonModule
  ]
})
export class RecruitersTableModule { }
