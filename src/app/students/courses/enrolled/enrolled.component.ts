import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { IStudent } from '../../IStudent';
import { studentService } from '../../student.service';

@Component({
  selector: 'app-enrolled',
  templateUrl: './enrolled.component.html',
  styleUrls: ['./enrolled.component.css']
})
export class EnrolledComponent implements OnInit, AfterViewInit {

  title="Enrolled:";
  students:IStudent[]=[];
  errorMessage = '';
  constructor(private studentService:studentService, private route: ActivatedRoute, private router: Router) {}
  //dataSource = this.students;

  dataSource = new MatTableDataSource(this.students);
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  displayedColumns: string[] = ['id', 'nome', 'cognome', 'codiceFiscale','dataDiNascita','indirizzo','mail','telefono','titoloDiStudio','sesso'];
    ngOnInit(): void {
      const id = this.route.snapshot.paramMap.get('id');
      if (id) {
        console.log(id);
        const param = +id;
        this.studentService.studentsByCourse(param).subscribe({
          next: (students)=>{
            this.students=students;
          },
          error: err=> this.errorMessage= err
        })
      }

    }

    sortData(sort: Sort) {
      const data = this.students.slice();
      if (!sort.active || sort.direction === '') {
        this.students = data;
        return;
      }
      this.students = data.sort((a, b) => {
        const isAsc = sort.direction === 'asc';
        switch (sort.active) {
          case 'id': return this.compare(a.id, b.id, isAsc);
          case 'nome': return this.compare(a.nome, b.nome, isAsc);
          case 'cognome': return this.compare(a.cognome, b.cognome, isAsc);
          case 'codiceFiscale': return this.compare(a.codiceFiscale, b.codiceFiscale, isAsc);
          case 'DataDiNascita': return this.compare(a.dataDiNascita, b.dataDiNascita, isAsc);
          default: return 0;
        }
      });
    }
    compare=function(a: number | string, b: number | string, isAsc: boolean) {
      return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
    }

    onBack(): void {
      this.router.navigate(['/courses/' + this.route.snapshot.paramMap.get('id')]);
    }
}
