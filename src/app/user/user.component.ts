
import { Component, OnInit } from '@angular/core';
import { KeyCloakApiService } from 'src/Services/key-cloak-api.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  data: any = [];

  constructor(private _apiservice: KeyCloakApiService) {}

  ngOnInit(): void {

    this._apiservice.wetherData().subscribe((response) => {
      console.warn(response);
      this.data = response;
    });
  }
}
