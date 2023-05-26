import { Component, OnInit } from '@angular/core';
import { feed } from 'src/app/model/model';
import { ServicesService } from 'src/Services/services.service';

@Component({
  selector: 'app-feedbackblog',
  templateUrl: './feedbackblog.component.html',
  styleUrls: ['./feedbackblog.component.css'],
})
export class FeedbackblogComponent implements OnInit {
  constructor(private obj: ServicesService) {}

  ngOnInit(): void {
    this.Approvedata();
  }

  feedbackList: feed[] = [];

  Approvedata() {
    this.obj.feedbackdata().subscribe((data) => {
      this.feedbackList = data;
    });
  }
}
