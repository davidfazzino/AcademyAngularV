import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { ICourse } from './ICourse';

@Injectable({
    providedIn: 'root'
  })
export class courseService{
    private courseUrl = 'http://localhost:8080/api/corso';
    constructor(private http: HttpClient) { }

    findCourse(id:number): Observable<ICourse|undefined> {
      return this.http.get<ICourse|undefined>(this.courseUrl+"/"+id)
        .pipe(catchError(this.handleError));
    }

    getCourses(): Observable<ICourse[]> {
        return this.http.get<ICourse[]>(this.courseUrl)
          .pipe(
            tap(data => console.log('All: ' + JSON.stringify(data))),
            catchError(this.handleError)
          );
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