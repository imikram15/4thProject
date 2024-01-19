import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { FormsRoutingModule } from './forms-routing.module';
import { TdformComponent } from './tdform/tdform.component';
import { FormsComponent } from './forms.component'
import { RouterModule } from '@angular/router';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UpdateformComponent } from './updateform/updateform.component';
import { FormArrayComponent } from './form-array/form-array.component';
import { AddNewRowComponent } from './add-new-row/add-new-row.component';
import { RadiobuttonComponent } from './radiobutton/radiobutton.component';
import { FormAssignmentComponent } from './form-assignment/form-assignment.component';
import {MatSelectModule} from '@angular/material/select';
import { SimpleFormComponent } from './simple-form/simple-form.component';

@NgModule({
  declarations: [
    TdformComponent,
    FormsComponent,
    ReactiveformComponent,
    UpdateformComponent,
    FormArrayComponent,
    AddNewRowComponent,
    RadiobuttonComponent,
    FormAssignmentComponent,
    SimpleFormComponent,
  ],
  imports: [
    CommonModule,
    FormsRoutingModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,    
  ]
})
export class angularFormsModule { 

  constructor(){
    console.log('Form Module is loaded.');
  }
  
}
