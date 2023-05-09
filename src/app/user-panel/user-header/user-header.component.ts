import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Getdata, subdata } from 'src/app/model/model';
import { KeyCloakApiService } from 'src/Services/key-cloak-api.service';
import { UserServicesService } from 'src/Services/user-services.service';

@Component({
  selector: 'app-user-header',
  templateUrl: './user-header.component.html',
  styleUrls: ['./user-header.component.css']
})
export class UserHeaderComponent {
  getdeatils : Getdata[] = []
  subPrefDeatils: subdata[] = [];
  selectedSubPrefrence: any = 0 ;
  selectedOption:any
  opened = false;


  userType?:string
  isLogin?:boolean

  ngOnInit(): void {
    this.userType = this.keycloakapiservice.userType
    this.isLogin = this.keycloakapiservice.isLogin
    this.getSubPref();
    this.getresponce();

  }
  constructor(private _apiService:UserServicesService, private _router: Router,private keycloakapiservice:KeyCloakApiService){}


  @Output() senddata = new EventEmitter<any>();


  onChangeSubPrefrence(e: any) {

    this.selectedSubPrefrence = e.target.value;
    this._apiService.savesubuserPreferencefordetails(this.selectedSubPrefrence);

    // var pref=this.keycloakapiservice.getPrefence();

    // this._apiService.getperticulardetailsinsidedata(pref,this.selectedSubPrefrence).subscribe((respones) => {
    //   this.getdeatils = respones;
    //   this.senddata.emit(this.getdeatils);
    // });
    this.getresponce();

}

getresponce()
{
  var pref=this.keycloakapiservice.getPrefence();
  var subpref=this._apiService.readsubuserPreferencefordetails();

  this._apiService.getperticulardetailsinsidedata(pref,subpref).subscribe((respones) => {
    this.getdeatils = respones;
    this.senddata.emit(this.getdeatils);
  });
}


  getSubPref() {
    var pref =  this.keycloakapiservice.getPrefence();
    // console.log(pref);
    this._apiService
      .getSubdatadeatails(pref)
      .subscribe((response) => {
        this.subPrefDeatils = response;
        // console.log(this.subPrefDeatils);
      });
  }

  logOut() {
    this.keycloakapiservice.remove();
    this._router.navigate(['keycloakLogin']);
    this.opened = false;
  }
}
