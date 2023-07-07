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
    // it will refresh page
    this.clickEventSubscription = this.datashare
      .getclickEvent()
      .subscribe(() => {
        this.ngOnInit();
      });
  }

  ngOnInit(): void {
    this.preferance_id = this.datashare.preference;
    this.preferenceName = this.datashare.preferenceName;
    this.getCmsDatas(this.preferance_id);
  }

  // -- Get data from backend  --
  getCmsDatas(value: any) {
    this.obj.getCmsData(value).subscribe((data) => {
      this.DataList = data;
    });
  }

  // -- Delete  --
  removeHandler(event: any) {
    if (confirm('Are you sure want to delete ')) {
      this.deletedata(event);
    }
  }

  // -- Delete  --
  deletedata(value: any) {
    this.obj
      .deleteCmsData(this.preferance_id, value.dataItem.id)
      .subscribe((data) => {
        this.getCmsDatas(this.preferance_id);
      });
  }

  // -- Display Form for edit  --
  editHandler(event: any) {
    this.datashare.buttonpress = true;
    this.openDialog(event.dataItem);
  }

  // -- Display Form  --
  openDialog(value?: any) {
    this.datashare.blogData = value;
    this.dialogRef.open(AddBlogDataComponent, { disableClose: true });
  }

  // -- Display Form  --
  openDialog2(value?: any) {
    this.dialogRef.open(AddBlogDataComponent, {
      disableClose: true,
    });
  }
}
