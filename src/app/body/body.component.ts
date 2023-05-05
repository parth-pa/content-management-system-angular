import { Component, OnInit } from '@angular/core';
import { dataList, dataList2 } from '../model/model';
import { HttpClient } from '@angular/common/http';
import { ServicesService } from 'src/Services/services.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit{

  preferance_id:any = 1;

add:dataList2 = new dataList2;

sport:dataList2[] = [

  // {id:1, heading:'Heading_1',image:'img_1',detail:'details...1'},
  // {id:2, heading:'Heading_2',image:'img_2',detail:'details...2'},
  // {id:3, heading:'Heading_3',image:'img_3',detail:'details...3'},
  // {id:3, heading:'Heading_3',image:'img_4',detail:'details...3'}

];



constructor(private obj:ServicesService , public obj2:ServicesService){}

// data:string=""
  ngOnInit(): void {

    // this.getCmsDataSport();
    this.getCmsData()

    // this.data =this.obj2.mydata
    // console.warn(this.obj2.mydata)

  }

// getCmsDataSport(){
//     // this.preferance_id = value;
//    this.obj.getCmsData(this.preferance_id).subscribe(data =>{

//      this.sport = data;
//      console.warn(data)

//      // console.warn(data)
//    })
//   }

//    getCmsDataPolitics(){
//     // this.preferance_id = value;
//    this.obj.getCmsData(this.preferance_id).subscribe(data =>{

//      this.sport = data;
//      console.warn(data)

//      // console.warn(data)
//    })
//   }

//    getCmsDataTechnology(){
//     // this.preferance_id = value;
//    this.obj.getCmsData(this.preferance_id).subscribe(data =>{

//      this.sport = data;
//      console.warn(data)

//      // console.warn(data)
//    })

// }


getCmsData(){

  this.obj.getCmsData2().subscribe(data =>{

    this.sport = data;
  })
}





}
