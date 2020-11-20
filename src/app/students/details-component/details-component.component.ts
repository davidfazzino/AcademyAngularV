import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { studentService } from '../student.service';
import { IStudent } from '../IStudent';
@Component({
  selector: 'app-details-component',
  templateUrl: './details-component.component.html',
  styleUrls: ['./details-component.component.css']
})
export class DetailsComponentComponent implements OnInit {
  title: "Student details";
  errorMessage: " ";
  student: IStudent | undefined;
  constructor(private studentService: studentService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      console.log(id);
      const param = +id;
      this.getStudent(param);
    }
    console.log("non entra" + id);

  }
  delete(id: number): void {
    this.studentService.deleteStudent(id).subscribe({
      next: data => {console.log(data);
        this.onBack()},
      error: error => this.errorMessage = error
    });
    
  }
  getStudent(id: number): void {
    this.studentService.findStudent(id).subscribe({
      next: student1 => this.student = student1,
      error: error => this.errorMessage = error
    })
  };

  onBack(): void {
    this.router.navigate(['/students']);
  }
  goToForm(): void {
    this.router.navigate(['/studentIscr']);
  }




}
