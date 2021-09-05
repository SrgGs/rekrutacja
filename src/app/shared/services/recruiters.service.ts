import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Recruiter } from '@shared/interfaces/recruiter.interface';
import { environment } from '@env/environment';
import { Api } from '@core/enums/api.enum';
import { PaginationParams } from '@modules/recruiters-table/interfaces/pagination-params.interface';
import { ResponseApi } from '@core/interfaces/response.interface';
import { map } from 'rxjs/operators';
import { SortParams } from '@modules/recruiters-table/interfaces/sort-params.interface';

@Injectable({
  providedIn: 'root',
})
export class RecruitersService {

  constructor(
    private http: HttpClient
  ) { }

  loadAll(paginationParams: PaginationParams, sortParams: SortParams): Observable<ResponseApi<Recruiter[]>> {
    const params = new HttpParams()
      .set('_page', paginationParams.page)
      .set('_limit', paginationParams.limit)
      .set('_sort', sortParams.active)
      .set('_order', sortParams.direction)

    return this.http.get(`${environment.backend}${Api.RECRUITERS}`, { params: params, observe: 'response' }).pipe(
      map((result) => {
        return {
          data: result.body as Recruiter[],
          totalCount: result['headers'].get('X-Total-Count') as unknown as number
        }
      })
    )
  }

  loadId(id: number): Observable<Recruiter> {
    return this.http.get<Recruiter>(`${environment.backend}${Api.RECRUITERS_ID
       .replace(':id', id.toString())
    }`);
  }

  deleteId(id: number): Observable<Recruiter> {
    return this.http.delete<Recruiter>(`${environment.backend}${Api.RECRUITERS_ID
       .replace(':id', id.toString())
    }`);
  }

  addId(data: Omit<Recruiter, 'id'>): Observable<Recruiter> {
    return this.http.post<Recruiter>(`${environment.backend}${Api.RECRUITERS}`, data);
  }

  patchId(data: Recruiter): Observable<Recruiter> {
    return this.http.patch<Recruiter>(`${environment.backend}${Api.RECRUITERS_ID
       .replace(':id', data.id.toString())
    }`, data);
  }

}
