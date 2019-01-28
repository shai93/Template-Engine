import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-createtemplate',
  templateUrl: './createtemplate.component.html',
  styleUrls: ['./createtemplate.component.scss']
})
export class CreatetemplateComponent implements OnInit {

  /**
   * creates instance of CreatetemplateComponent
   * @param apiService 
   */
  constructor(private apiService: ApiService) { }

  ngOnInit() {
  }

  /**
   * submit form data
   * @param submission 
   */
  onSubmit(submission: any) {
    this.apiService.createTemplate(submission).subscribe((response) => {
    });
  }

}
