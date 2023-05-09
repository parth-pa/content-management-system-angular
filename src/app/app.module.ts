import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{FormsModule,ReactiveFormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AdminComponent } from './Admin-Panel/admin/admin.component';
import { BodyComponent } from './body/body.component';
import {MatListModule} from '@angular/material/list';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatMenuModule } from '@angular/material/menu';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import{MatToolbarModule} from '@angular/material/toolbar';
import { BlogsComponent } from './Admin-Panel/Blogs/Blogs.component';
import { SportsComponent } from './Admin-Panel/sports/sports.component'
import{MatDialogModule} from '@angular/material/dialog';
import { AddBlogDataComponent } from './Admin-Panel/add-blog-data/add-blog-data.component';
import { PoliticsComponent } from './Admin-Panel/politics/politics.component';
import { TechnologyComponent } from './Admin-Panel/technology/technology.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CricketComponent } from './Admin-Panel/sports/subTopic/cricket/cricket.component';
import { FootballComponent } from './Admin-Panel/sports/subTopic/football/football.component';
import { HockeyComponent } from './Admin-Panel/sports/subTopic/hockey/hockey.component';
import {InnovativeComponent} from './Admin-Panel/technology/subTopic/innovative/innovative.component';
import {LaptopComponent} from './Admin-Panel/technology/subTopic/laptop/laptop.component';
import {MobileComponent} from './Admin-Panel/technology/subTopic/mobile/mobile.component';
import {GujaratComponent} from './Admin-Panel/politics/subTopic/gujarat/gujarat.component';
import {IndiaComponent} from './Admin-Panel/politics/subTopic/india/india.component';
import {WorldComponent} from './Admin-Panel/politics/subTopic/world/world.component';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { GridModule } from '@progress/kendo-angular-grid';
import { ButtonsModule } from "@progress/kendo-angular-buttons";
import { DropDownListModule } from "@progress/kendo-angular-dropdowns";
import {CKEditorModule} from '@ckeditor/ckeditor5-angular'
import { EditorModule } from '@progress/kendo-angular-editor';
import { KeyCloakLoginComponent } from './keycloak-login/login.component';
import { UserComponent } from './user/user.component';
import { TokenIntercepterService } from './Intercepters/token-intercepter.service';
import { UserBodyComponent } from './user-panel/user-body/user-body.component';
import { UserCrouselComponent } from './user-panel/user-crousel/user-crousel.component';
import { UserHeaderComponent } from './user-panel/user-header/user-header.component';










@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    KeyCloakLoginComponent,
    AdminComponent,
    BodyComponent,
    SportsComponent,
    AddBlogDataComponent,
    PoliticsComponent,
    TechnologyComponent,
    BlogsComponent,
    CricketComponent,
    FootballComponent,
    HockeyComponent,
    InnovativeComponent,
    LaptopComponent,
    MobileComponent,
    GujaratComponent,
    IndiaComponent,
    WorldComponent,
    UserComponent,
    UserBodyComponent,
        UserCrouselComponent,
        UserHeaderComponent,
 ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSidenavModule,
    MatListModule,
    FormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    ReactiveFormsModule,
    MatDialogModule,
    HttpClientModule,
    MatMenuModule,
    InputsModule,
    GridModule,
    ButtonsModule,
    DropDownListModule,
    CKEditorModule,
    EditorModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [

    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenIntercepterService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
