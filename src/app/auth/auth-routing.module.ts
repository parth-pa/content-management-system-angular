import { KeyclockRegisterComponent } from './components/keyclock-register/keyclock-register.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KeyCloakLoginComponent } from './components/keycloak-login/login.component';

const routes: Routes = [
  {
    path: 'auth',

    children: [
      { path: 'login', component: KeyCloakLoginComponent },
      { path: 'register', component: KeyclockRegisterComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
