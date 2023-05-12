import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { preferenceList } from 'src/app/model/model';
import { DataShareService } from 'src/Services/data-share.service';
import { KeyCloakApiService } from 'src/Services/key-cloak-api.service';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent implements OnInit {
  userType?: string;

  isLogin?: boolean;
  opened = false;

  sidenavToggle: boolean = true;

  constructor(
    public datashare: DataShareService,
    private _router: Router,
    private _apiService: KeyCloakApiService
  ) {}
  ngOnInit(): void {
    this.isLogin = this._apiService.isLogin;
    this.userType = this._apiService.userType;
  }

  PreList: preferenceList[] = [
    {
      preferenceId: 1,
      preferenceName: 'Sports',
      icon: 'fa-solid fa-person-biking',
    },
    {
      preferenceId: 2,
      preferenceName: 'Politics',
      icon: 'fa-solid fa-landmark-dome',
    },
    {
      preferenceId: 3,
      preferenceName: 'Technologies',
      icon: ' fa-solid fa-microchip',
    },

    // {preferenceId:1 , preferenceName:'Sports' },
    // {preferenceId:2 , preferenceName:'Sports' },
    // {preferenceId:3 , preferenceName:'Sports' }
  ];

  preferenceChange(preferenceId: any) {
    this.datashare.preference = preferenceId;
    // console.warn(preferenceId);
  }

  // ******** side nav data *******************

  list = [
    {
      number: '1',
      name: 'sport',
      icon: 'fa-solid fa-house',
    },
    {
      number: '2',
      name: 'technology',
      icon: 'fa-solid fa-house',
    },
    {
      number: '3',
      name: 'Politics',
      icon: 'fa-solid fa-house',
    },
    {
      number: '4',
      name: 'user',
      icon: 'fa-solid fa-house',
    },
  ];

  onclickmenu() {
    if (this.sidenavToggle == true) {
      this.sidenavToggle = false;
    } else {
      this.sidenavToggle = true;
    }
  }
  logOut() {
    this._apiService.remove();
    this._router.navigate(['auth/login']);
    this.opened = false;
  }
}
