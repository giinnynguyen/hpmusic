import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';
import {RegisterRoutingModule} from "./components/register/register-routing.module";

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./components/homepage/homepage.module').then(m => m.HomepageModule)
  },
  {
    path: 'play',
    loadChildren: () => import('./components/play/play.module').then(m => m.PlayModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    RegisterRoutingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
