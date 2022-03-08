import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AlertformPage } from './alertform.page';

const routes: Routes = [
  {
    path: '',
    component: AlertformPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlertformPageRoutingModule {}
