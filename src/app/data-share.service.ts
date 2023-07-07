import { Injectable, OnInit } from '@angular/core';
import { dataList, dataList2 } from './model/model';

@Injectable({
  providedIn: 'root',
})
export class DataShareService implements OnInit {
  blogData: any[] = [];

  public preference: any;

  constructor() {}

  ngOnInit(): void {
    this.preference;
    console.warn(this.preference);
    console.warn('hello');
  }
}
