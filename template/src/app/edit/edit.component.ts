import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { ApiService } from '../api.service';



@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  /**
   * template name
   */
  templateName: any;
  /**
   * single template
   */
  template: any;

  /**
   * Create instance of EditComponent
   * @param route 
   * @param apiService 
   */
  constructor(private route: ActivatedRoute, private apiService: ApiService) {
    this.route.params.subscribe(params =>
      this.templateName = params['name']
    );
  }


  ngOnInit() {
    this.getTemplate();
  }

  /**
   * get partocular template
   */
  getTemplate() {
    this.apiService.getTemplate(this.templateName).subscribe((data: any) => {
      this.template = { data: data.templates[0] };
      console.log(this.template);
    });
  }

  /**
   * submit form data
   * @param submission 
   */
  onSubmit(submission: any) {
    console.log("form data", submission.data);
    this.apiService.updateTemplate(submission.data).subscribe((response) => {
      console.log(response);
    });
  }

}
