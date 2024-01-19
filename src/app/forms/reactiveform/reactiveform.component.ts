import { Component } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, NgForm , Validators, FormArray, Form} from '@angular/forms';

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent {

  signUpForm:FormGroup;
  
  firstName:string ="";
  lastName:string ="";
  email: string ="";
  password:string = "";

  constructor(private frmBuilder: FormBuilder){
    this.signUpForm = frmBuilder.group({
      fname: new FormControl('',  [Validators.required]),
        lname: new FormControl('',  [Validators.required]),
        emailid: new FormControl('',  [Validators.required, Validators.email]),
        userpassword:new FormControl('',[Validators.required]),
    });
  }

  get user(){
    return this.signUpForm.get('fname')
  }
  get email1(){
    return this.signUpForm.get('emailid')
  }
  get password1(){
    return this.signUpForm.get('userpassword')
  }

  postData(signUpForm:any){
   this.firstName= signUpForm.controls.fname.value;
   this.lastName= signUpForm.controls.lname.value;
   this.email = signUpForm.controls.emailid.value;
  console.log(this.firstName , this.lastName, this.email );
  
   console.log(signUpForm.controls);
  }

}
