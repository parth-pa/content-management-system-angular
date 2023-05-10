import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { dataList, dataList2 } from 'src/app/model/model';

@Injectable({ providedIn: 'root' })
export class ServicesService {
  constructor(private obj: HttpClient) {}

  baseURL: string = 'https://localhost:7106/api/Cms';




  getCmsData(data:any){

   return this.obj.get<dataList[]>("https://localhost:7106/api/Cms/getid?id="+data);


  }


  postCmsData(data:any){

   console.warn(data)
   return this.obj.post("https://localhost:7106/api/Admin",data);

  }

  deleteCmsData(data: any, data2: any) {
    return this.obj.delete(
      'https://localhost:7082/api/User?id=' + data + '&id1=' + data2
    );
  }

  updateCmsData(data: any) {
    console.warn(data);
    return this.obj.put('https://localhost:7082/api/Cms/Admin', data);
  }

  // uploadjpg(data:any){

  //   console.warn(data)
  //   return this.obj.post('https://localhost:7106/api/Cms/UploadImages',data);
  // }
}
