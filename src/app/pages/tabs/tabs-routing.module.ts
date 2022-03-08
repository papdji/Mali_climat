import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children:[
      {path: "home", loadChildren: ()=> import("src/app/pages/home/home.module").then(res =>res.HomePageModule)},
      {path: "current", loadChildren: ()=> import("src/app/pages/current/current.module").then(res =>res.CurrentPageModule)},
      {path: "forecast", loadChildren: ()=> import("src/app/pages/forecast/forecast.module").then(res =>res.ForecastPageModule)},
      {path: "alertes", loadChildren: ()=> import("src/app/pages/alertes/alertes.module").then(res =>res.AlertesPageModule)},
      {path: "alertform", loadChildren: ()=> import("src/app/pages/alertform/alertform.module").then(res =>res.AlertformPageModule)},
      {path: "abouts", loadChildren: ()=> import("src/app/pages/abouts/abouts.module").then(res =>res.AboutsPageModule)},
      {path: "confidentialite", loadChildren: ()=> import("src/app/pages/confidentialite/confidentialite.module").then(res =>res.ConfidentialitePageModule)},
      {path: "recommendation", loadChildren: () => import('src/app/pages/recommendation/recommendation.module').then( m => m.RecommendationPageModule)}
    ],
  },
  {
    path: '',
    redirectTo: "tabs/home",
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
