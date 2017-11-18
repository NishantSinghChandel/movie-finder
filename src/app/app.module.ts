import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {MovieService} from './movie.service';
import { routes } from './app.routes';
import {RouterModule} from '@angular/router';
import {JsonpModule, Jsonp, Response} from '@angular/http';
// import {JSONP_PROVIDERS} from '@angular/http';
import {AppComponent} from './app.component';
import {MoviesComponent} from './movies/movies.component';
import { MovieComponent } from './movie/movie.component';

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    MovieComponent,
  ],

  imports: [
    BrowserModule,
    JsonpModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [MovieService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
