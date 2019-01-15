import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { ApiService } from '../api.service';



@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  formSchema: any= {
    "_id": "5c371e03f356a430b9b4583a",
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
        "label": "Template Type",
        "key": "template_type",
        "placeholder": "",
        "prefix": "",
        "suffix": "",
        "multiple": false,
        "defaultValue": "handlebars",
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
        "labelMargin": 3,
        "disabled": true
      },
      {
        "autofocus": false,
        "input": true,
        "tableView": true,
        "label": "Template",
        "key": "template",
        "placeholder": "",
        "prefix": "",
        "suffix": "",
        "rows": 3,
        "multiple": false,
        "defaultValue": "",
        "protected": false,
        "persistent": true,
        "hidden": false,
        "wysiwyg": {
          "toolbarGroups": [
            {
              "name": "basicstyles",
              "groups": [
                "basicstyles",
                "cleanup"
              ]
            },
            {
              "name": "paragraph",
              "groups": [
                "list",
                "indent",
                "blocks",
                "align",
                "bidi",
                "paragraph",
                "-",
                "JustifyLeft",
                "JustifyCenter",
                "JustifyRight",
                "JustifyBlock"
              ]
            },
            {
              "name": "links",
              "groups": [
                "links"
              ]
            },
            {
              "name": "insert",
              "groups": [
                "insert"
              ]
            },
            "\/",
            {
              "name": "styles",
              "groups": [
                "Styles",
                "Format",
                "Font",
                "FontSize"
              ]
            },
            {
              "name": "colors",
              "groups": [
                "colors"
              ]
            },
            {
              "name": "clipboard",
              "groups": [
                "clipboard",
                "undo"
              ]
            },
            {
              "name": "editing",
              "groups": [
                "find",
                "selection",
                "spellchecker",
                "editing"
              ]
            },
            {
              "name": "document",
              "groups": [
                "mode",
                "document",
                "doctools"
              ]
            },
            {
              "name": "others",
              "groups": [
                "others"
              ]
            },
            {
              "name": "tools",
              "groups": [
                "tools"
              ]
            }
          ],
          "extraPlugins": "justify,font",
          "removeButtons": "Cut,Copy,Paste,Underline,Subscript,Superscript,Scayt,About",
          "uiColor": "#eeeeee",
          "height": "400px",
          "width": "100%",
          "disableNativeSpellChecker": false
        },
        "clearOnHide": true,
        "spellcheck": true,
        "validate": {
          "required": false,
          "minLength": "",
          "maxLength": "",
          "pattern": "",
          "custom": ""
        },
        "type": "textarea",
        "labelPosition": "left-left",
        "tags": [
          
        ],
        "conditional": {
          "show": "",
          "when": null,
          "eq": ""
        },
        "properties": {
          
        },
        "labelWidth": 46,
        "labelMargin": 3,
        "hideLabel": false
      },
      {
        "autofocus": false,
        "input": true,
        "tableView": true,
        "inputType": "text",
        "inputMask": "",
        "label": "Name",
        "key": "name",
        "placeholder": "",
        "prefix": "",
        "suffix": "",
        "multiple": false,
        "defaultValue": "",
        "protected": false,
        "unique": true,
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
        "label": "Description",
        "key": "description",
        "placeholder": "",
        "prefix": "",
        "suffix": "",
        "rows": 3,
        "multiple": false,
        "defaultValue": "",
        "protected": false,
        "persistent": true,
        "hidden": false,
        "wysiwyg": false,
        "clearOnHide": true,
        "spellcheck": true,
        "validate": {
          "required": false,
          "minLength": "",
          "maxLength": "",
          "pattern": "",
          "custom": ""
        },
        "type": "textarea",
        "labelPosition": "left-left",
        "tags": [
          
        ],
        "conditional": {
          "show": "",
          "when": null,
          "eq": ""
        },
        "properties": {
          
        },
        "labelWidth": 46,
        "labelMargin": 3
      },
      {
        "autofocus": false,
        "input": true,
        "tableView": true,
        "inputType": "text",
        "inputMask": "",
        "label": "Updated by",
        "key": "updated_by",
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
        "labelMargin": 3,
        "isNew": false
      },
      {
        "autofocus": false,
        "input": true,
        "tableView": true,
        "inputType": "text",
        "inputMask": "",
        "label": "Active",
        "key": "active",
        "placeholder": "",
        "prefix": "",
        "suffix": "",
        "multiple": false,
        "defaultValue": "1",
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
        "labelMargin": 3,
        "disabled": true
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
    "title": "Create Template Engine",
    "name": "createTemplateEngine",
    "path": "createtemplatengine",
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
    "created": "2019-01-10T10:27:15.159Z",
    "modified": "2019-01-10T11:51:50.813Z",
    "machineName": "createTemplateEngine"
  };

  templateName:any;
  template:any;

  constructor(private route: ActivatedRoute, private apiService: ApiService) {
    this.route.params.subscribe(params => 
      this.templateName = params['name']
      );
  }


  ngOnInit() {
    this.getTemplate();
  }

  getTemplate() {
    this.apiService.getTemplate(this.templateName).subscribe((data: any) => {
      this.template = {data:data.templates[0]};
      console.log(this.template);
    });
  }

  onSubmit(submission: any) {
    console.log("form data", submission);
    this.apiService.updateTemplate(submission.data).subscribe((response) => {
      console.log(response);
    });
  }

}
