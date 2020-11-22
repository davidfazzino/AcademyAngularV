import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { courseService } from './course-service';
import { ICourse } from './ICourse';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit, AfterViewInit {

  title="Courses";
  course:ICourse[]=[];
  errorMessage = '';
  constructor(private courseService:courseService) { }
  dataSource = new MatTableDataSource(this.course);
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  displayedColumns: string[] = ['id', 'nome', 'materia', 'maxIscritti','categoria','dataInizio','durataCorso','orarioMinimo','ente','azienda'];

  ngOnInit(): void {
    this.courseService.getCourses().subscribe({
      next: (course)=>{
        this.course=course;
      },
      error: err=> this.errorMessage= err
    })
  }

}
