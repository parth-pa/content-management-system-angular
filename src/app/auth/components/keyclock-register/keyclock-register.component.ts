import { preferenceModel } from '../../../model/prefrenceModel';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { KeyCloakApiService } from 'src/Services/key-cloak-api.service';

@Component({
  selector: 'app-keyclock-register',
  templateUrl: './keyclock-register.component.html',
  styleUrls: ['./keyclock-register.component.css'],
})
export class KeyclockRegisterComponent {
  data: any = [];
  department: any = [];
  selectedDepartment: any = [];
  errorText: any;
  preferences: preferenceModel[] = [];

  isSuccessfull: boolean = false;
  isValid: boolean = true;
  isError: boolean = false;
  constructor(
    private fb: FormBuilder,
    private _apiservice: KeyCloakApiService,
    private _router: Router
  ) {}

  form = this.fb.group({
    username: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    firstname: ['', [Validators.required]],
    prefrence: ['Select Prefrence', [Validators.required]],
    password: ['', [Validators.required, Validators.minLength]],
  });

  ngOnInit(): void {
    this.getPreference();
  }

  onSubmit() {
    var data = {
      username: this.form.value.username?.toString(),
      email: this.form.value.email?.toString(),
      firstName: this.form.value.firstname?.toString(),
      lastName: '',
      enabled: true,
      attributes: {
        prefrence_id: [this.form.value.prefrence?.toString()],
      },
      credentials: [
        {
          type: 'password',
          value: this.form.value.password?.toString(),
        },
      ],
    };

    if (this.form.valid) {
      this.isValid = true;
      this._apiservice.keycloakRegister(data).subscribe(
        (result) => {
          alert('Registered successfully.');
          this.isSuccessfull = true;

          this._apiservice.savePreference(
            this.form.value.prefrence?.toString()
          );

          this._router.navigate(['keycloakLogin']);
        },
        (error) => {
          this.isError = true;
          this.errorText = error.error.message;
          console.warn(this.errorText);
        }
      );
    } else {
      this.isValid = false;
    }
  }

  changeDepartment(e: any) {
    this.selectedDepartment = e.target.value;
    console.log(this.selectedDepartment);
  }

  getPreference() {
    this._apiservice.getPreference().subscribe((response) => {
      this.preferences = response;
    });
  }
}
