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
    this._apiservice.manageLogin()
  }



}
