import { Component, ModuleWithComponentFactories, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { courseService } from '../course-service';
import { ICourse } from '../ICourse';
import { IModule } from '../IModule';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css']
})
export class CourseDetailComponent implements OnInit {

  title: "Course details";
  errorMessage: "";
  course: ICourse | undefined;
  displayedColumns: string[] = ['id', 'nome', 'idProfessor', 'descrizione', 'numeroOre', 'aulaPreferita'];
  moduli: IModule[]|undefined;
  dataSource = new MatTableDataSource<IModule>();
  constructor(private courseService: courseService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      console.log(id);
      const param = +id;
      this.getCourse(param);
    }
  }

  getCourse(id: number): void {
    this.courseService.findCourse(id).subscribe({
      next: c => {
        this.course = c;
        if(c?.listaModuli){
          this.moduli = c?.listaModuli;
          this.dataSource = new MatTableDataSource(this.moduli);
        }
      },
      error: error => this.errorMessage = error
    })
  };

  onBack(): void {
    this.router.navigate(['/courses']);
  }

}
