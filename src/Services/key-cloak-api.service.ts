import { Route, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class KeyCloakApiService {
  constructor(private _http: HttpClient, private _router: Router) {}

  ROLE: string = 'role';
  TOKEN: string = 'token';
  PREF: string = 'prefrence';

  public savePreference(pref: any) {
    localStorage.setItem(this.PREF, pref);
  }
  public getPrefence() {
    return localStorage.getItem(this.PREF);
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
    return false;
  }

  onReaload() {
    if (this.getToken()) {
      this._router.navigate(['user'],{ replaceUrl: true });
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

  public wetherData() {
    return this._http.get('https://localhost:7082/WeatherForecast');
  }
}