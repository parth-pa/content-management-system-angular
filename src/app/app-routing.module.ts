import { UserComponent } from './user/user.component';
import { KeyCloakLoginComponent } from './keycloak-login/login.component';
import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { TechnologyComponent } from './technology/technology.component';
import { PoliticsComponent } from './politics/politics.component';
import { SportsComponent } from './sports/sports.component';
import { BlogsComponent } from './Blogs/Blogs.component';
import { KeyclockRegisterComponent } from './keyclock-register/keyclock-register.component';
import { UserBodyComponent } from './user-panel/user-body/user-body.component';

const routes: Routes = [
  { path: '', redirectTo: 'keycloakLogin', pathMatch: 'full' },

  { path: 'Admin', component: AdminComponent},
  { path: 'Blogs', component: BlogsComponent },
  { path: 'Sports', component: SportsComponent },

  { path: 'Politics', component: PoliticsComponent },

  { path: 'Technologies', component: TechnologyComponent },

  {path:'userBody',component:UserBodyComponent},

  // login route
  { path: 'keycloakRegister', component: KeyclockRegisterComponent },
  { path: 'keycloakLogin', component: KeyCloakLoginComponent },

  // user route
  { path: 'user', component: UserComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
