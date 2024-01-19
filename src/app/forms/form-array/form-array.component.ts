import { Component } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, NgForm , Validators, FormArray, Form} from '@angular/forms';

@Component({
  selector: 'app-form-array',
  templateUrl: './form-array.component.html',
  styleUrls: ['./form-array.component.css']
})
export class FormArrayComponent {
  form:any;
  constructor(){  }
    ngOnInit(){
      this.form = new FormGroup({
        contactnos : new FormArray([
          new FormControl('2345434565'),
          new FormControl('3456543245'), 
         ]),
          })

          //Simple Form Array
          const array = new FormArray([
            new FormControl(),
            new FormControl()
          ])
          array.setValue(['Ikram', 'sabir']);
          console.log(array.value);
          console.log(array.status);
      
        }
    addContactNo() {
    this.form.get('contactnos').push(new FormControl());  }
    
    onsubmit(){
      console.log(this.form.get('contactnos').value);
      console.log(this.form.value);
    }  
     setpreset(){
      this.form.get('contactnos').patchValue(['23456543','5434567654']);   }
  
}
