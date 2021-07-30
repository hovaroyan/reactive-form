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
    const{touched,dirty,errors}= this.control;

    return touched && dirty && errors;

  }
}
