
import { Component, OnInit } from '@angular/core';
import { dataList } from 'src/app/model/model';
import { ServicesService } from 'src/app/services.service';

@Component({
  selector: 'app-hockey',
  templateUrl: './hockey.component.html',
  styleUrls: ['./hockey.component.css']
})
export class HockeyComponent implements OnInit{



  imgs:string = 'https://media.istockphoto.com/id/1185382671/vector/abstract-blurred-colorful-background.jpg?s=612x612&w=0&k=20&c=3YwJa7lCw-cQ-hviINULUokL9lYU4RuGjMP_E_0N8E4='
  hockeyList:dataList[] = [

    //  {id:1, heading:'hockey_1',image:this.imgs,detail:'details...1'},
    //  {id:2, heading:'hockey_2',image:this.imgs,detail:'details...2'},
    //  {id:3, heading:'hockey_3',image:this.imgs,detail:'details...3'},
    //  { title:'Sports_3',description:this.imgs, image:"Ankur"}


   ];

   ngOnInit(): void {

    // this.getCmsDatas()
  }

constructor(private obj:ServicesService){}

//    getCmsDatas(){

//    this.obj.getCmsData("id").subscribe(data =>{

//      this.hockeyList = data;


//    })
//  }


//  deleteData(data:any){

//   console.warn(data)
//    this.obj.deleteCmsData(data).subscribe(data =>{
//      this.getCmsDatas();

//    })

//  }

}
