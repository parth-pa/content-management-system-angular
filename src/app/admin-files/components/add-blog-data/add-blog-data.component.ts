import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { dataList, dataList2, topicList } from 'src/app/model/model';

import { ServicesService } from 'src/Services/services.service';
import { UserServicesService } from 'src/Services/user-services.service';

import { MatDialog } from '@angular/material/dialog';
import { Observable, Subscriber } from 'rxjs';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { DataShareService } from 'src/Services/data-share.service';

@Component({
  selector: 'app-add-blog-data',
  templateUrl: './add-blog-data.component.html',
  styleUrls: ['./add-blog-data.component.css'],
})
export class AddBlogDataComponent implements OnInit {
  public Editor = ClassicEditor;

  constructor(
    private obj: ServicesService,
    public datashare: DataShareService,
    private user: UserServicesService
  ) {}

  // -- Variables declared -- //
  updateData?: any;
  preferance_id?: any;
  editmode: boolean = false;
  updateImg?: any;
  img?: any = '';
  buttonpress?: any;
  Formmode?: any = 'Add Data';

  // -- Arrays and List -- //

  blogdata: Array<dataList> = [];
  add: dataList = new dataList(); // temprarly add form data and send to api link
  topic: topicList[] = []; // temp to add topic list
  addBlog: dataList[] = [];
  resetform: dataList[] = [
    {
      id: 0,
      title: ' ',
      description: ' ',
      image: ' ',
      prefId: 0,
      subPreferenceId: 0,
      approved: false,
    },
  ];

  ngOnInit(): void {
    this.buttonpress = this.datashare.buttonpress;
    this.blogdata = this.datashare.blogData; // get data from other componet to fill in form to update
    this.updateData = this.blogdata; // assigning data to varibale or array
    this.img = this.updateData.image; //  to get image differently to overide if user insert diffrent img
    this.preferance_id = this.datashare.preference; // get preference id from admin comp to auto fill in form
    this.getSubPreference(this.datashare.preference); // same getting subprefernce
    this.formMode(); // it will show form should show edit or insert button and many more like heading
  }

  // -- Form configure for two way binding -- //
  blogForm = new FormGroup({
    title: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    image: new FormControl(),
    prefId: new FormControl(),
    subPreferenceId: new FormControl('', [Validators.required]),
  });

  // -- It will add data in add(array) from form  -- //

  onclick() {
    this.add.id = this.updateData.id; // no need when inserting used when there is update request
    this.add.title = this.blogForm.value.title; // adding from form (ngmodel is used)
    this.add.description = this.blogForm.value.description;
    this.add.image = this.img; // add after converting into base64
    this.add.prefId = this.preferance_id; // comming from admin comp
    this.add.subPreferenceId = this.blogForm.value.subPreferenceId;

    // -- Update  -- //
    if (this.editmode == true) {
      this.obj.updateCmsData(this.add).subscribe((res) => {
        this.getSubPreference(this.preferance_id);
        // console.warn(this.add);
        this.refreshClick();
        this.clearForm();
      });
    }

    // -- Insert -- //
    if (this.editmode == false) {
      // console.warn(this.add);
      this.obj.postCmsData(this.add).subscribe(() => {
        this.refreshClick();
        this.clearForm();
      });
    }
  }

  sendCmsData() {
    this.editmode = false; // Only change mode for insert and update
  }

  updateCmsData() {
    this.editmode = true; // Only change mode for insert and update
    this.datashare.buttonpress = false;
  }

  // -- used to refresh page -- //
  refreshClick() {
    this.datashare.sendClickEvent();
  }

  // -- used for dropdown list subpreferance -- //

  getSubPreference(value: any) {
    this.user.getSubdatadeatails(value).subscribe((data) => {
      this.topic = data;
    });
  }

  clearForm() {
    this.refreshClick();
    this.datashare.blogData = this.resetform;
    this.datashare.buttonpress = false;
  }

  // *********** convert image into base64 *************

  onchange = ($event: Event) => {
    const target = $event.target as HTMLInputElement;
    const file: File = (target.files as FileList)[0];

    // console.log(file);

    this.converBase64(file);
  };

  converBase64(file: File) {
    const observable = new Observable((subscriber: Subscriber<any>) => {
      this.readFile(file, subscriber);
    });

    observable.subscribe((d) => {
      // console.log(d);
      this.img = d;
      // console.log(this.img);
      // this.showimage =this.showimage2(d)
    });
  }

  readFile(file: File, subscriber: Subscriber<any>) {
    const filereader = new FileReader();

    filereader.readAsDataURL(file);

    filereader.onload = () => {
      subscriber.next(filereader.result);

      subscriber.complete();
    };

    filereader.onerror = () => {
      subscriber.error();
      subscriber.complete();
    };
  }

  // -- used to show update or insert mode  -- //
  formMode() {
    if (this.buttonpress == true) {
      this.Formmode = 'Edit data';
    } else {
      this.Formmode = 'Add data';
    }
  }

  onchange2(event: any) {
    // console.warn(event);
  }
}
