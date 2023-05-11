import { KeyCloakLoginComponent } from './components/keycloak-login/login.component';
import { KeyclockRegisterComponent } from './components/keyclock-register/keyclock-register.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, AuthRoutingModule],
})
export class AuthModule {}
