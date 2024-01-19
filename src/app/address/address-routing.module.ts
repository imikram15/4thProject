import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddressComponent } from './address.component';
import { AddresslistComponent } from './addresslist/addresslist.component';

const Addressroutes: Routes = [
  {
    path:'',
    component:AddressComponent,
    children:[
      {
        path: 'addresslist',
        component: AddresslistComponent,
      }, 
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(Addressroutes)],
  exports: [RouterModule]
})
export class AddressRoutingModule { }
