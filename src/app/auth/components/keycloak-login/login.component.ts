import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { KeyCloakApiService } from 'src/Services/key-cloak-api.service';
import { Login } from '../../../model/Login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class KeyCloakLoginComponent implements OnInit {
  login: Login = new Login();
  data: any = [];

  isSucessfull: boolean = false;
  isError: boolean = false;
  isValid: boolean = false;
  constructor(
    private fb: FormBuilder,
    private _apiservice: KeyCloakApiService,
    private _router: Router
  ) {}
  ngOnInit(): void {}

  form = this.fb.group({
    username: ['', [Validators.required]],

    password: ['', Validators.required],
  });

  storeLoginInfo(response: any) {
    this._apiservice.saveToken(response.token);
    this._apiservice.saveUserRole(response.userole);
    this._apiservice.savePreference(response.userpreference);
    this._apiservice.saveName(response.username);
  }

  onSubmit() {
    if (this.form.valid) {
      this._apiservice.keyCloakUserLogin(this.form.value).subscribe(
        (response) => {
          this.isSucessfull = true;
          this.storeLoginInfo(response);
          if (response.userole == 'admin') {
            this._router.navigate(['admin'], { replaceUrl: true });
          } else {
            this._router.navigate(['user'], { replaceUrl: true });
          }
          this.isValid = true;
        },
        (error) => {
          this.isError = true;
          this.isValid = false;
          this.data = error.error.message;
        }
      );
    } else {
      this.isValid = true;
      this.isError = false;
    }
  }
}
