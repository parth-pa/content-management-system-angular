import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{FormsModule,ReactiveFormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import {MatListModule} from '@angular/material/list';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatMenuModule } from '@angular/material/menu';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import{MatToolbarModule} from '@angular/material/toolbar';
import { SportsComponent } from './sports/sports.component'
import{MatDialogModule} from '@angular/material/dialog';
import { AddBlogDataComponent } from './add-blog-data/add-blog-data.component';
import { PoliticsComponent } from './politics/politics.component';
import { TechnologyComponent } from './technology/technology.component';
import { HttpClientModule } from '@angular/common/http';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { GridModule } from '@progress/kendo-angular-grid';
import { ButtonsModule } from "@progress/kendo-angular-buttons";
import { DropDownListModule } from "@progress/kendo-angular-dropdowns";
import {CKEditorModule} from '@ckeditor/ckeditor5-angular'
import { EditorModule } from '@progress/kendo-angular-editor';
// import { SideNavComponent } from './side-nav/side-nav.component';
import {BlogsComponent} from './Blogs/Blogs.component'



@NgModule({
  declarations: [
    AppComponent,
    SportsComponent,
    AddBlogDataComponent,
    PoliticsComponent,
    TechnologyComponent,
    // SideNavComponent,
    BlogsComponent,
    AdminComponent,

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

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
