import { KeyCloakApiService } from 'src/Services/key-cloak-api.service';
import { Component, OnInit } from '@angular/core';
import { Getdata, subdata } from 'src/app/model/model';
import { UserServicesService } from 'src/Services/user-services.service';

@Component({
  selector: 'app-user-body',
  templateUrl: './user-body.component.html',
  styleUrls: ['./user-body.component.css']
})
export class UserBodyComponent implements OnInit{


  getdetails: Getdata[] = [];
  // prefrences: firstdata[] = [];
  subPrefDeatils: subdata[] = [];


  ngOnInit(): void {
    // this.firstdata();
    this.storesubpref();
    this.getsubData();
    this.getSubPref();

  }

  constructor(
    private apiservices: UserServicesService,
    private keyclockapiservice: KeyCloakApiService
  ) {}


  isDone: boolean = false;
  selectedOption: any = 1;
  selectprefoption: any;
  selectcardoption: any = 0;

  selectedSubPrefrence: any = 0;

  GetData() {
    var pref = this.keyclockapiservice.getPrefence();
    this.apiservices.getperticulardetailsinsidedata(pref).subscribe((res) => {
      this.getdetails = res;
      this.isDone = true;
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

  storesubpref(){
    this.apiservices.savesubuserPreferencefordetails();
  }

  onChangeSubPrefrence(e: any) {
    this.selectedSubPrefrence = e.target.value;
    this.apiservices.savesubuserPreferencefordetails(this.selectedSubPrefrence)

    var pref=this.keyclockapiservice.getPrefence();
    var subPrefDeatils=this.apiservices.readsubuserPreferencefordetails();
    this.apiservices.getperticulardetailsinsidedata(pref,subPrefDeatils).subscribe((respones) => {

      this.getdetails = respones;

  });
  }



  getsubData() {
    var pref=this.keyclockapiservice.getPrefence();
    var subPrefDeatils=this.apiservices.readsubuserPreferencefordetails();

    this.apiservices.getperticulardetailsinsidedata(pref,subPrefDeatils).subscribe((respones) => {
      this.getdetails = respones;

    });
  }


  getSubPref() {
    var pref =  this.keyclockapiservice.getPrefence();
    this.apiservices
      .getSubdatadeatails(pref)
      .subscribe((response) => {
        this.subPrefDeatils = response;
      });
  }

  headerdata(event: any){
    this.getdetails = event;
  }

}
