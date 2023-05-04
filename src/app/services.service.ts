import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { dataList, dataList2 } from './model/model';


@Injectable({providedIn: 'root'})


export class ServicesService implements OnInit{

  constructor(private obj:HttpClient) { }

  public mydata:string = "Ankur Gamit";

  ngOnInit(): void {


  }




  getCmsData(data:any){

   return this.obj.get<dataList[]>("https://localhost:7106/api/Cms/getid?id="+data);


  }


  postCmsData(data:any){

   console.warn(data)
   return this.obj.post("https://localhost:7106/api/Cms",data);

  }


  deleteCmsData(data:any,data2:any){

    return this.obj.delete("https://localhost:7106/api/Cms?id="+data+"&id1="+data2);
  }


  updateCmsData(data:any){

     console.warn(data)
    return this.obj.put("https://localhost:7106/api/Cms",data);
  }

  getCmsData2(){

    // console.warn("Hello");
   return this.obj.get<dataList2[]>("https://localhost:7106/api/Cms");

  }



  uploadjpg(data:any){

    console.warn(data)
    return this.obj.post('https://localhost:7106/api/Cms/UploadImages',data);
  }



}
