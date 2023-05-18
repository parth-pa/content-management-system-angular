import { AdminFilesComponent } from './admin-files.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { BlogsComponent } from './components/Blogs/Blogs.component';

import { BlogComponent } from './components/blog/blog.component';

const routes: Routes = [
  {
    path: 'admin',
    component: AdminFilesComponent,
    children: [
      { path: 'Admin', component: AdminComponent },
      { path: 'Blogs', component: BlogsComponent },
      { path: 'Blog', component: BlogComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminFilesRoutingModule {}
