import {Component, OnInit} from '@angular/core';
import {MovieService} from '../movie.service';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css'],

})
export class MovieComponent implements OnInit {
  constructor() {
  }

  ngOnInit() {
  }
}
