import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('content/Module').then(m => m.DashboardModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('content/Module').then(m => m.DashboardModule)
    },
    {
      path: 'data',
      loadChildren: () => import('admin/Module').then(m => m.DataModule)
      }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
