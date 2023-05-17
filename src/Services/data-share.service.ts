import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataShareService {
  blogData: any[] = [];

<<<<<<< HEAD
  public preference: any=1;
  public sidenavToggle :any;


=======
  private subject = new Subject<any>();

  public preference: any = 1;
>>>>>>> 0894ce98d6716aed61a52ab8fcdfc8699c4ecd56

  constructor() {}

  sendClickEvent() {
    this.subject.next(null);
  }

  getclickEvent(): Observable<any> {
    return this.subject.asObservable();
  }
}
