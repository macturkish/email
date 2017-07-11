import { NgModule }             from '@angular/core';
import { RouterModule, Routes, RouterOutlet } from '@angular/router';

import { DashboardComponent } from './dashboard.component';
import { OverviewComponent } from './overview/overview.component';

const APP_DASHBOARD_ROUTES: Routes = [
  { path: '', redirectTo: 'overview', pathMatch: 'full'  },
  { path: 'overview', component: OverviewComponent },
  { path: 'emails', component: DashboardComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(APP_DASHBOARD_ROUTES)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
