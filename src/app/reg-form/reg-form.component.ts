import { Component, OnInit } from '@angular/core';
import {FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-reg-form',
  templateUrl: './reg-form.component.html',
  styleUrls: ['./reg-form.component.css']
})
export class RegFormComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  regForm = this.formBuilder.group({
    firstName:[''],
    lastName: [''],
    email: [''],
    dob: [''],
    gender: [''],
    city: ['']
  });

  ngOnInit() {
  }

  onSubmit(){
    console.warn(this.regForm.value);
  }

  cities = ['Hanoi', 'Saigon', 'Singapore', 'New York', 'Tokyo'];
}
