import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
@Input() control!: FormControl;
@Input() inputType!: string;
@Input() inputTitle!: string;
  constructor() { }

  ngOnInit(): void {
  }

  displayErrors() {
    const touched= this.control.touched;
    const dirty= this.control.touched;
    const errors= this.control.touched;
    
    return touched && dirty && errors;

  }
}
