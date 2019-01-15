import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  lists:any;

  constructor(private apiService: ApiService) { }


  ngOnInit() {
    this.getTemplates();
  }

  getTemplates() {
    this.apiService.getTemplates().subscribe((data: any) => {
      this.lists = data.templates;
      console.log(this.lists);
    });
  }

}
