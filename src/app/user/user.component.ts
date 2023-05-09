import { Component, OnInit } from '@angular/core';
import { KeyCloakApiService } from 'src/Services/key-cloak-api.service';
import { UserServicesService } from 'src/Services/user-services.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  data: any = [];

  constructor(private _apiservice: UserServicesService) {}

  ngOnInit(): void {}
}
