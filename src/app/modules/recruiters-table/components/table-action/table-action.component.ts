import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Recruiter } from '@shared/interfaces/recruiter.interface';
import { DialogConfirmUsComponent } from '@modules/recruiters-table/components/dialog-confirm-us/dialog-confirm-us.component';
import { MatDialog } from '@angular/material/dialog';
import { filter, switchMap, take } from 'rxjs/operators';
import { RecruitersService } from '@shared/services/recruiters.service';
import { DialogEditComponent } from '@modules/recruiters-table/components/dialog-edit/dialog-edit.component';
import { ActionTable } from '@modules/recruiters-table/interfaces/action-table.interface';

@Component({
  selector: 'app-table-action',
  templateUrl: './table-action.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TableActionComponent {

  @Input() recruiter: Recruiter
  @Output() action = new EventEmitter<ActionTable>();

  constructor(
    private dialog: MatDialog,
    private recruitersService: RecruitersService
  ) { }

  remove(recruiter: Recruiter): void {
    const dialogRef = this.dialog.open(DialogConfirmUsComponent, {
      width: '400px',
      data: {
        id: recruiter.id,
        first_name: recruiter.first_name,
        last_name: recruiter.last_name
      }
    });

    dialogRef.afterClosed().pipe(
      filter((id) => id),
      switchMap((id) => this.recruitersService.deleteId(id)),
      take(1)
    ).subscribe(() => {
      this.action.emit({result: recruiter, type: 'REMOVE'})
    });
  }

  edit(recruiter: Recruiter): void {
    const dialogRef = this.dialog.open(DialogEditComponent, {
      width: '300px',
      data: recruiter
    });

    dialogRef.afterClosed().pipe(
      filter((result) => result),
      switchMap((result) => this.recruitersService.patchId(result)),
      take(1)
    ).subscribe((result) => {
      this.action.emit({result, type: 'EDIT'})
    });
  }

}
