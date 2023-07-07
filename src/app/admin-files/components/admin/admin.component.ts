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
import { Subscription } from 'rxjs';

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
  isdropdownvisible: boolean = false;
  submenu?: boolean = true;
  submenu_approve?: boolean = true;
  selectedSubPrefrence: any = 0;
  selectedOption: any;
  clickEventSubscription: Subscription;

  // torf:boolean = false

  constructor(
    public datashare: DataShareService,
    private _router: Router,
    private keycloakapiService: KeyCloakApiService,
    private userapiservices: UserServicesService
  ) {
    this.clickEventSubscription = this.userapiservices
      .getclickEvent()
      .subscribe(() => {
        this.ngOnInit();
        // this.getCmsDatas(this.preferance_id);
      });
  }
  ngOnInit(): void {
    this.isLogin = this.keycloakapiService.isLogin;
    this.userType = this.keycloakapiService.userType;
    this.UserName = this.keycloakapiService.getName();
    this.sidenavToggle = this.datashare.sidenavToggle;
    this.preferance_id = this.datashare.preference;
    this.isdropdownvisible = false;
    this.homeclick();

    this.getSubPref();
    this.getresponce();
  }

  getdeatils: Getdata[] = [];
  subPrefDeatils: subdata[] = [];
  DataList: dataList[] = [];
  PreList: preferenceList[] = [
    {
      preferenceId: 1,
      preferenceName: 'Sports',
      icon: 'fa-solid fa-person-biking',
      routerlink: '/admin/Blog',
    },
    {
      preferenceId: 2,
      preferenceName: 'Politics',
      icon: 'fa-solid fa-landmark-dome',
      routerlink: '/admin/Blog',
    },
    {
      preferenceId: 3,
      preferenceName: 'Technology',
      icon: ' fa-solid fa-microchip',
      routerlink: '/admin/Blog',
    },
  ];

  preferenceChange(preferenceId: any, preferenceName: any) {
    this.datashare.preference = preferenceId;
    this.datashare.preferenceName = preferenceName;
    this.homeclick();
    this.submenu_approve = true;
    this.submenu = true;
    this.refreshClick();
  }

  // ******** side nav data *******************

  onclickmenu() {
    if (this.sidenavToggle == true) {
      this.sidenavToggle = false;
      this.submenu = true;
      this.submenu_approve = true;
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

    this.getresponce();
  }

  getresponce() {
    var pref = this.keycloakapiService.getPrefence();
    var subpref = this.userapiservices.readsubuserPreferencefordetails();
    // console.log(subpref);
    // console.log(pref);

    this.userapiservices
      .getperticulardetailsinsidedatauser(pref, subpref)
      .subscribe((respones) => {
        this.getdeatils = respones;
        // console.log(respones);

        this.senddata.emit(this.getdeatils);
      });
  }

  getSubPref() {
    var pref = this.keycloakapiService.getPrefence();
    this.userapiservices.getSubdatadeatails(pref).subscribe((response) => {
      this.subPrefDeatils = response;
    });
  }

  deleted_data(value: any) {
    this.datashare.deleted_data = value;
    this.refreshClick();
  }

  change() {
    this.refreshClick();
  }

  homeclick() {
    this.isdropdownvisible = true;
  }
  deleteclick() {
    this.isdropdownvisible = false;
    this.sidenavToggle = true;
  }

  // -- drop down --
  sub_menu() {
    if (this.submenu == true) {
      this.submenu = false;
      this.submenu_approve = true;
    } else {
      this.submenu = true;
    }
  }

  // -- drop down --
  sub_menu_approvedata() {
    if (this.submenu_approve == true) {
      this.submenu_approve = false;
      this.submenu = true;
    } else {
      this.submenu_approve = true;
    }
  }

  feedback() {
    this.submenu_approve = true;
    this.submenu = true;
  }
}
