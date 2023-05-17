import { UserServicesService } from 'src/Services/user-services.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Getdata, preferenceList, subdata } from 'src/app/model/model';
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

  isLogin?: boolean;
  opened = false;
  UserName: any;
  sidenavToggle:any ;
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
    this.getSubPref();
    this.getresponce();
    // this.onclick();

    // this.visibility = this.userapiservices.isVisible;
    // this.visibility = !this.visibility
  }
  getdeatils: Getdata[] = [];
  subPrefDeatils: subdata[] = [];
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
      preferenceName: 'Technologies',
      icon: ' fa-solid fa-microchip',
    },

    // {preferenceId:1 , preferenceName:'Sports' },
    // {preferenceId:2 , preferenceName:'Sports' },
    // {preferenceId:3 , preferenceName:'Sports' }
  ];

  preferenceChange(preferenceId: any) {
    this.datashare.preference = preferenceId;
    console.warn(preferenceId)
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
  ];

  onclickmenu() {
    if (this.sidenavToggle == true) {
      this.sidenavToggle = false;
      this.datashare.sidenavToggle = false;
      console.warn( this.datashare.sidenavToggle)
      this.refreshClick();
    } else {
      this.sidenavToggle = true;
      this.datashare.sidenavToggle = true;
      console.warn( this.datashare.sidenavToggle)
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

  onChangeSubPrefrence(e: any) {
    this.selectedSubPrefrence = e.target.value;
    this.userapiservices.savesubuserPreferencefordetails(
      this.selectedSubPrefrence
    );

    // var pref=this.keycloakapiservice.getPrefence();

    // this._apiService.getperticulardetailsinsidedata(pref,this.selectedSubPrefrence).subscribe((respones) => {
    //   this.getdeatils = respones;
    //   this.senddata.emit(this.getdeatils);
    // });
    this.getresponce();
  }

  getresponce() {
    var pref = this.keycloakapiService.getPrefence();
    var subpref = this.userapiservices.readsubuserPreferencefordetails();

    this.userapiservices
      .getperticulardetailsinsidedata(pref, subpref)
      .subscribe((respones) => {
        this.getdeatils = respones;
        this.senddata.emit(this.getdeatils);
      });
  }

  getSubPref() {
    var pref = this.keycloakapiService.getPrefence();
    console.log(pref);
    this.userapiservices.getSubdatadeatails(pref).subscribe((response) => {
      this.subPrefDeatils = response;
      // console.log(this.subPrefDeatils);
    });
  }

  // preferenceChange(preferenceValue?: number) {
  //   this.datashare.preference = preferenceValue;
  // }
}
