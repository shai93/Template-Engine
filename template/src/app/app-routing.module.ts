import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreatetemplateComponent } from './createtemplate/createtemplate.component';
import {ListComponent} from './list/list.component';
import {EditComponent} from './edit/edit.component';
const routes: Routes = [
  {
    path:'',
    component:CreatetemplateComponent
  },
  {
    path:'create',
    component:CreatetemplateComponent
  },
  {
    path:'list',
    component:ListComponent
  },
  {
    path:'edit',
    component:EditComponent
  },
  {
    path:'edit/:name',
    component:EditComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
