import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EnrollmentComponentComponent } from './enrollments/enrollment-component/enrollment-component.component';
import { studentListComponent } from './students/student-list.component';
import { HomeComponent } from './home/home.component';
import { studentService } from './students/student.service';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {  MatTableModule} from '@angular/material/table'
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import {MatButtonModule} from '@angular/material/button';
import { StudentComponent } from './students/student.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StudentReactiveComponent } from './students/student-reactive/student-reactive.component';
import { DetailsComponentComponent } from './students/details-component/details-component.component';
import { StudentUpdateComponent } from './students/student-update/student-update.component';
import { CoursesComponent } from './students/courses/courses.component';
import { courseService } from './students/courses/course-service';
import { enrollService } from './enrollments/enrollment-component/enroll-service';
import { EvaluationComponent } from './enrollments/evaluation/evaluation.component';
import { NewEnrollComponent } from './enrollments/new-enroll/new-enroll.component';
import { CourseDetailComponent } from './students/courses/course-detail/course-detail.component';
import { EnrolledComponent } from './students/courses/enrolled/enrolled.component';




@NgModule({
  declarations: [
    AppComponent,
    EnrollmentComponentComponent,
    studentListComponent,
    HomeComponent,
    StudentComponent,
    StudentReactiveComponent,
    DetailsComponentComponent,
    StudentUpdateComponent,
    CoursesComponent,
    EvaluationComponent,
    NewEnrollComponent,
    CourseDetailComponent,
    EnrolledComponent
    
  ],
   
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    FormsModule,
    ReactiveFormsModule,
    
    
  
  ],
  providers: [studentService, courseService, enrollService],
  bootstrap: [AppComponent]
})
export class AppModule { }
