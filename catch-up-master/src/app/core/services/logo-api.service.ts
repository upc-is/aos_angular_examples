import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class LogoApiService {
  baseUrl = 'https://logo.clearbit.com/'
  constructor() { }

  getUrlToLogo(source: any) {
    return `${this.baseUrl}${new URL(source.url).host}`;
  }
}
