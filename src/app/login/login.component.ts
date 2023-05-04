import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {


  emailregex : string = "[a-z0-9._%+-}+@[a-z0-9.-]+\.[a-z]{2,}$";



  reactiveform = new FormGroup({
  fullName : new FormControl('',[Validators.required,Validators.minLength(5)]),
  email:new FormControl('',[Validators.required,Validators.pattern(this.emailregex)]),
  password : new FormControl(null,[Validators.required,Validators.minLength(8)]),


  });

  //

// fullname(){
// return this.reactiveform.fullName.controls

// }

loginUser(){

 console.warn(this.reactiveform.value)
}

get fullname(){

  return this.reactiveform.get('fullName')
}


get password (){

  return this.reactiveform.get('password')
}

get email(){

  return this.reactiveform.get('email')
}





}
