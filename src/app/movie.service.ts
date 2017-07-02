import { Injectable } from '@angular/core';
import {JsonpModule, Jsonp, Response} from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class MovieService {
  apiKey:string;

  constructor(private _jsonp:Jsonp) {
    this.apiKey="eba6955a2c5a4dace95fa4773c9bf2bc";
    console.log('Movie service initia..');
  }
  getPopular(){
    return this._jsonp.get('https://api.themoviedb.org/3/discover/movie?callback=JSONP_CALLBACK&sort_by=popularity.desc&api_key=eba6955a2c5a4dace95fa4773c9bf2bc')
    .map(res => res.json()); 
  }

  getInTheaters(){
    return this._jsonp.get('https://api.themoviedb.org/3/discover/movie?callback=JSONP_CALLBACK&primary_release_date.gte=2016-06-20&primary_release_date.lte=2017-07-03&sort_by=popularity.desc&api_key=eba6955a2c5a4dace95fa4773c9bf2bc')
    .map(res => res.json()); 
  }

  searchMovies(searchStr: string){
    return this._jsonp.get('https://api.themoviedb.org/3/discover/movie?callback=JSONP_CALLBACK&query='+searchStr+'&primary_release_date.gte=2016-06-20&primary_release_date.lte=2017-07-03&sort_by=popularity.desc&this.api_key'+this.apiKey)
    .map(res => res.json()); 
  }

}