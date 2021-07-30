import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

export class FormComponent implements OnInit {
  form= this.fb.group({
    name: this.fb.control('',[Validators.required]),
    lastName: this.fb.control('',[Validators.required]),
    phoneNumber: this.fb.control('',[Validators.required, Validators.pattern("0[0-9]{8}")]),
    email: this.fb.control('',[Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z.-]+\\.[a-z]{2,4}$")]),
    password: this.fb.control('',[Validators.required, Validators.pattern("^(?=.{6,}$)(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).*$")]),
    confirmPassword: this.fb.control('',[Validators.required]),

  });

  items = this.fb.array([ this.form]);

  constructor(private fb: FormBuilder) { 
  }

  ngOnInit(): void {
  }

  onAdd() {
  const item: FormGroup = this.items.controls[0] as FormGroup;
  this.items.push(item); 
  }
    
}
