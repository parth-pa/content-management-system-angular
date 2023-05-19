import { UserServicesService } from 'src/Services/user-services.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import {
  dataList,
  Getdata,
  preferenceList,
  subdata,
} from 'src/app/model/model';
import { DataShareService } from 'src/Services/data-share.service';
import { KeyCloakApiService } from 'src/Services/key-cloak-api.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent implements OnInit {
  refreshClick() {
    this.datashare.sendClickEvent();
  }

  userType?: string;
  preferance_id: any;
  isLogin?: boolean;
  opened = false;
  UserName: any;
  sidenavToggle: any;
  visibility?: boolean = false;

  selectedSubPrefrence: any = 0;
  selectedOption: any;

  constructor(
    public datashare: DataShareService,
    private _router: Router,
    private keycloakapiService: KeyCloakApiService,
    private userapiservices: UserServicesService
  ) {}
  ngOnInit(): void {
    this.isLogin = this.keycloakapiService.isLogin;
    this.userType = this.keycloakapiService.userType;
    this.UserName = this.keycloakapiService.getName();
    this.sidenavToggle = this.datashare.sidenavToggle;
    this.preferance_id = this.datashare.preference;
    this.getSubPref();
    this.getresponce();
    // this.getresponseforadmin();
    // this.onclick();

    // this.visibility = this.userapiservices.isVisible;
    // this.visibility = !this.visibility
  }
  getdeatils: Getdata[] = [];
  subPrefDeatils: subdata[] = [];
  DataList: dataList[] = [];
  PreList: preferenceList[] = [
    {
      preferenceId: 1,
      preferenceName: 'Sports',
      icon: 'fa-solid fa-person-biking',
    },
    {
      preferenceId: 2,
      preferenceName: 'Politics',
      icon: 'fa-solid fa-landmark-dome',
    },
    {
      preferenceId: 3,
      preferenceName: 'Technology',
      icon: ' fa-solid fa-microchip',
    },
    // {
    //   preferenceId: 5,
    //   preferenceName: 'Blog',
    //   icon: ' fa-solid fa-person-biking',
    // },
  ];

  preferenceChange(preferenceId: any, preferenceName: any) {
    this.datashare.preference = preferenceId;
    this.datashare.preferenceName = preferenceName;

    // console.warn(preferenceId)
    this.refreshClick();
    // console.warn(preferenceId);
  }

  // ******** side nav data *******************
  //  onclick(){
  //   if(this.visibility = true){
  //     this.visibility = false
  //   }
  //   else if(this.visibility = false){
  //    this.visibility=true
  //   }
  // }

  list = [
    {
      number: '1',
      name: 'admin/sports',
      icon: 'fa-solid fa-house',
    },
    {
      number: '2',
      name: 'admin/sports',
      icon: 'fa-solid fa-house',
    },
    {
      number: '3',
      name: 'admin/sports',
      icon: 'fa-solid fa-house',
    },
    {
      number: '4',
      name: 'user',
      icon: 'fa-solid fa-house',
    },
    {
      number: '1',
      name: 'Blog',
      icon: 'fa-solid fa-house',
    },
  ];

  onclickmenu() {
    if (this.sidenavToggle == true) {
      this.sidenavToggle = false;
      this.datashare.sidenavToggle = false;
      this.refreshClick();
    } else {
      this.sidenavToggle = true;
      this.datashare.sidenavToggle = true;
      this.refreshClick();
    }
  }
  logOut() {
    this.keycloakapiService.remove();
    this._router.navigate(['auth/login'], { replaceUrl: true });
    this.opened = false;
  }

  // new form here
  @Output() senddata = new EventEmitter<any>();
  // @Output() senddataforadmin = new EventEmitter<any>();

  onChangeSubPrefrence(e: any) {
    this.selectedSubPrefrence = e.target.value;
    this.userapiservices.savesubuserPreferencefordetails(
      this.selectedSubPrefrence
    );

    // this.senddataforadmin.emit(this.selectedSubPrefrence);
    // console.log(this.selectedSubPrefrence);

    // var pref=this.keycloakapiservice.getPrefence();

    // this._apiService.getperticulardetailsinsidedata(pref,this.selectedSubPrefrence).subscribe((respones) => {
    //   this.getdeatils = respones;
    //   this.senddata.emit(this.getdeatils);
    // });
    this.getresponce();
    // this.getresponseforadmin();
  }

  // getresponseforadmin() {
  //   console.log(this.preferance_id);
  //   var subpref = this.userapiservices.readsubuserPreferencefordetails();
  //   console.log(subpref);

    // this.userapiservices
    //   .getperticulardetailsinsidedata(this.preferance_id, subpref)
    //   .subscribe((respones) => {
    //     this.DataList = respones;
    //     this.senddataforadmin.emit(this.DataList);
    //     console.log(this.DataList);
    //   });
  // }

  getresponce() {
    var pref = this.keycloakapiService.getPrefence();
    var subpref = this.userapiservices.readsubuserPreferencefordetails();
    console.log(subpref);
    console.log(pref);

    this.userapiservices
      .getperticulardetailsinsidedata(pref, subpref)
      .subscribe((respones) => {
        this.getdeatils = respones;
        console.log(respones);

        this.senddata.emit(this.getdeatils);
        // console.log(this.getdeatils);
      });
  }

  getSubPref() {
    var pref = this.keycloakapiService.getPrefence();
    // console.log(pref);
    this.userapiservices.getSubdatadeatails(pref).subscribe((response) => {
      this.subPrefDeatils = response;
      // console.log(this.subPrefDeatils);
    });
  }

  // preferenceChange(preferenceValue?: number) {
  //   this.datashare.preference = preferenceValue;
  // }

  empty() {}
}
