import { Component , OnInit} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { dataList, dataList2, topicList } from 'src/app/model/model';

import { ServicesService } from 'src/Services/services.service';
import { MatDialog } from '@angular/material/dialog';
import { Observable, Subscriber } from 'rxjs';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { DataShareService } from 'src/Services/data-share.service';



@Component({
  selector: 'app-add-blog-data',
  templateUrl: './add-blog-data.component.html',
  styleUrls: ['./add-blog-data.component.css']
})
export class AddBlogDataComponent implements OnInit{


public Editor = ClassicEditor;

constructor(private obj:ServicesService, public datashare:DataShareService){ }

updateData?:any
addBlog:dataList[]=[];
selectedOption?:any
editmode : boolean = true;
updateImg?:any
showimage?:any
img?:any


ngOnInit(): void {

  this.blogdata = this.datashare.blogData
  this.updateData = this.blogdata
  this.selectedOption = this.datashare.preference
  console.warn("hello")
  console.warn(this.datashare.preference)
  console.warn(this.updateData)
  // this.selectedOption = this.updateData.subPreferenceId
  // console.warn(this.selectedOption)

  }

blogdata : Array<dataList> =[];

add:dataList =new dataList;
topic:topicList[]=[
  {blogId:1,topic:"Cricket",preferenceId:1 },
  {blogId:1,topic:"Football",preferenceId:3},
  {blogId:1,topic:"Hockey",preferenceId:2},
  {blogId:2,topic:"Gujarat",preferenceId:4},
  {blogId:2,topic:"India",preferenceId:5},
  {blogId:2,topic:"World",preferenceId:6},
  {blogId:3,topic:"Mobile",preferenceId :7},
  {blogId:3,topic:"Laptop",preferenceId :8},
  {blogId:3,topic:"Innovative",preferenceId :9},

];


blogForm = new FormGroup({

  title : new FormControl(),
  description : new FormControl(),
  image : new FormControl(),
  prefId : new FormControl(),
  subPreferenceId: new FormControl(),

})





onclick(){

  this.add.id = this.updateData.id
  this.add.title = this.blogForm.value.title
  this.add.description = this.blogForm.value.description
  this.add.image = this.img
  this.add.prefId = this.blogForm.value.prefId
  this.add.subPreferenceId = this.blogForm.value.subPreferenceId

  console.warn(this.blogForm)
  if(this.editmode == true){

    this.obj.updateCmsData(this.add).subscribe((res)=> {

      console.warn(this.add)
    })
  }
  if(this.editmode == false){

    this.obj.postCmsData(this.add).subscribe()
  }

}



sendCmsData(){

  //console.warn(this.blogForm)

  this.editmode = false

  }

  updateCmsData(){

    this.editmode = true
    console.warn(this.updateData.image)

  }

// **************   Image *****************

  // onchange(event:any){

  //   this.myimage = event.target.files[0];
  //      }


  // onupload(){
  //     const filedata = new FormData();
  //     filedata.append('image',this.myimage)
  //     console.warn(this.myimage)

  //     this.obj.uploadjpg(filedata).subscribe( data =>{

  //           })
  //       }

// ***********************************




// dataUpdate(){

//   // console.warn(this.blogForm.value)
//   // this.add.id = this.head.id
//   // this.add.title = this.blogForm.value.title
//   // this.add.description = this.blogForm.value.description
//   // this.add.image = this.blogForm.value.image
//   // this.add.subId = this.blogForm.value.subId
//   // this.add.subPreferenceId = this.blogForm.value.subPreferenceId
//   console.warn(this.add)
//   this.obj.updateCmsData(this.add).subscribe()
// }




// openDialog(){

//   this.dialogRef.open(AddBlogDataComponent);
// }


// ******************* Update  ******************************

onchange = ($event:Event) => {

  const target =$event.target as HTMLInputElement;
  const file:File = (target.files as FileList)[0];

  console.log(file)

  this.converBase64(file)

}

converBase64(file:File){

 const observable = new Observable((subscriber : Subscriber<any>) =>{

    this.readFile(file,subscriber)

 })

 observable.subscribe((d) => {
   console.log(d)
   this.img = d;
  //  console.log(this.img)

    // this.showimage =this.showimage2(d)
 })

}

readFile(file:File,subscriber:Subscriber<any>){

 const filereader = new FileReader();

 filereader.readAsDataURL(file)

 filereader.onload = () =>{

   subscriber.next(filereader.result);

   subscriber.complete()
 }

 filereader.onerror =() => {

   subscriber.error()
   subscriber.complete()
 }


}

// showimage2(base64:any){
//      fetch(base64)
//      .then(res => {

//        return res.blob();
//      })
//      .then(blob =>{

//        console.log(blob)
//      })

// }





}

