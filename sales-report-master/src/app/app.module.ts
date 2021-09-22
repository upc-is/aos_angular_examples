import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ReportComponent } from './sales/report/report.component';
import { DatePipe } from "@angular/common";
import { ItemListComponent } from './sales/item-list/item-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ReportComponent,
    ItemListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
