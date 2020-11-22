import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EnrollmentComponentComponent } from './enrollments/enrollment-component/enrollment-component.component';
import { EvaluationComponent } from './enrollments/evaluation/evaluation.component';
import { NewEnrollComponent } from './enrollments/new-enroll/new-enroll.component';
import { HomeComponent } from './home/home.component';
import { CourseDetailComponent } from './students/courses/course-detail/course-detail.component';
import { CoursesComponent } from './students/courses/courses.component';
import { EnrolledComponent } from './students/courses/enrolled/enrolled.component';
import { DetailsComponentComponent } from './students/details-component/details-component.component';
import { studentListComponent } from './students/student-list.component';
import { StudentReactiveComponent } from './students/student-reactive/student-reactive.component';
import { StudentUpdateComponent } from './students/student-update/student-update.component';
import { StudentComponent } from './students/student.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot([
    { path: 'home', component: HomeComponent },
    { path: 'students', component:  studentListComponent },
    { path: 'enrollments', component:  EnrollmentComponentComponent },
    { path: 'studentIscr', component: StudentReactiveComponent },
    { path: 'students/:id', component: DetailsComponentComponent },
    { path: 'studentUpdate/:id', component: StudentUpdateComponent },
    { path: 'courses', component: CoursesComponent },
    { path: 'evaluation/:id', component: EvaluationComponent },
    { path: 'enroll/:id', component: NewEnrollComponent },
    { path: 'courses/:id', component: CourseDetailComponent },
    { path: 'enrolled/:id', component: EnrolledComponent }

  ])],
  exports: [RouterModule]
})
export class AppRoutingModule { }
