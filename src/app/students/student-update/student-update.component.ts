import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IStudent } from '../IStudent';
import { Student } from '../student';
import { studentService } from '../student.service';

@Component({
  selector: 'app-student-update',
  templateUrl: './student-update.component.html',
  styleUrls: ['./student-update.component.css']
})
export class StudentUpdateComponent implements OnInit {
  errorMessage: '';

  constructor(private fb: FormBuilder, private studentService:studentService,
      private route: ActivatedRoute, private router: Router) { }
      
  studentForm:FormGroup;
  student: IStudent | undefined;

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if(id){
      this.studentService.findStudent(+id).subscribe({
        next: student1 => this.student = student1,
        error: error => this.errorMessage = error
      })
    }
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

}
