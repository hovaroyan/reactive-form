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
    const dirty= this.control.dirty;
    const errors= this.control.errors;
    return touched && dirty && errors || !touched ;

  }
}
