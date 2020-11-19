import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EnrollmentComponentComponent } from './enrollments/enrollment-component/enrollment-component.component';
import { HomeComponent } from './home/home.component';
import { studentListComponent } from './students/student-list.component';
import { StudentComponent } from './students/student.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot([
    { path: 'home', component: HomeComponent },
    { path: 'students', component:  studentListComponent },
    { path: 'enrollments', component:  EnrollmentComponentComponent },
    { path: 'studentIscr', component:  StudentComponent }
  
  ])],
  exports: [RouterModule]
})
export class AppRoutingModule { }
