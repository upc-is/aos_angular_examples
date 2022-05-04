import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { User } from '../model/user';
import { catchError, Observable, retry, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  basePath: string = 'http://localhost:3000/api/v1/auth';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  currentUser!: User;

  constructor(private http: HttpClient) {
  }

  // API Error Handling
  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // Default error handling
      console.log(`An error occurred: ${error.error.message} `);
    } else {
      // Unsuccessful Response Error Code returned from Backend
      console.error(
        `Backend returned code ${error.status}, body was: ${error.error}`
      );
    }
    // Return Observable with Error Message to Client
    return throwError(
      () => new Error('Something happened with request, please try again later')
    );
  }

  // Sign-Up
  signUp(user: User): Observable<any> {
    return this.http
      .post(`${this.basePath}/sign-up`, user)
      .pipe(retry(2), catchError(this.handleError));
  }

  // Sign-in
  signIn(user: User) {
    return this.http
      .post(`${this.basePath}/sign-in`, user)
      .pipe(retry(2), catchError(this.handleError));
  }

  // Get Token
  getToken() {
    return localStorage.getItem('accessToken');
  }

  setToken(accessToken: string) {
    localStorage.setItem('accessToken', accessToken);
  }

  get isSignedIn(): boolean {
    let accessToken = localStorage.getItem('accessToken');
    return accessToken != null;
  }

  signOut() {
    localStorage.removeItem('accessToken');
  }
}
