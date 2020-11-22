import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { enrollService } from './enroll-service';
import { IEnrollment } from './IEnrollment';


@Component({
  selector: 'app-enrollment-component',
  templateUrl: './enrollment-component.component.html',
  styleUrls: ['./enrollment-component.component.css']
})
export class EnrollmentComponentComponent implements OnInit, AfterViewInit {

  title="Enrollments";
  enrollment:IEnrollment[]=[];
  errorMessage = '';
  constructor(private enrollService: enrollService) { }

  dataSource = new MatTableDataSource(this.enrollment);
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  ngOnInit(): void {
    this.enrollService.getEnrollments().subscribe({
      next: (en)=>{
        this.enrollment=en;
      },
      error: err=> this.errorMessage= err
    })
  }
 
  displayedColumns: string[] = ['id', 'studentId', 'courseId', 'data', 'valutazione', 'ritirato', 'var'];

}
