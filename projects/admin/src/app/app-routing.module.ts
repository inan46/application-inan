import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'data', loadChildren: () => import('./data/data.module').then(m => m.DataModule) }, { path: 'grid', loadChildren: () => import('./grid/grid.module').then(m => m.GridModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
