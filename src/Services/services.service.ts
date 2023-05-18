import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { dataList, dataList2 } from 'src/app/model/model';

@Injectable({ providedIn: 'root' })
export class ServicesService {
  constructor(private obj: HttpClient) {}

  baseURL: string = 'https://localhost:7106/api/Cms';

  getCmsData(data: any) {
    // console.warn(data);
    return this.obj.get<dataList[]>(
      'https://localhost:7082/api/User/getid?id=' + data
    );
  }

  postCmsData(data: any) {
    // console.warn(data);
    return this.obj.post('https://localhost:7082/api/Admin', data);
  }

  deleteCmsData(data1: any, data2: any) {
    return this.obj.delete(
      'https://localhost:7082/api/User?id=' + data1 + '&id1=' + data2
    );
  }
  // https://localhost:7082/api/User?id=1&id1=12
  updateCmsData(data: any) {
    console.warn(data);
    return this.obj.put('https://localhost:7082/api/Admin', data);
  }

  deletedblog(data1: any) {
    return this.obj.get<dataList[]>(
      'https://localhost:7082/api/Admin/deleted_data?id=' + data1
    );
  }

  // restoreblog(data1: any, data2: any) {
  //   return this.obj.put(
  //     'https://localhost:7082/api/Admin/restoredata?id=' + data1 + '&id1=' + data2
  //   );
  // }
  restoreblog(data1: any, data2: any) {
    return this.obj.put(
      'https://localhost:7082/api/Admin/restoredata?id=' +
        data1 +
        '&id1=' +
        data2,
      data2
    );
  }

  //  https://localhost:7082/api/Admin/restoredata?id=2&id1=13
}
