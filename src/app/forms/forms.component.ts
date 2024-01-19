import { Component } from '@angular/core';

@Component({
    template: `
    <div class="container-fluid">
        <div class="col-xs-12" >
         <div class="col-xs-6" style="display: flex;">
            <div class="col-xs-1">
            <button class="btn btn-primary" > <a style="color: white; text-decoration:none;" [routerLink] ="['tdform']" routerLinkActive ="active">Template driven Form </a> </button>
            </div>
            <div class="col-xs-1 " style="margin-left:5px;">
            <button class="btn btn-primary" > <a style="color: white; text-decoration:none;" [routerLink] ="['reactiveform']" routerLinkActive ="active">Reactive Form </a> </button>
            </div>
            <div class="col-xs-1 " style="margin-left:5px;">
            <button class="btn btn-primary" > <a style="color: white; text-decoration:none;" [routerLink] ="['updateform']" routerLinkActive ="active">Update Form </a> </button>
            </div>
            <div class="col-xs-1 " style="margin-left:5px;">
            <button class="btn btn-primary" > <a style="color: white; text-decoration:none;" [routerLink] ="['formarray']" routerLinkActive ="active">Nested Form Array </a> </button>
            </div>
            <div class="col-xs-1 " style="margin-left:5px;">
            <button class="btn btn-primary" > <a style="color: white; text-decoration:none;" [routerLink] ="['addnewrow']" routerLinkActive ="active">Add Row Dynamically </a> </button>
            </div>
            <div class="col-xs-1 " style="margin-left:5px;">
            <button class="btn btn-primary" > <a style="color: white; text-decoration:none;" [routerLink] ="['radiobutton']" routerLinkActive ="active">Radio Button and Checkbox </a> </button>
             </div>
        </div> <br>
        <div class="col-xs-6" style="display: flex;">
            <div class="col-xs-1 " style="margin-left:5px;">
            <button class="btn btn-primary" > <a style="color: white; text-decoration:none;" [routerLink] ="['formassignment']" routerLinkActive ="active">Assignment FormArray </a> </button>
            </div>
            <div class="col-xs-1 " style="margin-left:5px;">
            <button class="btn btn-primary" > <a style="color: white; text-decoration:none;" [routerLink] ="['simpleform']" routerLinkActive ="active">Simple Form </a> </button>
            </div>
        </div>
        </div>
    </div>
    
    <router-outlet></router-outlet> 
    `
})
export class FormsComponent {

}