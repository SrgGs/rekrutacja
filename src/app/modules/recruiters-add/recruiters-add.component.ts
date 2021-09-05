import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RoutesPath } from '@core/enums/route-path.enum';
import { Recruiter } from '@shared/interfaces/recruiter.interface';
import { RecruitersService } from '@shared/services/recruiters.service';

@Component({
  selector: 'app-recruiters-add',
  templateUrl: './recruiters-add.component.html',
  styleUrls: ['./recruiters-add.component.scss']
})
export class RecruitersAddComponent {

  constructor(
    private recruitersService: RecruitersService,
    private router: Router
  ) { }

  action(recruiter: Recruiter) {
   this.recruitersService.addId(recruiter).subscribe(() => {
    this.router.navigate([`${RoutesPath.RECRUITERS}/${RoutesPath.RECRUITERS_TABLE}`]);
   })
  }

}
