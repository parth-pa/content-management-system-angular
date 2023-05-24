import { Component } from '@angular/core';
import { dataList } from 'src/app/model/model';
import { MatDialog } from '@angular/material/dialog';
import { ServicesService } from 'src/Services/services.service';
import { DataShareService } from 'src/Services/data-share.service';
import { AddBlogDataComponent } from '../add-blog-data/add-blog-data.component';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-restore-blog',
  templateUrl: './restore-blog.component.html',
  styleUrls: ['./restore-blog.component.css'],
})
export class RestoreBlogComponent {
  preferance_id: any;
  preferenceName: any;
  myimage?: any;
  clickEventSubscription: Subscription;

  DataList: dataList[] = [];
  preferance: any[] = [];

  constructor(
    private obj: ServicesService,
    private dialogRef: MatDialog,
    public datashare: DataShareService
  ) {
    this.clickEventSubscription = this.datashare
      .getclickEvent()
      .subscribe(() => {
        this.ngOnInit();
      });
  }

  ngOnInit(): void {
    this.preferance_id = this.datashare.preference;
    this.preferenceName = this.datashare.preferenceName;
    this.deletedBlog();

    console.warn(this.preferance);
  }

  deletedBlog(value?: any) {
    this.obj.deletedblog(0).subscribe((data) => {
      this.DataList = data;
    });
  }

  restoreHandler(event: any) {
    console.warn(event);
    this.obj
      .restoreblog(event.dataItem.prefId, event.dataItem.id)
      .subscribe((data) => {
        this.deletedBlog(this.preferance_id);
      });
  }
}
