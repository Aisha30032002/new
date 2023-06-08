import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.css']
})
export class PersonalInfoComponent implements OnInit {
  PersonalInfoFormComponent !: FormGroup
  title = 'my-first-project';
  submitted=false;
  // handleResumeUpload(files: FileList) {
  //   // Handle file upload for the resume field
  //   if (files.length > 0) {
  //     this.personalInfoForm.resume = files[0];
  //     console.log('Resume uploaded:', this.personalInfoForm.resume);
  //   }; [Validators.required, Validators.email]
  // }

  countryList=[
    {"countryname":"India"},
    {"countryname":"USA"},
    {"countryname":"UK"}
  ]
  router: any;
  http: any;


  ngOnInit() {
    this.PersonalInfoFormComponent = new FormGroup({
      'firstName': new FormControl(Validators.required),
      'middleName': new FormControl(null),
      'lastName': new FormControl(null),
      'email': new FormControl(null,[Validators.required, Validators.email]),
      'gender': new FormControl('male'),
      'phone': new FormControl(null),
      // 'resume': new FormControl(null),
      'coverLetter': new FormControl(null),
      'date': new FormControl(null),
      'month': new FormControl(null),
      'year':new FormControl(null),
      'address' : new FormGroup({
            'country':new FormControl(null),
            'street': new FormControl(null),
            'city': new FormControl(null),
            'state': new FormControl(null),
            'postalCode': new FormControl(null)
      })
    });
  }
  submitPersonalInfo() {
    
  console.log(this.PersonalInfoFormComponent);
  this.PersonalInfoFormComponent.reset
  this.submitted=true
    if (this.PersonalInfoFormComponent.invalid) {
      return;
    }
  alert("Success")
    const formData = this.PersonalInfoFormComponent.value;
     this.http.post('http://localhost:8080/api/job-applications/personal-info', formData)
       .subscribe(
         (response: any) => {
           console.log('Personal information submitted successfully:', response);
           this.router.navigate(['/work-experience']);
         },
         (error: any) => {
           console.error('Error submitting personal information:', error);
         }
       );
  }
}  