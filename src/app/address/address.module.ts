import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddressRoutingModule } from './address-routing.module';
import { AddresslistComponent } from './addresslist/addresslist.component';
import { RouterModule } from '@angular/router';
import { AddressComponent } from './address.component';


@NgModule({
  declarations: [
    AddresslistComponent,
    AddressComponent  
  ],
  imports: [
    CommonModule,
    AddressRoutingModule,
    RouterModule,
      
  ],
  exports:[
    RouterModule,
    AddressRoutingModule  
  ]
})
export class AddressModule {
  constructor(){
    console.log('Address Module Loaded.');
    
  }
 }
