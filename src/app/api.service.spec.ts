import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './api.service';

describe('ApiService', () => {

  let submission = {
    "name": "DummyTemplate",
    "description": "Description",
    "template_type": "handlebars",
    "template": "<p>Template Content<\/p>\n",
    "updated_by": "Breeze",
    "active": "1",
  };

  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientTestingModule,
      HttpClientModule
    ],
    providers: [ApiService]
  }));

  it('should be created', () => {
    const service: ApiService = TestBed.get(ApiService);
    expect(service).toBeTruthy();
  });


  it('should  get templates', () => {
    const service: ApiService = TestBed.get(ApiService);
    service.getTemplates().subscribe((data: any) => {
      expect(data.error).toBe(false);
    });
  });

  it('should  get template', () => {
    const service: ApiService = TestBed.get(ApiService);
    service.getTemplate('SAMPLETEMPLATE').subscribe((data: any) => {
      expect(data.error).toBe(false);
    });
  });

  it('should  create template', () => {
    const service: ApiService = TestBed.get(ApiService);
    service.createTemplate(submission).subscribe((data: any) => {
      expect(data.error).toBe(null);
    });
  });

  it('should  update agent', () => {
    const service: ApiService = TestBed.get(ApiService);
    service.updateTemplate(submission).subscribe((data: any) => {
      expect(data.error).toBe(null);
    });
  });

});
