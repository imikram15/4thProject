import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TdformComponent } from './tdform/tdform.component';
import { FormsComponent } from './forms.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { UpdateformComponent } from './updateform/updateform.component';
import { FormArrayComponent } from './form-array/form-array.component';
import { AddNewRowComponent } from './add-new-row/add-new-row.component';
import { RadiobuttonComponent } from './radiobutton/radiobutton.component';
import { FormAssignmentComponent } from './form-assignment/form-assignment.component';
import { SimpleFormComponent } from './simple-form/simple-form.component';

const formRoutes: Routes = [
  {
    path:'',
    component:FormsComponent,
    children:[
      {
        path: 'tdform',
        component: TdformComponent,
      },
      {
          path: 'reactiveform',
          component: ReactiveformComponent,
       },
       {
        path: 'updateform',
        component: UpdateformComponent,
       },
       {
        path: 'formarray',
        component: FormArrayComponent,
       },
       {
        path: 'addnewrow',
        component: AddNewRowComponent,
       },
       {
        path: 'radiobutton',
        component: RadiobuttonComponent,
       },
       {
        path: 'formassignment',
        component: FormAssignmentComponent,
       },
       {
        path: 'simpleform',
        component: SimpleFormComponent,
       },
      ],
    
  }
];

@NgModule({
  imports: [RouterModule.forChild(formRoutes)],
  exports: [RouterModule]
})
export class FormsRoutingModule { }
