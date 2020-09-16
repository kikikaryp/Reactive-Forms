import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-basic-form',
  templateUrl: './basic-form.component.html',
  styleUrls: ['./basic-form.component.scss']
})
export class BasicFormComponent implements OnInit {
  form: FormGroup;
  programmingLanguages = ['TS', 'JS', 'C#'];

  constructor() { }

  ngOnInit() {
    this.form = new FormGroup({
      firstName: new FormControl(null, [Validators.required, Validators.minLength(3)]),
      lastName: new FormControl(null, Validators.required), 
      isExperienced: new FormControl(null, null),
      angular: new FormControl("", Validators.required),
      favouriteLang: new FormControl(null, Validators.required),
      jsversion: new FormControl("", null)
    });

    this.form.get('favouriteLang').valueChanges.subscribe(value => {

      const jsVersionFormControl = this.form.get('jsversion');

      if (value === "JS") {
        jsVersionFormControl.setValidators(Validators.required);
      } else {
        jsVersionFormControl.clearValidators();
      }

      jsVersionFormControl.updateValueAndValidity();

    });



}  

formSubmit(form: FormGroup){

  if(form.valid){
    alert("Your data was submitted succesfully");
  }
}
}
