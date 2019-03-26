import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-reg-form',
  templateUrl: './reg-form.component.html',
  styleUrls: ['./reg-form.component.css']
})
export class RegFormComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  regForm = this.formBuilder.group({
    firstName:['', Validators.required],
    lastName: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    dob: [''],
    gender: [''],
    city: ['']
  });

  ngOnInit() {

  }

  get firstName() { return this.regForm.get('firstName')};
  get lastName() { return this.regForm.get('lastName')};
  get email() { return this.regForm.get('email')};
  get dob() { return this.regForm.get('dob')};
  get gender() { return this.regForm.get('gender')};
  get city() { return this.regForm.get('city')};

  onSubmit(){
    console.warn(this.regForm.value);
  }

  cities = ['Hanoi', 'Saigon', 'Singapore', 'New York', 'Tokyo'];
}
