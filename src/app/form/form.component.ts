import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

export class FormComponent implements OnInit {

  counter = 1;
  index: number = 0;

  items= this.fb.array([ this.fb.group({
    name: this.fb.control('',[Validators.required, Validators.minLength(5)]),
    lastName: this.fb.control('',[Validators.required, Validators.minLength(5)]),
    phoneNumber: this.fb.control('',[Validators.required, Validators.pattern("0[0-9]{8}")]),
    email: this.fb.control('',[Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z.-]+\\.[a-z]{2,4}$")]),
    password: this.fb.control('',[Validators.required, Validators.pattern("^(?=.{6,}$)(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).*$")]),
    confirmPassword: this.fb.control('',[Validators.required]),

  })]);
  

  constructor(private fb: FormBuilder) { 

  }

  ngOnInit(): void {
  }


confirmPasswordCheck() {
  const password = this.items.controls[this.index]?.get('password')?.value;
  const confirmPassword = this.items.controls[this.index]?.get('confirmPassword')?.value;
  return confirmPassword === password;
}

handleDelete(i:number) {
  this.index = i;
  if(i>0){
    this.items.removeAt(i)
  }
}

handleAdd() {
this.counter +=1;
const newForm= this.fb.group({
  name: this.fb.control('',[Validators.required,Validators.minLength(5)]),
  lastName: this.fb.control('',[Validators.required,Validators.minLength(5)]),
  phoneNumber: this.fb.control('',[Validators.required, Validators.pattern("0[0-9]{8}")]),
  email: this.fb.control('',[Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z.-]+\\.[a-z]{2,4}$")]),
  password: this.fb.control('',[Validators.required, Validators.pattern("^(?=.{6,}$)(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).*$")]),
  confirmPassword: this.fb.control('',[Validators.required]),

});

this.items.push(newForm)

} 

handleSubmit() {
  console.log(this.items.value);
  
}

}
