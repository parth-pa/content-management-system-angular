import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { KeyCloakApiService } from 'src/Services/key-cloak-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'CMS';
  userType: string = 'defult';
  isLogin: boolean = false;

  constructor(
    private _apiservice: KeyCloakApiService,
    private _router: Router
  ) {}
  ngOnInit() {
    this.manageLogin();
  }

  manageLogin() {
    // this._apiservice.onReaload();

    this._router.events.subscribe((val: any) => {
      if (
        this._apiservice.getToken() &&
        this._apiservice.getUserRole() == 'admin'
      ) {
        this.isLogin = true;
        this.userType = 'user';
      } else if (this._apiservice.getToken()) {
        this.userType = 'user';
      } else {
        this.userType = 'defult';
        this.isLogin = false;
      }
    });
  }
}
