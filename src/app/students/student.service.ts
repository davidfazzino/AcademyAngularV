import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IStudent } from './IStudent';
import { throwError } from 'rxjs/internal/observable/throwError';
import { catchError, tap, map } from 'rxjs/operators';
import { NgForm } from '@angular/forms';

@Injectable({
    providedIn: 'root'
  })
export class studentService{
    private studentUrl = 'http://localhost:8080/api/students';
    constructor(private http: HttpClient) {}

    getStudents(): Observable<IStudent[]> {

        
        return this.http.get<IStudent[]>(this.studentUrl)
        .pipe(
            tap(data => console.log('All: ' + JSON.stringify(data))),
            catchError(this.handleError)
          );
        
    }
    addStudent(student:IStudent):Observable<IStudent> {
      console.log("add in servizio");
      const headers = { 'content-type': 'application/json'}  
      return this.http.post<IStudent>(this.studentUrl, student,{'headers':headers});
    
      
    }
        
  private handleError(err: HttpErrorResponse): Observable<never> {
  
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
     
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }
    }