import { Component, OnInit } from '@angular/core';
import {FormGroup,Validators,FormBuilder} from "@angular/forms";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  regForm!:FormGroup

  constructor( private fb:FormBuilder) {}

  ngOnInit(): void {
    this._createForm()
  }
  private _createForm(){
    this.regForm=this.fb.group({
      name:['',[Validators.required,Validators.pattern(/[^\d-+!"#$%&'()* ,.\/:;<=>?@[\\\]_`{|}~]$/)]],
      lastname:['',[Validators.required,Validators.pattern(/[^\d-+!"#$%&'()* ,.\/:;<=>?@[\\\]_`{|}~]$/)]],
      login:['',[Validators.required,Validators.pattern(/[^\d-+!"#$%&'()* ,.\/:;<=>?@[\\\]_`{|}~]$/)],Validators.max(10)],
      password:['',[Validators.required,Validators.min(8),Validators.max(24)]],
      email:['',[Validators.required,Validators.email]],
      country:['',[Validators.required,Validators.pattern(/[^\d-+!"#$%&'()* ,.\/:;<=>?@[\\\]_`{|}~]$/)]],
      phone:['',[Validators.required,Validators.pattern(/^\+\d{12}/)]],
      gender:['',[Validators.required]],
      birthDate:['',[Validators.required]]
    })
  }

  get _phone() {
    return this.regForm.get('phone')!
  }
  get _name() {
    return this.regForm.get('name')!
  }
  get _email(){
    return this.regForm.get('email')!
  }
  get _lastname(){
    return this.regForm.get('lastname')!
  }
  get _login(){
     return this.regForm.get('login')!
  }
  get _password(){
    return this.regForm.get('password')!
  }
  get _country(){
    return this.regForm.get('country')!
  }
  get _date(){
    console.log(this.regForm.get('birthDate'))
    return this.regForm.get('birthDate')!
  }
  get _gender(){
    return this.regForm.get('gender')!
  }
  submitForm() {
    console.log(this.regForm)
  }

}
