import { Component, OnInit, ViewChild } from '@angular/core';
import { IStudent } from './IStudent';
import { studentService } from './student.service';
import {MatPaginator} from '@angular/material/paginator';
import { AfterViewInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort, Sort } from '@angular/material/sort';

@Component({
    selector:'app-student',
      templateUrl: './student-list.component.html',
      styleUrls: ['./student-list.component.css']
    })
    export class studentListComponent implements OnInit,AfterViewInit {
    students:IStudent[]=[];
    errorMessage = '';
    constructor(private studentService:studentService) {}
    //dataSource = this.students;

    dataSource = new MatTableDataSource(this.students);
    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;

    ngAfterViewInit() {
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
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
   

    displayedColumns: string[] = ['id', 'nome', 'cognome', 'codiceFiscale','dataDiNascita','indirizzo','mail','telefono','titoloDiStudio','sesso'];
    ngOnInit(): void {
      this.studentService.getStudents().subscribe({
        next: (students)=>{
          this.students=students;
        },
        error: err=> this.errorMessage= err
      })

    }
    
    

  }
    
  
  