import { Injectable } from '@angular/core';
import {HttpClient} from  '@angular/common/http';
import { Observable } from 'rxjs';
import { Getdata, subdata } from 'src/app/model/model';




@Injectable({
  providedIn: 'root'
})
export class UserServicesService {

  isVisible:boolean = true;
  getPrefence() {
    throw new Error('Method not implemented.');
  }
  readPrefence() {
    throw new Error('Method not implemented.');
  }
  remove() {
    throw new Error('Method not implemented.');
  }

  constructor(private http:HttpClient) { }

// public saveUserPrefence(preferance:any) {
//     return localStorage.setItem('Preferance',preferance)
//  }


//  public readPrefence() {
//      return localStorage.getItem('Preferance')
//  }

 public savesubuserPreferencefordetails(perfomance: any = 0){
  return localStorage.setItem('detail',perfomance)
 }

 public readsubuserPreferencefordetails(){
  return localStorage.getItem('detail')
 }

 baseURL : string = 'https://localhost:7135/Cms';

//  public getdata(id:any):Observable <Getdata[]>{
//    return this.http.get<Getdata[]>('https://localhost:7082/api/User/getid?id='+ id);
//  }

// this api is for the preference
 // public firstdata():Observable<firstdata[]>{
 //   return this.http.get<firstdata[]>('https://localhost:7135/api/Cms/preference');
 // }

 // public getdatadetails(id:any,id1:any):Observable <Getdata[]>{
   // return this.http.get<Getdata[]>('https://localhost:7135/api/Cms/getinnerdata?id='+id + '&id1=' + id1);
 // }

 public getSubdatadeatails(id:any):Observable<subdata[]>{
   return this.http.get<subdata[]>('https://localhost:7082/api/User/getsubs?id='+id);
 }

 public getperticulardetailsinsidedata(id:any, id1?:any):Observable<Getdata[]>{
   return this.http.get<Getdata[]>('https://localhost:7082/api/User/getinsindedatadetalils?id='+id+ '&id1='+id1);
 }
}



