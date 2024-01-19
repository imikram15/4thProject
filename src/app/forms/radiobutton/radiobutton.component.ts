import { Component } from '@angular/core';
import {  NgForm, Validators, FormArray, Form } from '@angular/forms';
import {user} from './user'
@Component({
  selector: 'app-radiobutton',
  templateUrl: './radiobutton.component.html',
  styleUrls: ['./radiobutton.component.css']
})
export class RadiobuttonComponent {

  user1 = new user()
  constructor(){}
  OnFormSubmit(form:NgForm){
    if (form.invalid) {
      return;
    }
    console.log('user name: ' + form.controls['uname'].value);
    console.log('Gender: ' + form.controls['gender'].value);
    console.log('Married ?: ' + form.controls['married'].value);
    console.log('T & C Accepted: ' + form.controls['tc'].value); 
  }
  resetForm( form:NgForm){
   this.user1 = new user();
   form.resetForm({
    married:false
   });
  }
  setDefaultValues(){
    this.user1.username="ikram";
    this.user1.gender="male";
    this.user1.isMarried=false;
    this.user1.isTCAccepted=true;
  }

}
