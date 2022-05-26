import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApplicantDetailsService } from '../applicant-details.service';
import { ApplicantDetails } from '../applicant/ApplicantDetails';




@Component({
  selector: 'app-applicant-details',
  templateUrl: './applicant-details.component.html',
  styleUrls: ['./applicant-details.component.css']
})
export class ApplicantDetailsComponent implements OnInit {
 
  applicantDetails: ApplicantDetails= new ApplicantDetails();
  applicantList: ApplicantDetails[]=[]; //referred by html code to print

   constructor(private ads: ApplicantDetailsService) { }
   
   ngOnInit(): void {}
  
   anyNumber!: number;
  
  loadSingleApplicantDetails(x : number) {
    this.ads.loadApplicantDetailsByIdService(x).subscribe(
        (data) => {
          this.applicantDetails = data;
        },
        (err) => {
          console.log(err);
        }
    );
  }


  viewall()
  {
    this.ads.loadAllApplicantDetailsService().subscribe(
      
      (data) => {
        console.log('ngOnInit() loading the departments...');
        this.applicantList = data;
      },
      (err) => {
        console.log(err);
      }
    );
  
  }


message!:string;
editStatus(applObj:ApplicantDetails) {
  this.ads.updateSingleApplicantService(applObj).subscribe({
  
    next:(data:string) => {
      console.log('~~next : Applicant is updated');
      this.message=data;
      //console.log(this.message);
    },
    
    error:(err) => {
      //this.message=err.error;
      console.log(err);
      
      alert(err);
      this.message=err.error;
      console.log(err);
    },
    complete:()=>{
    console.log('~~~Completed');
    }
});
this.viewall()

}

}
    // authenticate(){
    //   this.router.navigate(['/logout']);
    // }


   // goToAddDetails(){
  //   this.router.navigate(['/add-details']);
  // }
  // goToHome(){
  //   this.router.navigate(['/home']);
  // }
  // logout(){
  //   this.router.navigate(['/logout']);
  // }

