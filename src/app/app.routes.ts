import { Routes } from '@angular/router';
import {MoviesComponent} from './movies/movies.component';
import {MovieComponent} from './movie/movie.component';


export const routes: Routes = [
  { path: '', component: MoviesComponent },
  { path: 'movie/:id', component: MovieComponent },

  // { path: '**', component: PageNotFoundComponent }
];


