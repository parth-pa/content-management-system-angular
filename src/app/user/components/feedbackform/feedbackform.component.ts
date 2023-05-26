import { UserServicesService } from 'src/Services/user-services.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable, Subscriber } from 'rxjs';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { MatDialog } from '@angular/material/dialog';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { LabelModule } from '@progress/kendo-angular-label';


@Component({
  selector: 'app-feedbackform',
  templateUrl: './feedbackform.component.html',
  styleUrls: ['./feedbackform.component.css']
})
export class FeedbackformComponent implements OnInit {
  isdropdownvisible?:boolean;
  // torf:boolean = false;


constructor(private user:UserServicesService){

}

  ngOnInit(): void {
    // this.user.isdropdownvisible=this.torf;
    this.isdropdownvisible=this.user.istorf;

  }
  blogForm = new FormGroup({
    name: new FormControl(),
    email: new FormControl('',[Validators.required, Validators.email]),
    phoneno: new FormControl('',[Validators.required, Validators.pattern("^[0-9]{10,12}$")]),
    feedback: new FormControl(),
  });

  onclick(){
    console.log(this.blogForm.value);

    // this.user.insertfeedback(this.blogForm.value).subscribe((data)=>{

    // })
  }

  submit(){
    this.user.insertfeedback(this.blogForm.value).subscribe((data)=>{

    });
  }
}
