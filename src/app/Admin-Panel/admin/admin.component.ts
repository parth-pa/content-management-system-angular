import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddBlogDataComponent } from '../add-blog-data/add-blog-data.component';
import { preferenceList } from 'src/app/model/model';
import { DataShareService, } from 'src/app/data-share.service';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {

opened = false;

constructor(public datashare:DataShareService){}

PreList :preferenceList[] = [

  {preferenceId:1 , preferenceName:'Sports' },
  {preferenceId:2 , preferenceName:'Politics' },
  {preferenceId:3 , preferenceName:'Technology' }
];


preferenceChange(preference : any){

  this.datashare.preference = preference;
  console.warn(this.datashare.preference)

}



}
