import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {filter, map} from 'rxjs/operators';

@Component({
  selector: 'app-rx-js',
  templateUrl: './rx-js.component.html',
  styleUrls: ['./rx-js.component.css']
})
export class RxJsComponent {

  form: FormGroup;

  comment = new FormControl('', Validators.required);
  name = new FormControl('', Validators.required);
  email = new FormControl('', [Validators.required, Validators.pattern("[^ @]*@[^ @]*")]);

  constructor(fb: FormBuilder) {
    this.form = fb.group({
      "comment": this.comment,
      "name": this.name,
      "email": this.email
    });

    this.form.valueChanges
      .pipe(
        filter(() => this.form.valid),
        map( data => {data.comment = data.comment.replace(/<(?:.|\n)*?>/gm, '');
        return data} ),
        map(data => {
          data.lastUpdateTS = new Date();
          return data
        })
      )
      .subscribe(data => console.log(JSON.stringify(data)))
  }



  onSubmit() {
    console.log("Form submitted!" + JSON.stringify(this.form.value));
  }
}
