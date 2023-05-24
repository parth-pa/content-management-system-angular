import { FeedbackblogComponent } from './components/feedbackblog/feedbackblog.component';
import { AdminFilesComponent } from './admin-files.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';

import { BlogComponent } from './components/blog/blog.component';
import { RestoreBlogComponent } from './components/restore-blog/restore-blog.component';
import { ApproveBlogComponent } from './components/approve-blog/approve-blog.component';

const routes: Routes = [
  {
    path: 'admin',
    component: AdminFilesComponent,
    children: [
      { path: 'Admin', component: AdminComponent },
      { path: 'Blog', component: BlogComponent },
      { path: 'deletedblog', component: RestoreBlogComponent },
      { path: 'approveBlog', component: ApproveBlogComponent },
      {path: 'feedbackblog',component:FeedbackblogComponent}
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminFilesRoutingModule {}
