import { UserModule } from './user/user.module';
import { AdminFilesModule } from './admin-files/admin-files.module';
import { AuthModule } from './auth/auth.module';
import { KeyclockRegisterComponent } from './auth/components/keyclock-register/keyclock-register.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin-files/components/admin/admin.component';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatMenuModule } from '@angular/material/menu';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDialogModule } from '@angular/material/dialog';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { InputsModule } from '@progress/kendo-angular-inputs';
import { UploadsModule } from '@progress/kendo-angular-upload';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { LabelModule } from '@progress/kendo-angular-label';
import { FooterComponent, GridModule } from '@progress/kendo-angular-grid';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { DropDownListModule } from '@progress/kendo-angular-dropdowns';
import { EditorModule } from '@progress/kendo-angular-editor';

import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { TokenIntercepterService } from './Intercepters/token-intercepter.service';
import { KeyCloakLoginComponent } from './auth/components/keycloak-login/login.component';
import { UserComponent } from './user/user.component';
import { UserBodyComponent } from './user/components/user-body/user-body.component';
import { UserCrouselComponent } from './user/components/user-crousel/user-crousel.component';
import { UserHeaderComponent } from './user/components/user-header/user-header.component';
import { UserFooterComponent } from './user/components/user-footer/user-footer.component';
import { AdminFilesComponent } from './admin-files/admin-files.component';
import { AuthComponent } from './auth/auth.component';
import { AddBlogDataComponent } from './admin-files/components/add-blog-data/add-blog-data.component';
import { BlogComponent } from './admin-files/components/blog/blog.component';
import { ApproveBlogComponent } from './admin-files/components/approve-blog/approve-blog.component';
import { RestoreBlogComponent } from './admin-files/components/restore-blog/restore-blog.component';
import { FeedbackformComponent } from './user/components/feedbackform/feedbackform.component';
import { FeedbackblogComponent } from './admin-files/components/feedbackblog/feedbackblog.component';
// import { NotificationModule } from '@progress/kendo-angular-notification';

@NgModule({
  declarations: [
    AppComponent,
    KeyclockRegisterComponent,
    KeyCloakLoginComponent,
    UserComponent,
    AdminComponent,
    UserComponent,
    UserBodyComponent,
    UserCrouselComponent,
    UserHeaderComponent,
    UserFooterComponent,
    AdminFilesComponent,
    AuthComponent,
    AddBlogDataComponent,
    BlogComponent,
    ApproveBlogComponent,
    RestoreBlogComponent,
    FeedbackformComponent,
    FeedbackblogComponent,
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
    AuthModule,
    AdminFilesModule,
    UserModule,
    UploadsModule,
    DateInputsModule,
    LabelModule,
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
