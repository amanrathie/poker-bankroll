import { NgModule } from '@angular/core';
import { CommonModule, HashLocationStrategy, LocationStrategy } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';

import {CallbackComponent} from './callback/callback.component';
// import { NotFoundComponent } from './pages/not-found/not-found.component';


const routes: Routes =[
      { path: 'home',      component: HomeComponent },
      { path: 'callback',  component: CallbackComponent},
      { path: '',          redirectTo: 'home', pathMatch: 'full' },
      // { path: '**',        component: NotFoundComponent },
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [

  ],
  exports: [
    RouterModule
  ],
})
export class AppRoutingModule { }
