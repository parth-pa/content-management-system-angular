import { Route, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { preferenceModel } from 'src/app/model/prefrenceModel';

@Injectable({
  providedIn: 'root',
})
export class KeyCloakApiService {
  constructor(private _http: HttpClient, private _router: Router) {}

  ROLE: string = 'role';
  TOKEN: string = 'token';
  PREF: string = 'prefrence';
  NAME: string = 'name';
  isLogin?: boolean;
  userType?: string;

  public savePreference(pref: any) {
    localStorage.setItem(this.PREF, pref);
  }
  public getPrefence() {
    return localStorage.getItem(this.PREF);
  }

  public saveName(name: any) {
    localStorage.setItem(this.NAME, name);
  }
  public getName() {
    return localStorage.getItem(this.NAME);
  }

  public saveToken(token: string) {
    localStorage.setItem(this.TOKEN, token);
  }

  public getToken() {
    return localStorage.getItem(this.TOKEN);
  }

  public saveUserRole(role: any) {
    localStorage.setItem(this.ROLE, role);
  }

  public getUserRole() {
    return localStorage.getItem(this.ROLE);
  }

  public remove() {
    localStorage.removeItem(this.TOKEN);
    localStorage.removeItem(this.ROLE);
    localStorage.removeItem(this.PREF);
    localStorage.removeItem(this.NAME)
    return false;
  }

  onReaload() {
    if ((this.getToken() && this, this.getUserRole() == 'admin')) {
      this._router.navigate(['admin'], { replaceUrl: true });
    } else if (this.getToken()) {
      this._router.navigate(['user'], { replaceUrl: true });
    }
  }

  public keycloakRegister(registerData: any): Observable<[]> {
    return this._http.post<[]>(
      'https://localhost:7082/userRegistration',
      registerData
    );
  }

  public keyCloakUserLogin(data: any): Observable<any> {
    return this._http.post<any>('https://localhost:7082/userLogin', data);
  }
  public getPreference(): Observable<preferenceModel[]> {
    return this._http.get<preferenceModel[]>(
      'https://localhost:7082/api/User/preference'
    );
  }

  public wetherData() {
    return this._http.get('https://localhost:7082/WeatherForecast');
  }
  manageLogin() {
    this.onReaload();

    this._router.events.subscribe((val: any) => {
      if (this.getToken() && this.getUserRole() == 'admin') {
        this.userType = 'login';
        this.userType = 'user';

        this.isLogin = true;
      } else if (this.getToken()) {
        this.userType = 'user';
      } else {
        this.userType = 'defult';
        this.isLogin = false;
      }
    });
  }
}
