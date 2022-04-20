import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class NewsApiService {
  apiKey = '3173de333e144c829bb2d22cbb8cafd3';

  constructor(private http: HttpClient) { }

  initArticles() {
    return this.getArticlesBySourceId('bbc-news');
  }
  getSources() {
    return this.http.get(`https://newsapi.org/v2/top-headlines/sources?language=en&apiKey=${this.apiKey}`);
  }
  getArticlesBySourceId(sourceId: string) {
    return this.http.get(`https://newsapi.org/v2/top-headlines?sources=${sourceId}&apiKey=${this.apiKey}`);
  }
}
