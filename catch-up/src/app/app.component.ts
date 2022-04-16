import {Component, OnInit} from '@angular/core';
import {NewsApiService} from "./core/services/news-api.service";
import {LogoApiService} from "./core/services/logo-api.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CatchUp';
}
