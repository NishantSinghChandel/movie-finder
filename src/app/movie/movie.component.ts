import {Component, OnInit} from '@angular/core';
import {MovieService} from '../movie.service';
import {RouterLink} from '@angular/router';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css'],
})
export class MovieComponent implements OnInit {
  movie: Object;

  constructor(private router: ActivatedRoute, private _movieService: MovieService) {
  }

  ngOnInit() {
    this.router.params.subscribe((params) => {
      const id = params['id'];
      this._movieService.getMovie(id).subscribe(movie => {
        this.movie = movie;
        // console.log(this.movie);
      })
    })
  }
}
