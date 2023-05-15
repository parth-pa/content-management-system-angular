import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { topicList } from 'src/app/model/model';
import { DataShareService } from 'src/Services/data-share.service';
import { AddBlogDataComponent } from '../add-blog-data/add-blog-data.component';

@Component({
  selector: 'app-Blog',
  templateUrl: './Blogs.component.html',
  styleUrls: ['./Blogs.component.css'],
})
export class BlogsComponent {
  constructor(
    private dialogRef: MatDialog,
    public datashare: DataShareService
  ) {}

  openDialog(value?: any) {
    this.dialogRef.open(AddBlogDataComponent);
  }

  preference: any = this.datashare.preference;

  subpreference: topicList[] = [];
}
