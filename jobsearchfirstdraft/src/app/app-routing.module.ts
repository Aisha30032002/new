import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { WorkExperienceComponent } from './work-experience/work-experience.component';
const routes: Routes = [
  { path: 'personal', component: PersonalInfoComponent },
  { path: 'work-experience', component: WorkExperienceComponent },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
