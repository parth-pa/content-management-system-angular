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

  subpreference: topicList[] = [
    { blogId: 1, topic: 'Cricket', preferenceId: 1 },
    { blogId: 1, topic: 'Football', preferenceId: 3 },
    { blogId: 1, topic: 'Hockey', preferenceId: 2 },
    { blogId: 2, topic: 'Gujarat', preferenceId: 4 },
    { blogId: 2, topic: 'India', preferenceId: 5 },
    { blogId: 2, topic: 'World', preferenceId: 6 },
    { blogId: 3, topic: 'Mobile', preferenceId: 7 },
    { blogId: 3, topic: 'Laptop', preferenceId: 8 },
    { blogId: 3, topic: 'Innovative', preferenceId: 9 },
  ];
}
