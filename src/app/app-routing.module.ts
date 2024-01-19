import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { CompanyComponent } from './company/company.component';
import { PersonComponent } from './person/person.component';
import { pageNotFoundComponent } from './Pagenotfound';
import { AddressModule } from './address/address.module';
import { FormsModule } from '@angular/forms';
import { AddressComponent } from './address/address.component';
// import { CustomPreloading } from './custompreloading';

const routes: Routes = [
 
  {path:'company', component:CompanyComponent},
  {path:'person', component:PersonComponent},
  {
    path:'forms',
    loadChildren: ()=>import('./forms/forms.module').then(m=> m.angularFormsModule),
    data:{preload:true},
  },
  {
    path:'address',
    loadChildren: ()=>import('./address/address.module').then(m=> m.AddressModule)
  },
  {path:'**', component:pageNotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes, 
    {
      // preloadingStrategy: CustomPreloading
    } )],
  exports: [RouterModule],
  // providers:[CustomPreloading]
})
export class AppRoutingModule { }
