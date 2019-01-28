import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatetemplateComponent } from './createtemplate.component';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { FormioModule } from 'angular-formio';
import { ApiService } from '../api.service';


describe('CreatetemplateComponent', () => {
  let component: CreatetemplateComponent;
  let fixture: ComponentFixture<CreatetemplateComponent>;
  let submission: {
    "template_type": "handlebars",
    "template": "hello {{fname}} {{lname}}! Welcome to Breeze!",
    "name": "1abc1234",
    "description": "Test new template for testing template engine new",
    "updated_by": "pooja-salot",
    "active": 1
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormioModule, HttpClientTestingModule],
      declarations: [CreatetemplateComponent],
      providers: [ApiService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatetemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('submit form data', () => {
    // component.onSubmit(submission);
  })

  it('should create', () => {
    const apiService = TestBed.get(ApiService);
    expect(apiService).toBeTruthy();
  });

  // it('should submit form', () => {
  //   expect(component.onSubmit(submission)).toBeUndefined();
  // });
});
