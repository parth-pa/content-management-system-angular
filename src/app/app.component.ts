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
  menuType: string = 'defult';
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
        this.menuType = 'login';
        this.menuType = 'user';

        this.isLogin = true;
      } else if (this._apiservice.getToken()) {
        this.menuType = 'user';
      } else {
        this.menuType = 'defult';
        this.isLogin = false;
      }
    });
  }
}
