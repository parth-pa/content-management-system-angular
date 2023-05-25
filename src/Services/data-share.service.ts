import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { preferenceList } from 'src/app/model/model';

@Injectable({
  providedIn: 'root',
})
export class DataShareService {
  blogData: any[] = [];

  public preference: any;
  public preferenceName: any;
  public sidenavToggle: any;
  public buttonpress: boolean = false;
  public deleted_data: any;
  isdropdownvisible: any =false;

  private subject = new Subject<any>();
  constructor() {}

  sendClickEvent() {
    this.subject.next(null);
  }

  getclickEvent(): Observable<any> {
    return this.subject.asObservable();
  }
}
