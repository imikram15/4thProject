import { Component } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, NgForm , Validators, FormArray, Form} from '@angular/forms';

@Component({
  selector: 'app-tdform',
  templateUrl: './tdform.component.html',
  styleUrls: ['./tdform.component.css']
})
export class TdformComponent {
constructor(){
  console.log('tdform loaded.');}
  
  Register(regForm:any){
    let firstname = regForm.form.controls.firstname.value;
    let lastname =regForm.form.controls.lastname.value;
    let email =regForm.form.controls.email.value;
    console.log('Firstname: ',firstname);
    console.log('Lastname: ',lastname);
    console.log('Email: ',email);
    
  // console.log(regForm);
  }
}

  





