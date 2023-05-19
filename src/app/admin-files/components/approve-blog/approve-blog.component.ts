import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataShareService } from 'src/Services/data-share.service';
import { ServicesService } from 'src/Services/services.service';
import { dataList } from 'src/app/model/model';

@Component({
  selector: 'app-approve-blog',
  templateUrl: './approve-blog.component.html',
  styleUrls: ['./approve-blog.component.css'],
})
export class ApproveBlogComponent implements OnInit {
  preferance_id: any;
  preferenceName: any;
  clickEventSubscription: Subscription;

  ApprovedataList: dataList[] = [];

  constructor(
    private obj: ServicesService,
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
    this.Approvedata();
  }

  Approvedata() {
    this.obj.getapprovedata().subscribe((data) => {
      this.ApprovedataList = data;
    });
  }
  approveHandler(event: any) {
    console.warn(event);
    this.obj
      .approvedata(event.dataItem.prefId, event.dataItem.id)
      .subscribe((data) => {
        this.Approvedata();
        // this.deletedBlog(this.preferance_id);
      });
  }

  declineHandler(event: any) {
    if (confirm('Are you sure want to Decline ')) {
      this.declinedata(event);
    }
  }

  declinedata(value: any) {
    this.obj
      .deleteCmsData(value.dataItem.prefId, value.dataItem.id)
      .subscribe((data) => {
        this.Approvedata();
        // this.deletedBlog(this.preferance_id);
      });
  }
}
