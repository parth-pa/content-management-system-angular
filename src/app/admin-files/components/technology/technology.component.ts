import { Component, OnInit } from '@angular/core';
import { dataList } from 'src/app/model/model';

import { MatDialog } from '@angular/material/dialog';
import { ServicesService } from 'src/Services/services.service';
import { DataShareService } from 'src/Services/data-share.service';
import { AddBlogDataComponent } from '../add-blog-data/add-blog-data.component';

@Component({
  selector: 'app-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.css'],
})
export class TechnologyComponent implements OnInit {
  //imgs:string = 'https://media.istockphoto.com/id/1185382671/vector/abstract-blurred-colorful-background.jpg?s=612x612&w=0&k=20&c=3YwJa7lCw-cQ-hviINULUokL9lYU4RuGjMP_E_0N8E4='

<<<<<<< HEAD:src/app/admin-files/components/technology/technology.component.ts
  preferance_id: any = 3;
  technologysList: dataList[] = [
    //  {id:1, heading:'Technology_1',image:this.imgs,detail:'details...1'},
    //  {id:2, heading:'Technology_2',image:this.imgs,detail:'details...2'},
    //  {id:3, heading:'Technology_3',image:this.imgs,detail:'details...3'},
    //  {id:3, heading:'Technology_3',image:this.imgs,detail:'details...3'}
  ];
=======
  preferance_id:any = 3
  technologysList:dataList[] = [ ];
>>>>>>> master:src/app/technology/technology.component.ts

  constructor(
    private obj: ServicesService,
    private dialogRef: MatDialog,
    public datashare: DataShareService
  ) {}
  ngOnInit(): void {
    this.preferance_id = this.datashare.preference;
    console.warn(this.preferance_id);
    this.getCmsDatas();
  }

  getCmsDatas() {
    this.obj.getCmsData(3).subscribe((data) => {
      this.technologysList = data;
      console.log(this.technologysList);
    });
  }

  removeHandler(event: any) {
    this.obj
      .deleteCmsData(event.dataItem.prefId, event.dataItem.id)
      .subscribe((data) => {
        this.getCmsDatas();
      });
  }

  editHandler(event: any) {
    this.openDialog(event.dataItem);
  }

  //   deleteData(subid:any,dataid:any){

  //     this.obj.deleteCmsData(subid,dataid).subscribe(data =>{
  //       this.getCmsDatas();

  //     })
  // }

  openDialog(value: any) {
    this.datashare.blogData = value;
    this.dialogRef.open(AddBlogDataComponent);
  }
}