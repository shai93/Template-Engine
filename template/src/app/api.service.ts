import { Injectable } from '@angular/core';

import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  API_URL = 'http://breeze.accion.rocks/template-engine-api/api/v1';

  constructor(private http: HttpClient) { }

  createTemplate(submission) {
    return this.http.post(this.API_URL, submission);
  }

  updateTemplate(submission){
    return this.http.put(this.API_URL,submission);
  }

  getTemplates() {
    return this.http.get(this.API_URL);
  }

  getTemplate(templateName: any) {
    return this.http.get(this.API_URL, {
      params: { name: templateName }
    });
  }
}
