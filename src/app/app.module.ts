import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import {MovieService} from './movie.service';
import {JsonpModule, Jsonp, Response} from '@angular/http';
// import {JSONP_PROVIDERS} from '@angular/http';

import { AppComponent } from './app.component';
import { MoviesComponent } from './movies/movies.component';

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent
  ],
  imports: [
    BrowserModule,
    JsonpModule,
    FormsModule
   
  ],
  providers: [MovieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
