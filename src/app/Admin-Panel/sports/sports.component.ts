import { Component, OnInit } from '@angular/core';
import { dataList, dataList2, topicList } from 'src/app/model/model';
import { AddBlogDataComponent } from '../add-blog-data/add-blog-data.component';
import { MatDialog } from '@angular/material/dialog';
import { BlogsComponent } from '../Blogs/Blogs.component';
import { ServicesService } from 'src/Services/services.service';
import { DataShareService } from 'src/Services/data-share.service';

@Component({
  selector: 'app-sports',
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.css']
})
export class SportsComponent implements OnInit{

  imgs:string = 'https://media.istockphoto.com/id/1185382671/vector/abstract-blurred-colorful-background.jpg?s=612x612&w=0&k=20&c=3YwJa7lCw-cQ-hviINULUokL9lYU4RuGjMP_E_0N8E4='

preferance_id:any = 1;
myimage?:any


   sportsList:dataList[] = [

    //  {id:1, heading:'Sports_1',image:this.imgs,detail:'details...1'},
    //  {id:2, heading:'Sports_2',image:this.imgs,detail:'details...2'},
    //  {id:3, heading:'Sports_3',image:this.imgs,detail:'details...3'},
    //  { title:'Sports_3',description:this.imgs, image:"Ankur"}


   ];



  constructor(private obj:ServicesService, private dialogRef:MatDialog, public datashare:DataShareService){



  }
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
    this.getCmsDatas(this.preferance_id);
    // this.getCmsData2()
  }


  getCmsDatas(value:any){

     this.preferance_id = value;
    this.obj.getCmsData(this.preferance_id).subscribe(data =>{

      this.sportsList = data;
      console.log(this.sportsList)
    })
  }


  removeHandler(event:any){
    // this.deleteData(event.dataItem.prefId,event.dataItem.id)
    // console.warn(event.dataItem.id,event.dataItem.prefId)
    this.obj.deleteCmsData(event.dataItem.prefId,event.dataItem.id).subscribe(data =>{
      this.getCmsDatas(this.preferance_id);

    })

  }

//   deleteData(subid:any,dataid:any){

//     this.obj.deleteCmsData(subid,dataid).subscribe(data =>{
//       this.getCmsDatas(this.preferance_id);

//     })
// }

    // getCmsData2(){

    //  this.obj.getCmsData2().subscribe(data =>{

    //    this.sportsList = data;
    //    console.warn(data)

    //    // console.warn(data)
    //  })


// }

openDialog(value?:any){

  this.datashare.blogData = value
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

editHandler(event:any){

  this.openDialog(event.dataItem)
  console.warn(event.dataItem)

}






}
