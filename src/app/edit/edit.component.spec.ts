import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { FormioModule } from 'angular-formio';
import { ActivatedRoute } from "@angular/router";
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';

import { EditComponent } from './edit.component';
import { ApiService } from '../api.service';


describe('EditComponent', () => {
  let component: EditComponent;
  let fixture: ComponentFixture<EditComponent>;
  let httpClient: HttpClient;
  const route = ({ params: of({ name: 'SAMPLETEMPLATE' }) } as any) as ActivatedRoute;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, FormioModule, HttpClientTestingModule],
      declarations: [EditComponent],
      providers: [{ provide: ActivatedRoute, useValue: route }, ApiService],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    httpClient = TestBed.get(HttpClient);
    expect(httpClient).toBeTruthy();
  });

  it('should test templatename properties', () => {
    expect(component.templateName = "SAMPLETEMPLATE").toBeTruthy();
  });

  it('should gettemplate', () => {
    const service: ApiService = TestBed.get(ApiService);
    service.getTemplate("SAMPLETEMPLATE").subscribe((data: any) => {
      expect(data.error).toBe(null);
    });
  });
});
