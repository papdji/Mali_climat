import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'accueil',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'current',
    loadChildren: () => import('./pages/current/current.module').then( m => m.CurrentPageModule)
  },
  {
    path: 'forecast',
    loadChildren: () => import('./pages/forecast/forecast.module').then( m => m.ForecastPageModule)
  },
  {
    path: 'alertes',
    loadChildren: () => import('./pages/alertes/alertes.module').then( m => m.AlertesPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'accueil',
    loadChildren: () => import('./pages/accueil/accueil.module').then( m => m.AccueilPageModule)
  },
  {
    path: 'tabs',
    loadChildren: () => import('./pages/tabs/tabs.module').then( m => m.TabsPageModule)
  },

  {
    path: 'abouts',
    loadChildren: () => import('./pages/abouts/abouts.module').then( m => m.AboutsPageModule)
  },
  {
    path: 'confidentialite',
    loadChildren: () => import('./pages/confidentialite/confidentialite.module').then( m => m.ConfidentialitePageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'alertform',
    loadChildren: () => import('./pages/alertform/alertform.module').then( m => m.AlertformPageModule)
  },
  {
    path: 'recommendation',
    loadChildren: () => import('./pages/recommendation/recommendation.module').then( m => m.RecommendationPageModule)
  },
  {
    path: 'conditions',
    loadChildren: () => import('./pages/conditions/conditions.module').then( m => m.ConditionsPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./pages/profile/profile.module').then( m => m.ProfilePageModule)
  }


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

