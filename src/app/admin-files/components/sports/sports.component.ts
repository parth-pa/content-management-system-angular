import { UserServicesService } from 'src/Services/user-services.service';
import { Component, OnInit } from '@angular/core';
import { dataList, dataList2, topicList } from 'src/app/model/model';
import { MatDialog } from '@angular/material/dialog';
import { ServicesService } from 'src/Services/services.service';
import { DataShareService } from 'src/Services/data-share.service';
import { AddBlogDataComponent } from '../add-blog-data/add-blog-data.component';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-sports',
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.css'],
})
export class SportsComponent implements OnInit {
  preferance_id: any;
  myimage?: any;
  clickEventSubscription: Subscription;

  DataList: dataList[] = [];
  isNull: boolean = false;
  addOpenDialog(value?: any) {
    this.dialogRef.open(AddBlogDataComponent);
  }

  constructor(
    private obj: ServicesService,
    private dialogRef: MatDialog,
    public datashare: DataShareService,
    public userapi: UserServicesService
  ) {
    this.clickEventSubscription = this.datashare
      .getclickEvent()
      .subscribe(() => {
        this.ngOnInit();
      });
  }

  ngOnInit(): void {
    this.preferance_id = this.datashare.preference;
    this.getCmsDatas(this.preferance_id);

    // console.warn(this.preferance_id);
  }

  getCmsDatas(value: any) {
    // console.log(this.preferance_id);
    // value1=this.userapi.readsubuserPreferencefordetails()
    // console.log(value1);

    this.userapi.getperticulardetailsinsidedata(value,0).subscribe((data) => {
      this.DataList = data;
    });
  }

  removeHandler(event: any) {
    this.obj
      .deleteCmsData(this.preferance_id, event.dataItem.id)
      .subscribe((data) => {
        this.getCmsDatas(this.preferance_id);
      });
  }

  openDialog(value?: any) {
    this.datashare.blogData = value;
    this.dialogRef.open(AddBlogDataComponent);
  }

  // onchange(event:any){

  //   this.myimage = event.target.files[0];
  //    }

  // onupload(){
  // const filedata = new FormData();
  // filedata.append('image',this.myimage)
  // console.warn(this.myimage)

  // this.obj.uploadjpg(filedata).subscribe( data =>{

  // })
  // }

  editHandler(event: any) {
    this.openDialog(event.dataItem);
    // console.warn(event.dataItem)
  }


  headerdata(event: any){
    console.log(event);
    this.DataList = event;
    if(this.DataList.length === 0)
    {
      this.isNull= true
    }
    else{
      this.isNull= false;
    }
  }
}
