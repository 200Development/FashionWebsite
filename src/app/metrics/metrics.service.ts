import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { ISalesGraphModel } from './sales-graph/sales-graph-model'

@Injectable({
    providedIn: 'root'
})
export class MetricService {
    private salesUrl = 'https://localhost:44378/sales/SalesGraph';
    private httpOptions = {
        headers: new HttpHeaders({
            "Content-Type": "application/json"
        })
    }

    constructor(private http: HttpClient) {}

        getSales(): Observable<ISalesGraphModel> {
            return this.http.get<ISalesGraphModel>(this.salesUrl, this.httpOptions).pipe(
                catchError(this.handleError)
            );
        }

        private handleError(err: HttpErrorResponse) {
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