import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Getdata, preferenceList, subdata } from 'src/app/model/model';
import { DataShareService } from 'src/Services/data-share.service';
import { KeyCloakApiService } from 'src/Services/key-cloak-api.service';
import { UserServicesService } from 'src/Services/user-services.service';

@Component({
  selector: 'app-user-header',
  templateUrl: './user-header.component.html',
  styleUrls: ['./user-header.component.css'],
})
export class UserHeaderComponent {
  getdeatils: Getdata[] = [];
  subPrefDeatils: subdata[] = [];
  selectedSubPrefrence: any = 0;
  selectedOption: any;
  opened = false;

  userType?: string;
  isLogin?: boolean;
  UserName? : any;
  isNull?:boolean;
  sidenavToggle: boolean = true;

  ngOnInit(): void {
    this.userType = this.keycloakapiservice.userType;
    this.isLogin = this.keycloakapiservice.isLogin;
    this.getSubPref();
    this.getresponce();
    this.UserName= this.keycloakapiservice.getName();
  }
  constructor(
    private _apiService: UserServicesService,
    private _router: Router,
    private keycloakapiservice: KeyCloakApiService,
    public datashare: DataShareService
  ) {}

  @Output() senddata = new EventEmitter<any>( );

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

  getresponce() {
    var pref = this.keycloakapiservice.getPrefence();
    var subpref = this._apiService.readsubuserPreferencefordetails();

    this._apiService
      .getperticulardetailsinsidedata(pref, subpref)
      .subscribe((respones) => {
        this.getdeatils = respones;
        this.senddata.emit(this.getdeatils);
      });
  }

  getSubPref() {
    var pref = this.keycloakapiservice.getPrefence();
    // console.log(pref);
    this._apiService.getSubdatadeatails(pref).subscribe((response) => {
      this.subPrefDeatils = response;
      // console.log(this.subPrefDeatils);
    });
  }



  preferenceChange(preferenceValue?: number) {
    this.datashare.preference = preferenceValue;
  }

  logOut() {
    this.keycloakapiservice.remove();
    this._router.navigate(['auth/login'],{replaceUrl:true});
    this.opened = false;
  }





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
  ];

    preferenssceChange(preferenceId: any) {
      this.datashare.preference = preferenceId;
      // console.warn(preferenceId);
    }
    onclickmenu() {
      if (this.sidenavToggle == true) {
        this.sidenavToggle = false;
      } else {
        this.sidenavToggle = true;
      }
    }
}
