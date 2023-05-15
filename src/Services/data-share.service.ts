import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataShareService {
  blogData: any[] = [];

  public preference: any = 1;

  constructor() {}
}
