import { Component, OnInit } from '@angular/core';
import { dataList, dataList2, topicList } from 'src/app/model/model';
import { MatDialog } from '@angular/material/dialog';
import { ServicesService } from 'src/Services/services.service';
import { DataShareService } from 'src/Services/data-share.service';
import { AddBlogDataComponent } from '../add-blog-data/add-blog-data.component';

@Component({
  selector: 'app-sports',
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.css'],
})
export class SportsComponent implements OnInit {
  preferance_id: any = 1;
  myimage?: any;

  sportsList: dataList[] = [];

  addOpenDialog(value?: any) {
    this.dialogRef.open(AddBlogDataComponent);
  }

  constructor(
    private obj: ServicesService,
    private dialogRef: MatDialog,
    public datashare: DataShareService
  ) {}
  ngOnInit(): void {
    this.getCmsDatas(this.preferance_id);
    this.preferance_id = this.datashare.preference;
    console.warn(this.preferance_id);
  }

  getCmsDatas(value: any) {
    this.preferance_id = value;
    this.obj.getCmsData(this.preferance_id).subscribe((data) => {
      this.sportsList = data;
      console.log(this.sportsList);
    });
  }

  removeHandler(event: any) {
    this.obj
      .deleteCmsData(event.dataItem.prefId, event.dataItem.id)
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
}