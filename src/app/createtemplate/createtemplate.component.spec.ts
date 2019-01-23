import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatetemplateComponent } from './createtemplate.component';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { FormioModule } from 'angular-formio';
import { ApiService } from '../api.service';


describe('CreatetemplateComponent', () => {
  let component: CreatetemplateComponent;
  let fixture: ComponentFixture<CreatetemplateComponent>;

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

  it('should create', () => {
    const apiService = TestBed.get(ApiService);
    expect(apiService).toBeTruthy();
  });
});
