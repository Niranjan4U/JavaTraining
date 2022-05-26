import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApplicantDetails } from './applicant/ApplicantDetails';


@Injectable({
  providedIn: 'root'
})
export class ApplicantDetailsService {

  constructor(private myHttp: HttpClient) { }
  
     loadAllApplicantDetailsService() : Observable<ApplicantDetails[]> {
       return this.myHttp.get<ApplicantDetails[]>("http://localhost:8080/applicants/")
    }
  
    loadApplicantDetailsByIdService(x:number) : Observable<ApplicantDetails>  {
      return this.myHttp.get<ApplicantDetails>("http://localhost:8080/applicants/"+x);
    }

    updateSingleApplicantService(applicant:ApplicantDetails) : Observable<string> { // localhost:4200
      console.log('updateSingleApplicantService() invoked.....');
      return this.myHttp.put<string>("http://localhost:8080/applicants/updateAppl",applicant,{responseType: 'text' as 'json'});
    }
}
