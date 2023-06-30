import { KeyCloakApiService } from 'src/Services/key-cloak-api.service';
import { Component, OnInit } from '@angular/core';
import { Getdata, subdata } from 'src/app/model/model';
import { UserServicesService } from 'src/Services/user-services.service';
import { DataShareService } from 'src/Services/data-share.service';
import { Subscription } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { FeedbackformComponent } from '../feedbackform/feedbackform.component';

@Component({
  selector: 'app-user-body',
  templateUrl: './user-body.component.html',
  styleUrls: ['./user-body.component.css'],
})
export class UserBodyComponent implements OnInit {
  clickEventSubscription: Subscription;
  getdetails: any;
  // prefrences: firstdata[] = [];
  subPrefDeatils: subdata[] = [];

  sidenavtoggle: any;
  // isdropdownvisible:boolean = true;

  // torf:boolean = true

  ngOnInit(): void {
    this.sidenavtoggle = this.datashare.sidenavToggle;

    // console.warn(this.datashare.sidenavToggle);
    this.storesubpref();
    // this.getSubPref();


    // this.apiservices.isdropdownvisible=this.torf;
    // this.isdropdownvisible=this.apiservices.isdropdownvisible ;
  }

  constructor(
    private apiservices: UserServicesService,
    private keyclockapiservice: KeyCloakApiService,
    public datashare: DataShareService,
    private dialogRef: MatDialog,
  ) {
    this.clickEventSubscription = this.datashare
      .getclickEvent()
      .subscribe(() => {
        this.ngOnInit();
      });
  }

  isNull: boolean = false;
  selectedOption: any = 1;
  selectprefoption: any;
  selectcardoption: any = 0;

  selectedSubPrefrence: any = 0;

  GetData() {
    var pref = this.keyclockapiservice.getPrefence();
    this.apiservices.getperticulardetailsinsidedatauser(pref).subscribe((res) => {
      this.getdetails = res;
      console.log(this.getdetails.isCached);
      console.log(this.getdetails.myTodos);


    });
  }

  //this is for the dropdown of 3 preferance (sports,politics,technology)
  // firstdata() {
  //   this.apiservices.firstdata().subscribe((res) => {
  //     this.prefrences = res;
  //   });
  // }

  selectPrefrence(e: any) {
    this.selectedOption = e.target.value;
    // this.apiservices.saveUserPrefence(this.selectedOption);
    this.GetData();
  }

  storesubpref() {
    this.apiservices.savesubuserPreferencefordetails();
  }

  // onChangeSubPrefrence(e: any) {
  //   this.selectedSubPrefrence = e.target.value;
  //   this.apiservices.savesubuserPreferencefordetails(this.selectedSubPrefrence);

  //   var pref = this.keyclockapiservice.getPrefence();
  //   var subPrefDeatils = this.apiservices.readsubuserPreferencefordetails();
  //   this.apiservices
  //     .getperticulardetailsinsidedatauser(pref, subPrefDeatils)
  //     .subscribe((respones) => {
  //       this.getdetails = respones;

  //     });
  // }

  // getsubData() {
  //   var pref=this.keyclockapiservice.getPrefence();
  //   var subPrefDeatils=this.apiservices.readsubuserPreferencefordetails();

  //   this.apiservices.getperticulardetailsinsidedata(pref,subPrefDeatils).subscribe((respones) => {
  //     this.getdetails = respones;

  //   });
  // }

    // getSubPref() {
    //   var pref = this.keyclockapiservice.getPrefence();
    //   this.apiservices.getSubdatadeatails(pref).subscribe((response) => {
    //     this.subPrefDeatils = response;
    //   });
    // }

  headerdata(event: any) {
    this.getdetails = event;
    // console.log("Sent By Parent");
    // console.log(this.getdetails.myTodos);
    // console.log(event);

    if (this.getdetails.length === 0) {
      this.isNull = true;
    } else {
      this.isNull = false;
    }
  }



  openDialog() {
    this.dialogRef.open(FeedbackformComponent);
  }
}
