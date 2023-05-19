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

  updateData?: any;
  addBlog: dataList[] = [];
  preferance_id?: any;
  editmode: boolean = true;
  updateImg?: any;
  // showimage?: any;
  img?: any = '';
  buttonpress?: any;

  ngOnInit(): void {
    this.buttonpress = this.datashare.buttonpress;
    this.blogForm.reset();
    this.blogdata = this.datashare.blogData;
    this.updateData = this.blogdata;
    this.img1();
    // this.img = this.updateData.image;
    this.preferance_id = this.datashare.preference;
    this.getSubPreference(this.preferance_id);
  }

  blogdata: Array<dataList> = [];

  add: dataList = new dataList();
  topic: topicList[] = [];
  // { id: 1, name: 'ankur', pref_id: 1 }

  blogForm = new FormGroup({
    title: new FormControl(''),
    description: new FormControl(),
    image: new FormControl(),
    prefId: new FormControl(),
    subPreferenceId: new FormControl('', [Validators.required]),
  });

  onclick() {
    // this.preferance_id = this.datashare.preference;
    this.add.id = this.updateData.id;
    this.add.title = this.blogForm.value.title;
    this.add.description = this.blogForm.value.description;
    this.add.image = this.img;
    this.add.prefId = this.preferance_id;
    this.add.subPreferenceId = this.blogForm.value.subPreferenceId;

    console.warn(this.blogForm);

    if (this.editmode == true) {
      this.obj.updateCmsData(this.add).subscribe((res) => {
        this.clearForm();
        // this.blogForm.reset();
        this.getSubPreference(this.preferance_id);
        console.warn(this.add);
        this.refreshClick();
        this.clearForm();
        this.datashare.blogData;
      });
    }

    if (this.editmode == false) {
      this.obj.postCmsData(this.add).subscribe(() => {
        this.refreshClick();
        this.clearForm();
      });
    }
  }

  refreshClick() {
    this.datashare.sendClickEvent();
  }

  sendCmsData() {
    this.editmode = false;
    console.warn('Hello');
  }

  updateCmsData() {
    this.editmode = true;
    console.warn(this.updateData.image);
    this.datashare.buttonpress = false;
  }

  getSubPreference(value: any) {
    this.user.getSubdatadeatails(value).subscribe((data) => {
      this.topic = data;
    });
  }

  clearForm() {
    this.img = 'dsfds';
    this.blogForm.reset();
    this.refreshClick();

    this.datashare.buttonpress = false;
  }

  img1() {
    if ((this.editmode = false)) {
      this.img = this.updateData.image;
    }
  }

  // *********** convert image into base64 *************

  onchange = ($event: Event) => {
    const target = $event.target as HTMLInputElement;
    const file: File = (target.files as FileList)[0];

    console.log(file);

    this.converBase64(file);
  };

  converBase64(file: File) {
    const observable = new Observable((subscriber: Subscriber<any>) => {
      this.readFile(file, subscriber);
    });

    observable.subscribe((d) => {
      console.log(d);
      this.img = d;
      console.log(this.img);
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

  // showimage2(base64:any){
  //      fetch(base64)
  //      .then(res => {

  //        return res.blob();
  //      })
  //      .then(blob =>{

  //        console.log(blob)
  //      })

  // }
}
