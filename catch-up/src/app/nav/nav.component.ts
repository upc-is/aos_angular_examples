import {Component, EventEmitter, OnInit, Output} from '@angular/core';

import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

import {NewsApiService} from "../core/services/news-api.service";
import {LogoApiService} from "../core/services/logo-api.service";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  sources: Array<any> = [];
  articles: Array<any>= [];


  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver,
              private newsApi: NewsApiService,
              private logoApi: LogoApiService) {}

  ngOnInit(): void {
    this.newsApi.getSources()
      .subscribe((data: any) => {
        this.sources = data['sources'];
        this.sources.map(source => source.urlToLogo = this.logoApi.getUrlToLogo(source));
        console.log(this.sources);
        this.searchArticlesForSource(this.sources[0]);
      });
  }

  onSourceSelected(source: any) {
    console.log(source.name);
    this.searchArticlesForSource(source);
  }

  searchArticlesForSource(source: any) {
    console.log(`selected source is: ${source.id}`);
    this.newsApi.getArticlesBySourceId(source.id).subscribe((data: any) => {
      this.articles = data['articles'];
      this.articles.map(article => {article.source.urlToLogo = source.urlToLogo; article.source.url = source.url; });
      console.log(this.articles);
    });
  };


}
