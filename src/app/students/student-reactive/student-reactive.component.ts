import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IStudent } from '../IStudent';
import { Student } from '../student';
import { studentService } from '../student.service';

@Component({
  selector: 'app-student-reactive',
  templateUrl: './student-reactive.component.html',
  styleUrls: ['./student-reactive.component.css']
})
export class StudentReactiveComponent implements OnInit {

  constructor(private fb: FormBuilder, private studentService:studentService) { }
  studentForm:FormGroup;
  student=new Student();
  ngOnInit(): void {
    this.studentForm=this.fb.group({
      nome: ['', [Validators.required]],
      cognome: ['', [Validators.required]],
      codiceFiscale: ['', [Validators.required,Validators.maxLength(16),Validators.minLength(16)]],
      dataDiNascita:['', [Validators.required]],
      indirizzo:['', [Validators.required]],
      mail:['', [Validators.required,Validators.email]],
      telefono:['', [Validators.required]],
      titoloDiStudio:['', [Validators.required]],
      sesso:['',[Validators.required] ]
      
    })
  }
  save(): void {
     let s:IStudent={
         id:0,
         ...this.studentForm.value
     };
   this.studentService.addStudent(s).subscribe({
     next: data=> console.log(data)
   }
     
   );
  }
  isFieldInvalid(fieldName:string):boolean|undefined{
    return (this.studentForm.get(fieldName)?.touched || this.studentForm.get(fieldName)?.dirty) && !this.studentForm.get(fieldName)?.valid;


  }

}
