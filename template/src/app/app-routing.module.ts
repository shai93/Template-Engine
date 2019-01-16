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
    path:'template-engine-cp/create',
    component:CreatetemplateComponent
  },
  {
    path:'template-engine-cp/list',
    component:ListComponent
  },
  {
    path:'template-engine-cp/edit',
    component:EditComponent
  },
  {
    path:'template-engine-cp/edit/:name',
    component:EditComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
