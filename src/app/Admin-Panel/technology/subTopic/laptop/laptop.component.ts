import { Component, OnInit } from '@angular/core';
import { dataList } from 'src/app/model/model';
import { ServicesService } from 'src/Services/services.service';

@Component({
  selector: 'app-laptop',
  templateUrl: './laptop.component.html',
  styleUrls: ['./laptop.component.css']
})
export class LaptopComponent implements OnInit{

  imgs:string = 'https://media.istockphoto.com/id/1185382671/vector/abstract-blurred-colorful-background.jpg?s=612x612&w=0&k=20&c=3YwJa7lCw-cQ-hviINULUokL9lYU4RuGjMP_E_0N8E4='
  laptopList:dataList[] = [

    //  {id:1, heading:'laptop_1',image:this.imgs,detail:'details...1'},
    //  {id:2, heading:'laptop_2',image:this.imgs,detail:'details...2'},
    //  {id:3, heading:'laptop_3',image:this.imgs,detail:'details...3'},
    //  { title:'Sports_3',description:this.imgs, image:"Ankur"}


   ];

   constructor(private obj:ServicesService){}

   ngOnInit(): void {

    //  this.getCmsDatas()
   }

  //   getCmsDatas(){

  //   this.obj.getCmsData("id").subscribe(data =>{

  //     this.laptopList = data;


  //   })
  // }


  // deleteData(data:any){

  //    console.warn(data)
  //   this.obj.deleteCmsData(data).subscribe(data =>{
  //     this.getCmsDatas();

  //   })

  // }


}
