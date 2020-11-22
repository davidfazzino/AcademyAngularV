import { Icu } from '@angular/compiler/src/i18n/i18n_ast';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { courseService } from 'src/app/students/courses/course-service';
import { ICourse } from 'src/app/students/courses/ICourse';
import { enrollService } from '../enrollment-component/enroll-service';
import { IEnrollment } from '../enrollment-component/IEnrollment';

@Component({
  selector: 'app-new-enroll',
  templateUrl: './new-enroll.component.html',
  styleUrls: ['./new-enroll.component.css']
})
export class NewEnrollComponent implements OnInit {

  enrollForm:FormGroup;
  courses:ICourse[]=[];
  errorMessage:'';

  constructor(private fb: FormBuilder, private enrollService:enrollService,
    private route: ActivatedRoute, private router: Router, private courseService: courseService) { }

  ngOnInit(): void {
    this.courseService.getCourses().subscribe(
      {
        next: (courses)=>{
          this.courses=courses;
        },
        error: err=> this.errorMessage= err
      }
    );
    this.enrollForm=this.fb.group({
      idStudente: this.route.snapshot.paramMap.get('id'),
      idCorso: ['', [Validators.required]]
      
    })
  }

  isFieldInvalid(fieldName:string):boolean|undefined{
    return (this.enrollForm.get(fieldName)?.touched || this.enrollForm.get(fieldName)?.dirty) && !this.enrollForm.get(fieldName)?.valid;
  }

  save(): void {
    let s:IEnrollment={
        ...this.enrollForm.value
    };
  this.enrollService.addNew(s).subscribe({
    next: data=> {
     console.log(data);
     this.onBack();
    }  
  });
 }

 onBack(): void {
  this.router.navigate(['/enrollments']);
}
}
