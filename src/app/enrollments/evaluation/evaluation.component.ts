import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { evalue } from './value';
import { enrollService } from '../enrollment-component/enroll-service';
import { IValue } from '../enrollment-component/IValue';

@Component({
  selector: 'app-evaluation',
  templateUrl: './evaluation.component.html',
  styleUrls: ['./evaluation.component.css']
})
export class EvaluationComponent implements OnInit {

  valueForm:FormGroup;
  value= new evalue();

  constructor(private fb: FormBuilder, private enrollService:enrollService,
    private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if(id){
      this.value.iscrizioneId=+id;
    }
    this.valueForm=this.fb.group({
      iscrizioneId: this.route.snapshot.paramMap.get('id'),
      valutazione: ['', [Validators.min(1), Validators.max(10)]],
      ritirato: ['', []]
    })
  }

  isFieldInvalid(fieldName:string):boolean|undefined{
    return (this.valueForm.get(fieldName)?.touched || this.valueForm.get(fieldName)?.dirty) && !this.valueForm.get(fieldName)?.valid;
  }

  save(): void {
    let s:IValue={
        ...this.valueForm.value
    };
  this.enrollService.evaluate(s).subscribe({
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
