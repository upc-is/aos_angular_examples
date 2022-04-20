import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';

import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { MainContentComponent } from './main-content/main-content.component';
import { FooterContentComponent } from './footer-content/footer-content.component';

import { NewsApiService } from "./core/services/news-api.service";
import { LogoApiService } from "./core/services/logo-api.service";


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    MainContentComponent,
    FooterContentComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule
  ],
  providers: [
    NewsApiService,
    LogoApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
