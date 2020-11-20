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



@NgModule({
  declarations: [
    AppComponent,
    EnrollmentComponentComponent,
    studentListComponent,
    HomeComponent,
    StudentComponent,
    StudentReactiveComponent,
    DetailsComponentComponent,
    StudentUpdateComponent
    
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
    ReactiveFormsModule
    
  
  ],
  providers: [studentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
