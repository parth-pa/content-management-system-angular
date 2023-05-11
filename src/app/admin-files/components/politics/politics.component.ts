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

  preferance_id: any = 2;

  politicsList: dataList[] = [];

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
      this.politicsList = data;
      console.warn(this.politicsList);

    });
  }

  removeHandler(event: any) {
    // this.deleteData(event.dataItem.prefId,event.dataItem.id)
    // console.warn(event.dataItem.id,event.dataItem.prefId)
    console.warn(event.dataItem.prefId);
    this.obj
      .deleteCmsData(event.dataItem.prefId, event.dataItem.id)
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
