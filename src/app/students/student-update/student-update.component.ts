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
      
  updateForm:FormGroup;
  student: IStudent | undefined;

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if(id){
      this.studentService.findStudent(+id).subscribe({
        next: s => {
          this.student = s;
          this.updateForm=this.fb.group({
            nome: [s?.nome, [Validators.required]],
            cognome: [s?.cognome, [Validators.required]],
            codiceFiscale: [s?.codiceFiscale, [Validators.required,Validators.maxLength(16),Validators.minLength(16)]],
            dataDiNascita:[s?.dataDiNascita, [Validators.required]],
            indirizzo:[s?.indirizzo, [Validators.required]],
            mail:[s?.mail, [Validators.required,Validators.email]],
            telefono:[s?.telefono, [Validators.required]],
            titoloDiStudio:[s?.titoloDiStudio, [Validators.required]],
            sesso:[s?.sesso,[Validators.required] ]
          })
          },
        error: error => this.errorMessage = error
      })
    }
    
  }
  isFieldInvalid(fieldName:string):boolean|undefined{
    return (this.updateForm.get(fieldName)?.touched || this.updateForm.get(fieldName)?.dirty) && !this.updateForm.get(fieldName)?.valid;
  }

  save(): void {
    let s:IStudent={
        id:this.student?.id,
        ...this.updateForm.value
      };
    this.studentService.updateStudent(s).subscribe({
    next: data=> {
      console.log(data);
      this.onBack();
    }
  });
 }

 onBack(): void {
  this.router.navigate(['/students']);
}

}
