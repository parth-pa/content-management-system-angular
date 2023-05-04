import { Component, OnInit } from '@angular/core';
import { dataList, dataList2 } from 'src/app/model/model';
import { ServicesService } from 'src/app/services.service';
import { AddBlogDataComponent } from '../add-blog-data/add-blog-data.component';
import { MatDialog } from '@angular/material/dialog';
import { DataShareService } from 'src/app/data-share.service';

@Component({
  selector: 'app-politics',
  templateUrl: './politics.component.html',
  styleUrls: ['./politics.component.css']
})
export class PoliticsComponent implements OnInit {

  imgs:string = 'https://media.istockphoto.com/id/1185382671/vector/abstract-blurred-colorful-background.jpg?s=612x612&w=0&k=20&c=3YwJa7lCw-cQ-hviINULUokL9lYU4RuGjMP_E_0N8E4='

  preferance_id:any = 2;

  politicsList:dataList[] = [

  //  {id:1, heading:'politics_1',image:this.imgs,detail:'details...1'},
  //  {id:2, heading:'politics_2',image:this.imgs,detail:'details...2'},
  //  {id:3, heading:'politics_3',image:this.imgs,detail:'details...3'},
  //  {id:3, heading:'politics_3',image:this.imgs,detail:'details...3'}


 ];

 constructor(private obj:ServicesService ,private dialogRef:MatDialog,public datashare:DataShareService){}

  ngOnInit(): void {

    this.getCmsDatas(this.preferance_id);
  }

 getCmsDatas(value:any){

   this.preferance_id = value;
     this.obj.getCmsData(this.preferance_id).subscribe(data =>{

       this.politicsList = data;

     })

 }


 removeHandler(event:any){
  // this.deleteData(event.dataItem.prefId,event.dataItem.id)
  // console.warn(event.dataItem.id,event.dataItem.prefId)
  console.warn(event)
  this.obj.deleteCmsData(event.dataItem.prefId,event.dataItem.id).subscribe(data =>{
    this.getCmsDatas(this.preferance_id);

  })

}


editHandler(event:any){

  this.openDialog(event.dataItem)
  // console.warn(event.dataItem.id)

}



//  deleteData(subid:any,dataid:any){

//   this.obj.deleteCmsData(subid,dataid).subscribe(data =>{
//     this.getCmsDatas(this.preferance_id);

//   })
// }

openDialog(value:any){

   this.datashare.blogData = value
  this.dialogRef.open(AddBlogDataComponent);
}


}
