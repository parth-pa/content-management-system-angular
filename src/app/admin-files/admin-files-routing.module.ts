import { AdminFilesComponent } from './admin-files.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { BlogsComponent } from './components/Blogs/Blogs.component';

import { TechnologyComponent } from './components/technology/technology.component';
import { SportsComponent } from './components/sports/sports.component';

const routes: Routes = [
  {
    path: 'admin',
    component: AdminFilesComponent,
    children: [
      { path: 'Admin', component: AdminComponent },
      { path: 'Blogs', component: BlogsComponent },
      { path: 'Sports', component: SportsComponent },

      { path: 'Technologies', component: TechnologyComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminFilesRoutingModule {}
