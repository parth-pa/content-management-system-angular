import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { preferenceList } from 'src/app/model/model';

@Injectable({
  providedIn: 'root',
})
export class DataShareService {
  blogData: any[] = [];

  public preference: any;
  _preference: any[] = [];
  public sidenavToggle: any;

  constructor() {}

  private subject = new Subject<any>();

  sendClickEvent() {
    this.subject.next(null);
  }

  getclickEvent(): Observable<any> {
    return this.subject.asObservable();
  }
}
