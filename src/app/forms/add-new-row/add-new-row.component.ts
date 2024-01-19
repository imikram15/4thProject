import { Component } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, NgForm, Validators, FormArray, Form } from '@angular/forms';

@Component({
  selector: 'app-add-new-row',
  templateUrl: './add-new-row.component.html',
  styleUrls: ['./add-new-row.component.css']
})
export class AddNewRowComponent {

  testForm!: FormGroup;
  TotalRow!: number;
  constructor(private _fb: FormBuilder) {
    this.testForm = this._fb.group({
      itemRows: this._fb.array([this.initItemRow()]),
    })
   }

  ngOnInit() {
    
  }
  initItemRow(): any {
    return this._fb.group({
      Name: [''],
      Rollno: [''],
      Class: [''],
      Mobileno: ['']
    })
  }
  addNewRow() {
    const control = <FormArray>this.testForm.controls['itemRows'];
    control.push(this.initItemRow());
    console.log(this.testForm.controls['itemRows']);
  }
  get items() {
    return this.testForm.get('itemRows') as FormArray;
  }
  deleteRow(index: number) {
    const control = <FormArray>this.testForm.controls['itemRows'];
    if (control != null) {
      this.TotalRow = control.value.length;
    }
    if (this.TotalRow > 1) {
      control.removeAt(index);
    } else {
      alert('One Record is Mandatory.');
      return false;
    }
    return true;
  }

}
