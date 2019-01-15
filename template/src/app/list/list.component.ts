import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  formSchema: any = {
    "_id": "5c37447cf356a430b9b4583d",
    "type": "form",
    "tags": [
      "common"
    ],
    "owner": "5c35ca94f356a430b9b45832",
    "components": [
      {
        "autofocus": false,
        "input": true,
        "tableView": true,
        "inputType": "text",
        "inputMask": "",
        "label": "Firstname",
        "key": "firstname",
        "placeholder": "",
        "prefix": "",
        "suffix": "",
        "multiple": false,
        "defaultValue": "",
        "protected": false,
        "unique": false,
        "persistent": true,
        "hidden": false,
        "clearOnHide": true,
        "spellcheck": true,
        "validate": {
          "required": false,
          "minLength": "",
          "maxLength": "",
          "pattern": "",
          "custom": "",
          "customPrivate": false
        },
        "conditional": {
          "show": "",
          "when": null,
          "eq": ""
        },
        "type": "textfield",
        "labelPosition": "left-left",
        "tags": [

        ],
        "properties": {

        },
        "lockKey": true,
        "labelWidth": 46,
        "labelMargin": 3
      },
      {
        "autofocus": false,
        "input": true,
        "tableView": true,
        "inputType": "text",
        "inputMask": "",
        "label": "LastName",
        "key": "lastName",
        "placeholder": "",
        "prefix": "",
        "suffix": "",
        "multiple": false,
        "defaultValue": "",
        "protected": false,
        "unique": false,
        "persistent": true,
        "hidden": false,
        "clearOnHide": true,
        "spellcheck": true,
        "validate": {
          "required": false,
          "minLength": "",
          "maxLength": "",
          "pattern": "",
          "custom": "",
          "customPrivate": false
        },
        "conditional": {
          "show": "",
          "when": null,
          "eq": ""
        },
        "type": "textfield",
        "labelPosition": "left-left",
        "tags": [

        ],
        "properties": {

        },
        "labelWidth": 46,
        "labelMargin": 3
      },
      {
        "autofocus": false,
        "input": true,
        "label": "Submit",
        "tableView": false,
        "key": "submit",
        "size": "md",
        "leftIcon": "",
        "rightIcon": "",
        "block": false,
        "action": "submit",
        "disableOnInvalid": false,
        "theme": "primary",
        "type": "button"
      }
    ],
    "display": "form",
    "submissionAccess": [
      {
        "roles": [
          "5c35ca80f356a430b9b45825"
        ],
        "type": "create_own"
      },
      {
        "roles": [
          "5c35ca80f356a430b9b45825"
        ],
        "type": "read_own"
      },
      {
        "roles": [
          "5c35ca80f356a430b9b45825"
        ],
        "type": "update_own"
      },
      {
        "roles": [
          "5c35ca80f356a430b9b45825"
        ],
        "type": "delete_own"
      }
    ],
    "title": "List",
    "name": "list",
    "path": "list",
    "access": [
      {
        "roles": [
          "5c35ca80f356a430b9b45824",
          "5c35ca80f356a430b9b45825",
          "5c35ca80f356a430b9b45826"
        ],
        "type": "read_all"
      }
    ],
    "created": "2019-01-10T13:11:24.538Z",
    "modified": "2019-01-10T13:36:25.398Z",
    "machineName": "list"
  };

  private lists: Array<object> = [];

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
