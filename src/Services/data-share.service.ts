import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataShareService {
  blogData: any[] = [];

  private subject = new Subject<any>();

  public preference: any = 1;

  constructor() {}

  sendClickEvent() {
    this.subject.next(null);
  }

  getclickEvent(): Observable<any> {
    return this.subject.asObservable();
  }
}
