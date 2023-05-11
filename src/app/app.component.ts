import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { KeyCloakApiService } from 'src/Services/key-cloak-api.service';
import { preferenceList } from './model/model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'CMS';

  constructor(private _apiservice: KeyCloakApiService) {}
  ngOnInit() {
    this._apiservice.manageLogin()
  }

  PreList :preferenceList[] = [

    {preferenceId:1 , preferenceName:'Sports' },
    {preferenceId:2 , preferenceName:'Politics' },
    {preferenceId:3 , preferenceName:'Technologies' }
    // {preferenceId:1 , preferenceName:'Sports' },
    // {preferenceId:2 , preferenceName:'Sports' },
    // {preferenceId:3 , preferenceName:'Sports' }


  ];

}
