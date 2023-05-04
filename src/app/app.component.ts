import { Component } from '@angular/core';
import { ServicesService } from './services.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CMS';


  constructor(private obj:ServicesService){ }


  getCmsDatas(){

    // this.obj.getCmsData().subscribe(data =>{

    //   // this.sportsList = data;

    //   // console.warn(data)
    // })

}
}
