import { throwError as observableThrowError, Observable } from 'rxjs';

import { catchError, takeUntil, tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ErrorRequestModel, OptionsInterface } from './../Models/options.interface';

@Injectable()
export class RestObservableService {
  headers: HttpHeaders;
  options: OptionsInterface;

  readonly baseUrl = 'https://jsonplaceholder.typicode.com';
  readonly proxyurl = 'https://cors-anywhere.herokuapp.com/';

  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Accept: 'q=0.8;application/json;q=0.9'
    });
    this.options = { headers: this.headers };
  }

  private handleError(error:  ErrorRequestModel) {
    const {statusText, message, status}: ErrorRequestModel = error;
    const errMsg = message
      ? message
      : status
        ? `${status} - ${statusText}`
        : 'Server error';
    console.count(statusText);
    return observableThrowError(errMsg);
  }

  // GET
  getAllPosts(): Observable<any> {
    console.count('getAllPosts');
    return this.http
      .get(this.proxyurl + this.baseUrl + '/posts', this.options)
      .pipe(
        tap(val => console.table(val)),
        catchError(this.handleError)
      );
  }

  getSpecificComments(): Observable<any> {
    return this.http.get(this.baseUrl + '/posts/3/comments', this.options).pipe(
      tap(val => console.table(val)),
      catchError(this.handleError)
    );
  }

  getUsers(): Observable<any> {
    return this.http
      .get(this.baseUrl + '/users', this.options)
      .pipe(catchError(this.handleError));
  }

  getUsersPosts(): Observable<any> {
    return this.http.get(this.baseUrl + '/users/1/posts', this.options).pipe(
      tap(val => console.table(val)),
      catchError(this.handleError)
    );
  }

  // POST
  postPosts(param: any): Observable<any> {
    const body = JSON.stringify(param);
    return this.http
      .post(this.baseUrl + '/posts', body, this.options)
      .pipe(catchError(this.handleError));
  }

  // PUT
  putPosts(param: any): Observable<any> {
    const body = JSON.stringify(param);
    return this.http
      .put(this.baseUrl + '/posts/1', body, this.options)
      .pipe(catchError(this.handleError));
  }

  // PATCH
  patchPosts(param: any): Observable<any> {
    const body = JSON.stringify(param);
    return this.http
      .patch(this.baseUrl + '/posts/2', body, this.options)
      .pipe(catchError(this.handleError));
  }

  // DELETE
  deletePosts(): Observable<any> {
    return this.http
      .delete(this.baseUrl + '/posts/1', this.options)
      .pipe(catchError(this.handleError));
  }
}
