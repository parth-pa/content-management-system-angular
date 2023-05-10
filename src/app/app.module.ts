import { KeyclockRegisterComponent } from './keyclock-register/keyclock-register.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatMenuModule } from '@angular/material/menu';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { SportsComponent } from './sports/sports.component';
import { MatDialogModule } from '@angular/material/dialog';
import { AddBlogDataComponent } from './add-blog-data/add-blog-data.component';
import { PoliticsComponent } from './politics/politics.component';
import { TechnologyComponent } from './technology/technology.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { FooterComponent, GridModule } from '@progress/kendo-angular-grid';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { DropDownListModule } from '@progress/kendo-angular-dropdowns';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { EditorModule } from '@progress/kendo-angular-editor';
import { TokenIntercepterService } from './Intercepters/token-intercepter.service';
import { BlogsComponent } from './Blogs/Blogs.component';
import { KeyCloakLoginComponent } from './keycloak-login/login.component';
import { UserComponent } from './user/user.component';
import { UserBodyComponent } from './user-panel/user-body/user-body.component';
import { UserCrouselComponent } from './user-panel/user-crousel/user-crousel.component';
import { UserHeaderComponent } from './user-panel/user-header/user-header.component';
import { UserFooterComponent } from './user-panel/user-footer/user-footer.component';




@NgModule({
  declarations: [
    AppComponent,
    KeyclockRegisterComponent,
    KeyCloakLoginComponent,
    UserComponent,
    AdminComponent,
    SportsComponent,
    AddBlogDataComponent,
    PoliticsComponent,
    TechnologyComponent,
    BlogsComponent,
    UserComponent,
    UserBodyComponent,
    UserCrouselComponent,
        UserHeaderComponent,
        UserFooterComponent,
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
  bootstrap: [AppComponent],
})
export class AppModule {}
