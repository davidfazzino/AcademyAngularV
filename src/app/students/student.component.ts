import { Component,OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IStudent } from './IStudent';
import { Student } from './student';
import { studentService } from './student.service';
@Component({
    selector:"app-student",
    templateUrl: "./student.component.html",
    
})
export class StudentComponent implements OnInit{
    title:"Students";
    constructor(private studentService:studentService){};
    student=new Student();
   
    ngOnInit(): void {
        
    }
    save(studentForm: NgForm): void {
        // let s:IStudent={
        //     id:0,
        //     ...studentForm.value
        // };
       this.studentService.addStudent(this.student).subscribe({
           next: data=> console.log(data)
       });
       console.log("save attivato dal bottone");
       
     
      }


}