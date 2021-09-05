import { Component, OnDestroy, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Sort } from '@angular/material/sort';
import { PaginationParams } from '@modules/recruiters-table/interfaces/pagination-params.interface';
import { Recruiter } from '@shared/interfaces/recruiter.interface';
import { SortParams } from '@modules/recruiters-table/interfaces/sort-params.interface';
import { RecruitersService } from '@shared/services/recruiters.service';
import { RecruitersDataSource } from '@modules/recruiters-table/store/recruitersDataSource';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ActionTable } from '@modules/recruiters-table/interfaces/action-table.interface';

@Component({
  selector: 'app-recruiters-table',
  templateUrl: './recruiters-table.component.html',
  styleUrls: ['./recruiters-table.component.scss']
})
export class RecruitersTableComponent implements OnInit, OnDestroy {

  dataSource: RecruitersDataSource;
  recruiter: Recruiter[];
  totalCount: number;
  sortParams: SortParams = { active: 'first_name', direction: 'asc' };
  paginationParams: PaginationParams = { page: 1, limit: 10 }
  displayedColumns: string[] = ['first_name', 'last_name', 'email', 'phone', 'language', 'position', 'action'];

  private onDestroy$ = new Subject();

  constructor(
    private recruitersService: RecruitersService,
  ) {}

  ngOnInit(): void {
    this.loadAll();
  }

  pagination(event: PageEvent): void {
    this.paginationParams = { page: event.pageIndex + 1, limit: event.pageSize };
    this.loadAll();
  }

  sort(event: Sort): void {
    this.sortParams = event;
    this.loadAll();
  }

  action(recruiter: ActionTable) {
    if(recruiter.type === 'EDIT') {
      this.recruiter = this.recruiter.map(result => (result.id === recruiter.result.id) ? recruiter.result : result);
    }

    if(recruiter.type === 'REMOVE') {
      this.recruiter = this.recruiter.filter(result => result.id !== recruiter.result.id);
      this.totalCount = this.totalCount - 1;
    }

    this.dataSource = new RecruitersDataSource(this.recruiter);
  }

  private loadAll(): void {
    this.recruitersService.loadAll(this.paginationParams, this.sortParams)
    .pipe(
      takeUntil(this.onDestroy$)
    )
    .subscribe((result) => {
      this.recruiter = result.data;
      this.totalCount = result.totalCount;
      this.dataSource = new RecruitersDataSource(result.data);
    })
  }

  ngOnDestroy(): void {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }

}
