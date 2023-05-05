import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/Services/services.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit{

constructor(public obj:ServicesService){}


  ngOnInit(): void {

    this.obj.mydata = " Gamit bhai";
  }




}
