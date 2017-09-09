import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule, routingComponents } from './app.routing.module';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdToolbarModule } from '@angular/material';
import { MdIconModule } from '@angular/material';
import { MdGridListModule } from '@angular/material';
import { MdSidenavModule } from '@angular/material';
import { MdButtonModule } from '@angular/material';
import {MdCardModule} from '@angular/material';
import {MdInputModule} from '@angular/material';


import { ProfilePageModule } from './profile-page/profile-page.module';


import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component'
import { FooterComponent } from './components/footer/footer.component'



@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProfilePageModule,
    BrowserAnimationsModule,
    MdToolbarModule,
    MdIconModule,
    MdGridListModule,
    MdSidenavModule,
    MdButtonModule,
    MdCardModule,
    MdInputModule,
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
