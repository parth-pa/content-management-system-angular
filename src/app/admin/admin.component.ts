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
    { preferenceId: 1, preferenceName: 'Sports' },
    { preferenceId: 2, preferenceName: 'Politics' },
    { preferenceId: 3, preferenceName: 'Technologies' },
  ];

  preferenceChange(preferenceValue?: number) {
    this.datashare.preference = preferenceValue;
  }

  logOut() {
    this._apiService.remove();
    this._router.navigate(['keycloakLogin'], { replaceUrl: true });
    this.opened = false;
    this._apiService.userType = 'defult';
  }
}
