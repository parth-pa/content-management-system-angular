import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { TechnologyComponent } from './technology/technology.component';
import { PoliticsComponent } from './politics/politics.component';
import { SportsComponent } from './sports/sports.component';




const routes: Routes = [

// {path:'',component:AppComponent},

{path:'Admin',component:AdminComponent},
{path:'Sports', component:SportsComponent},
{path:'Politics', component:PoliticsComponent},
{path:'Technologies', component:TechnologyComponent},




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
