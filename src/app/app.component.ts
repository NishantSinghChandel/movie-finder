import { Component } from '@angular/core';
import {RouterLink} from '@angular/router';
import {MovieService} from './movie.service';

// import {JSONP_PROVIDERS} from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MoviesFinder';
}
