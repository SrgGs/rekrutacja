import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Recruiter } from '@shared/interfaces/recruiter.interface';

@Component({
  selector: 'app-dialog-confirm-us',
  templateUrl: './dialog-confirm-us.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DialogConfirmUsComponent {

  constructor(
    public dialogRef: MatDialogRef<DialogConfirmUsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Pick<Recruiter, 'id' | 'first_name' | 'last_name'>
  ) { }

  cancel(): void {
    this.dialogRef.close();
  }

}
