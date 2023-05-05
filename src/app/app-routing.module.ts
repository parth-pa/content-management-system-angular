import { UserComponent } from './user/user.component';
import { KeyCloakLoginComponent } from './keycloak-login/login.component';
import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AdminComponent } from './Admin-Panel/admin/admin.component';
import { BlogsComponent } from './Admin-Panel/Blogs/Blogs.component';
import { TechnologyComponent } from './Admin-Panel/technology/technology.component';
import { PoliticsComponent } from './Admin-Panel/politics/politics.component';
import { SportsComponent } from './Admin-Panel/sports/sports.component';
import { HockeyComponent } from './Admin-Panel/sports/subTopic/hockey/hockey.component';
import { CricketComponent } from './Admin-Panel/sports/subTopic/cricket/cricket.component';
import { FootballComponent } from './Admin-Panel/sports/subTopic/football/football.component';
import { GujaratComponent } from './Admin-Panel/politics/subTopic/gujarat/gujarat.component';
import { IndiaComponent } from './Admin-Panel/politics/subTopic/india/india.component';
import { WorldComponent } from './Admin-Panel/politics/subTopic/world/world.component';
import { MobileComponent } from './Admin-Panel/technology/subTopic/mobile/mobile.component';
import { LaptopComponent } from './Admin-Panel/technology/subTopic/laptop/laptop.component';
import { InnovativeComponent } from './Admin-Panel/technology/subTopic/innovative/innovative.component';
import { KeyclockRegisterComponent } from './keyclock-register/keyclock-register.component';

const routes: Routes = [
  { path: '', redirectTo: 'keycloakLogin', pathMatch: 'full' },

  { path: 'Admin', component: AdminComponent },
  { path: 'Blogs', component: BlogsComponent },
  { path: 'Sports', component: SportsComponent },
  { path: 'Cricket', component: CricketComponent },
  { path: 'Football', component: FootballComponent },
  { path: 'Hockey', component: HockeyComponent },
  { path: 'Politics', component: PoliticsComponent },
  { path: 'Gujarat', component: GujaratComponent },
  { path: 'India', component: IndiaComponent },
  { path: 'World', component: WorldComponent },
  { path: 'Technologys', component: TechnologyComponent },
  { path: 'Mobile', component: MobileComponent },
  { path: 'Laptop', component: LaptopComponent },
  { path: 'Innovative', component: InnovativeComponent },

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
