import { UserServicesService } from 'src/Services/user-services.service';
import { Component, OnInit } from '@angular/core';
import { dataList, dataList2 } from 'src/app/model/model';
import { ServicesService } from 'src/Services/services.service';
import { MatDialog } from '@angular/material/dialog';
import { DataShareService } from 'src/Services/data-share.service';
import { AddBlogDataComponent } from '../add-blog-data/add-blog-data.component';

@Component({
  selector: 'app-politics',
  templateUrl: './politics.component.html',
  styleUrls: ['./politics.component.css'],
})
export class PoliticsComponent implements OnInit {
  // imgs:string = 'https://media.istockphoto.com/id/1185382671/vector/abstract-blurred-colorful-background.jpg?s=612x612&w=0&k=20&c=3YwJa7lCw-cQ-hviINULUokL9lYU4RuGjMP_E_0N8E4='

  preferance_id: any;

  politicsList: dataList[] = [];

  constructor(
    private obj: ServicesService,
    private dialogRef: MatDialog,
    public datashare: DataShareService,
    public userservices: UserServicesService
  ) {}

  ngOnInit(): void {
    this.preferance_id = this.datashare.preference;
    this.getCmsDatas(this.preferance_id);
    console.warn(this.preferance_id);
  }

  getCmsDatas(value: any,value1: any = 0) {
    value1 = this.userservices.readsubuserPreferencefordetails();
    this.userservices.getperticulardetailsinsidedata(value, value1).subscribe((data) => {
      this.politicsList = data;
    });
  }

  removeHandler(event: any) {
    console.warn(event.dataItem.prefId);
    this.obj
      .deleteCmsData(this.preferance_id, event.dataItem.id)
      .subscribe((data) => {
        this.getCmsDatas(this.preferance_id);
      });
  }

  //  deleteData(subid:any,dataid:any){

  //   this.obj.deleteCmsData(subid,dataid).subscribe(data =>{
  //     this.getCmsDatas(this.preferance_id);

  //   })
  // }

  openDialog(value?: any) {
    this.datashare.blogData = value;
    this.dialogRef.open(AddBlogDataComponent);
  }

  editHandler(event: any) {
    this.openDialog(event.dataItem);
    // console.warn(event.dataItem.id)
  }
}
