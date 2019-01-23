import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  /**
   * lists of all templates
   */
  lists: any;

  /**
   * Create instance of ListComponent
   * @param apiService 
   */
  constructor(private apiService: ApiService) { }


  ngOnInit() {
    this.getTemplates();
  }

  /**
   * get all templates
   */
  getTemplates() {
    this.apiService.getTemplates().subscribe((data: any) => {
      this.lists = data.templates;
      console.log(this.lists);
    });
  }

}
