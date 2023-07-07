import { feed } from './../app/model/model';
import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { dataList, dataList2 } from 'src/app/model/model';

@Injectable({ providedIn: 'root' })
export class ServicesService {
  constructor(private obj: HttpClient, private http: HttpClient) {}
  isdropdownvisible: boolean = false;

  baseURL: string = 'https://localhost:7106/api/Cms';

  getCmsData(data: any, data2 = 0) {
    return this.http.get<dataList[]>(
      'https://localhost:7082/api/User/getinsindedatadetalils?id=' +
        data +
        '&id1=' +
        data2
    );
  }

  postCmsData(data: any) {
    return this.obj.post('https://localhost:7082/api/Admin', data);
  }

  deleteCmsData(data1: any, data2: any) {
    return this.obj.delete(
      'https://localhost:7082/api/User?id=' + data1 + '&id1=' + data2
    );
  }

  updateCmsData(data: any) {
    return this.obj.put('https://localhost:7082/api/Admin', data);
  }

  deletedblog(data1: any) {
    return this.obj.get<dataList[]>(
      'https://localhost:7082/api/Admin/deleted_data?id=' + data1
    );
  }

  restoreblog(data1: any, data2: any) {
    return this.obj.put(
      'https://localhost:7082/api/Admin/restoredata?id=' +
        data1 +
        '&id1=' +
        data2,
      data2
    );
  }

  getapprovedata(data: any) {
    return this.obj.get<dataList[]>(
      'https://localhost:7082/api/Admin/getnotapproveddata?id=' + data
    );
  }

  approvedata(data1: any, data2: any) {
    return this.obj.put(
      'https://localhost:7082/api/Admin/approvedata?id=' +
        data1 +
        '&id1=' +
        data2,
      data2
    );
  }

  feedbackdata() {
    return this.obj.get<feed[]>('https://localhost:7082/api/Admin/getfeedback');
  }
}
