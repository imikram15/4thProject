import { Component } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, NgForm, Validators, FormArray, Form } from '@angular/forms';

@Component({
  selector: 'app-simple-form',
  templateUrl: './simple-form.component.html',
  styleUrls: ['./simple-form.component.css']
})
export class SimpleFormComponent {

  
 assignmentForm: FormGroup;
 inputForm: FormGroup;
 edit: any;
 rowindex: any;
 forUpdate: boolean = false;

 constructor(private fb: FormBuilder) {
   this.inputForm = this.fb.group({
     productName: ['', Validators.required],
     type: ['Product Type', Validators.required],
     box: ['true'],
     price: ['', Validators.required]
   })
   this.assignmentForm = this.fb.group({
     productRows: this.fb.array([])
   })
 }

 get productRows() {
     return this.assignmentForm.controls['productRows'] as FormArray
 }

 saveData() {
   if (this.rowindex == null) {

     (this.assignmentForm.get("productRows") as FormArray).push(this.fb.group({
       productName: [this.inputForm.value.productName],
       type: [this.inputForm.value.type],
       box: [this.inputForm.value.box],
       price: [this.inputForm.value.price]
     }))
     this.inputForm.get('productName')?.reset()
     this.inputForm.get('price')?.reset()
     this.inputForm.get('type')?.reset()
     
   }

   else {
     const control3 = (this.assignmentForm.get('productRows') as FormArray).at(this.rowindex) as FormGroup;

     control3.setValue({
       productName: this.inputForm.get('productName')?.value,
       type: this.inputForm.get('type')?.value,
       box: this.inputForm.get('box')?.value,
       price: this.inputForm.get('price')?.value,
     });
     this.inputForm.get('productName')?.reset()
     this.inputForm.get('price')?.reset()
     this.inputForm.get('type')?.reset()
     this.forUpdate = false;
   }
 }
 
 
 editData(index: any) {
  
   this.rowindex = index;
   this.edit = this.assignmentForm.value.productRows[this.rowindex];
   this.inputForm.setValue({
     productName: this.edit?.productName,
     type: this.edit?.type,
     box: this.edit?.box,
     price: this.edit?.price,
   });
   this.forUpdate = !this.forUpdate;
  
 }

 deleteProduct(productindex: number) {
   let text = "Are You Sure. you wanr to Delete it?";
   if (confirm(text) == true) {
     this.productRows.removeAt(productindex);
   }
   }

}
