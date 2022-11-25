import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddPostComponent } from './add-post/add-post.component';
import { ViewPostComponent } from './view-post/view-post.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { RouterModule, Routes } from '@angular/router';



const myRoute:Routes=
[
  {
    path:"",
    component:AddPostComponent
  },
  {
    path:"add",
    component:AddPostComponent
  },
  {
    path:"view",
    component:ViewPostComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    AddPostComponent,
    ViewPostComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
