import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { IStudent } from './IStudent';
import { studentService } from './student.service';

@Component({
    selector:'app-student',
      templateUrl: './student-list.component.html',
      styleUrls: ['./student-list.component.css']
    })
  
  
  export class studentListComponent implements OnInit {
    students:IStudent[]=[];
    errorMessage = '';
    constructor(private studentService:studentService) {}
    ngOnInit(): void {
      this.studentService.getStudents().subscribe({
        next: (students)=>{
          this.students=students;
        },
        error: err=> this.errorMessage= err
      })
  console.log("Entrato");
      
    }
  
  }
  