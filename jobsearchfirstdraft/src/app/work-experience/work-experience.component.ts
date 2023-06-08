import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.css']
})
export class WorkExperienceComponent implements OnInit {
  workExperienceForm!: FormGroup;
  
  constructor(private formBuilder: FormBuilder, private http: HttpClient) { }

  ngOnInit() {
    this.workExperienceForm = this.formBuilder.group({
      company: ['', Validators.required],
      position: ['', Validators.required],
      // Other work experience fields
    });
  }

  submitWorkExperience() {
    if (this.workExperienceForm.invalid) {
      return;
    }

    const formData = this.workExperienceForm.value;
    this.http.post('/api/job-applications/work-experience', formData)
      .subscribe(
        (response) => {
          console.log('Work experience submitted successfully:', response);
          // Reset the form
          this.workExperienceForm.reset();
        },
        (error) => {
          console.error('Error submitting work experience:', error);
        }
      );
  }
}
