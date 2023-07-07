import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { KeyCloakApiService } from 'src/Services/key-cloak-api.service';
import { preferenceList } from './model/model';
import { HubConnection, HubConnectionBuilder } from '@microsoft/signalr';
import * as signalR from '@microsoft/signalr';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'CMS';
  private connection: HubConnection;
  constructor(
    private _apiservice: KeyCloakApiService,
    private toastr: ToastrService
  ) {
    // -- SignalR --
    this.connection = new HubConnectionBuilder()
      .withUrl('https://localhost:7082/serverHub', {
        skipNegotiation: true,
        transport: signalR.HttpTransportType.WebSockets,
      })
      .build();
  }

  async ngOnInit() {
    this._apiservice.manageLogin();

    // -- signalR --
    this.connection.on('ReceiveMessage', (message) => {
      console.warn(message);
      this.toastr.success(message);
    });

    try {
      await this.connection.start().then(() => {
        console.log('Connected to SignalR server ');
      });
    } catch (error) {
      console.warn('fail to connect signalR hub', error);
    }

    await this.connection.invoke('SendMessage');
  }

  // -- End of ngOninit --

  PreList: preferenceList[] = [
    { preferenceId: 1, preferenceName: 'Sports' },
    { preferenceId: 2, preferenceName: 'Politics' },
    { preferenceId: 3, preferenceName: 'Technologies' },
    // {preferenceId:1 , preferenceName:'Sports' },
    // {preferenceId:2 , preferenceName:'Sports' },
    // {preferenceId:3 , preferenceName:'Sports' }
  ];
}
