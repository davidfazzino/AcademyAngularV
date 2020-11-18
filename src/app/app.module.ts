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



@NgModule({
  declarations: [
    AppComponent,
    EnrollmentComponentComponent,
    studentListComponent,
    HomeComponent
    
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
    
  
  ],
  providers: [studentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
