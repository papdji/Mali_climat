import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutsPage } from './abouts.page';

const routes: Routes = [
  {
    path: '',
    component: AboutsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AboutsPageRoutingModule {}
