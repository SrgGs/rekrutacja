import { DataSource } from '@angular/cdk/collections';
import { Observable, of } from 'rxjs';
import { Recruiter } from '@shared/interfaces/recruiter.interface';

export class RecruitersDataSource extends DataSource<Recruiter> {

  constructor(
    private recruiter:Recruiter[]
  ) {
    super()
  }

  connect(): Observable<Recruiter[]> {
    return of(this.recruiter)
  }

  disconnect() {}
}