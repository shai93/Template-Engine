import { Injectable } from '@angular/core';

import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  /**
   * template url
   */
  API_URL = 'https://breeze.accion.rocks/template-engine-api/api/v1';

  /**
   * Create instance of ApiService
   * @param http 
   */
  constructor(private http: HttpClient) { }

  /**
   * create template
   * @param submission 
   */
  createTemplate(submission) {
    return this.http.post(this.API_URL, submission);
  }

  /**
   * update particular template
   * @param submission form data
   */
  updateTemplate(submission) {
    return this.http.put(this.API_URL, submission);
  }

  /**
   * get all templates
   */
  getTemplates() {
    return this.http.get(this.API_URL);
  }

  /**
   * get particular template based on template name
   * @param templateName 
   */
  getTemplate(templateName: any) {
    return this.http.get(this.API_URL, {
      params: { name: templateName }
    });
  }
}
