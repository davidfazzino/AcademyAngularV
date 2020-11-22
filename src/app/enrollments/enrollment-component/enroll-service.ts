import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { IEnrollment } from './IEnrollment';
import { IValue } from './IValue';

@Injectable({
    providedIn: 'root'
  })
  export class enrollService{

    private enrollUrl = 'http://localhost:8080/api/iscrizione';
    constructor(private http: HttpClient) { }

    getEnrollments(): Observable<IEnrollment[]> {
        return this.http.get<IEnrollment[]>(this.enrollUrl)
          .pipe(
            tap(data => console.log('All: ' + JSON.stringify(data))),
            catchError(this.handleError)
          );
    }

    addNew(enrollment: IEnrollment): Observable<IEnrollment> {
        const headers = { 'content-type': 'application/json' };
        return this.http.post<IEnrollment>(this.enrollUrl, enrollment, { 'headers': headers })
          .pipe(catchError(this.handleError));
      }

    delete(id:number):Observable<IEnrollment>{
        return this.http.delete<IEnrollment>(this.enrollUrl +"/"+id)
          .pipe(catchError(this.handleError));
      }

    findOne(id:number): Observable<IEnrollment|undefined> {
        return this.http.get<IEnrollment|undefined>(this.enrollUrl+"/"+id)
          .pipe(catchError(this.handleError));
    }

    evaluate(value: IValue): Observable<IValue>{
        const headers = { 'content-type': 'application/json' };
        return this.http.patch<IValue>(this.enrollUrl, value, {'headers': headers})
            .pipe(catchError(this.handleError));
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