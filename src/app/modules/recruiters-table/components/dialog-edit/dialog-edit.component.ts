import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Recruiter } from '@shared/interfaces/recruiter.interface';

@Component({
  selector: 'app-dialog-edit',
  templateUrl: './dialog-edit.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DialogEditComponent {

  constructor(
    private dialogRef: MatDialogRef<DialogEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Recruiter,
  ) { }

  action(recruiter: Recruiter): void {
    this.dialogRef.close(recruiter)
  }

}
