import { Component } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, NgForm , Validators, FormArray, Form} from '@angular/forms';
import { formsignup } from './signupform';

@Component({
  selector: 'app-updateform',
  templateUrl: './updateform.component.html',
  styleUrls: ['./updateform.component.css']
})
export class UpdateformComponent {

  signUpForm:any;
  
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

  ngOnInit(){
    this.signUpForm.valueChanges.subscribe(
      (uname: formsignup)=>{
        console.log('First Name: ',uname.fname);
        console.log('Last Name: ',uname.lname);
        console.log('Email Id: ',uname.emailid);
        console.log('Password: ',uname.userpassword);      
      }
    )
    this.signUpForm.statusChanges.subscribe(
      (status: any)=>{
        console.log(status);
      }   )
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
  
  resetform(){
    this.signUpForm.reset(
      {
        fname: 'John',
        lname: 'Doe'
      } );
  }
  postData(){
   this.firstName= this.signUpForm.get('fname').value;
   this.lastName= this.signUpForm.get('lname').value;
   this.email= this.signUpForm.get('emailid').value;
   console.log(this.firstName , this.lastName, this.email );
  
   console.log(this.signUpForm.controls);
  }
  setdata(){
    this.signUpForm.setValue({
      'fname': 'Ikram',
      'lname': 'Sabir',
       'emailid': '123@gmail.com',
       'userpassword': '23456543'
    })
  }
  patchdata(){
    this.signUpForm.patchValue({
      'fname': 'Ikram',
      'lname': 'Sabir',
       'userpassword': '23456543'
    })
  }
}
