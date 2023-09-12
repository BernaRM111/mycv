import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WorkExperienceService {

  constructor(private http: HttpClient) { }

  apiURL = 'http://localhost:8080/work-experience';

  //Http Options
  httpOptions = {
	  headers: new HttpHeaders({
		  'Content-Type' : 'application/json'
	  })
  }

  getWork(): Observable<any> {
  return this.http.get<any>(this.apiURL, this.httpOptions)
  .pipe(
	  retry(1),
	  catchError(this.handleError)
  )
  }

  handleError(error: any){
  let errorMessage = '';
  if (error.error instanceof ErrorEvent){
  	errorMessage = error.error.message;
  }else {
	  errorMessage = `Error code: ${error.status} \n Message: ${error.message}`
  }
  window.alert(errorMessage);
  return throwError(errorMessage);
  }

}
