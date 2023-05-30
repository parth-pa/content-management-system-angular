import { UserServicesService } from 'src/Services/user-services.service';
import { Component, OnInit } from '@angular/core';
import { dataList } from 'src/app/model/model';
import { MatDialog } from '@angular/material/dialog';
import { ServicesService } from 'src/Services/services.service';
import { DataShareService } from 'src/Services/data-share.service';
import { AddBlogDataComponent } from '../add-blog-data/add-blog-data.component';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
})
export class BlogComponent implements OnInit {
  preferance_id: any;
  preferenceName: any;
  myimage?: any;
  clickEventSubscription: Subscription;

  DataList: dataList[] = [];
  preferance: any[] = [];

  isdropdownvisible?: boolean;
  torf: boolean = false;

  // addOpenDialog(value?: any) {
  //   this.dialogRef.open(AddBlogDataComponent);
  // }

  constructor(
    private obj: ServicesService,
    private dialogRef: MatDialog,
    public datashare: DataShareService,
    private user: UserServicesService
  ) {
    this.clickEventSubscription = this.datashare
      .getclickEvent()
      .subscribe(() => {
        this.ngOnInit();
        // this.getCmsDatas(this.preferance_id);
      });
  }

  ngOnInit(): void {
    this.preferance_id = this.datashare.preference;
    this.preferenceName = this.datashare.preferenceName;
    this.getCmsDatas(this.preferance_id);

    // this.user.isdropdownvisible=this.torf;
    // this.isdropdownvisible=this.user.isdropdownvisible ;
    // this.preferance = this.datashare._preference;
    // console.warn(this.preferance);
  }

  getCmsDatas(value: any) {
    // value1= this.user.readsubuserPreferencefordetails()
    // console.log(value1);

    this.obj.getCmsData(value).subscribe((data) => {
      this.DataList = data;
    });
  }

  removeHandler(event: any) {
    if (confirm('Are you sure want to delete ')) {
      this.deletedata(event);
    }
  }

  deletedata(value: any) {
    console.warn(value);
    this.obj
      .deleteCmsData(this.preferance_id, value.dataItem.id)
      .subscribe((data) => {
        this.getCmsDatas(this.preferance_id);
      });
  }

  openDialog(value?: any) {
    this.datashare.blogData = value;
    this.dialogRef.open(AddBlogDataComponent, { disableClose: true });
  }

  editHandler(event: any) {
    this.datashare.buttonpress = true;
    console.log(this.datashare.buttonpress);
    this.openDialog(event.dataItem);
  }

  openDialog2(value?: any) {
    this.dialogRef.open(AddBlogDataComponent, {
      disableClose: true,
    });
  }
}
