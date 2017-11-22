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
  constructor(private router: ActivatedRoute, private _movieService: MovieService) {
  }

  ngOnInit() {
    this.router.params.subscribe((params) => {
      const id = params['id'];
      console.log(params,'params')
      this._movieService.getMovie(id).subscribe(movie => {
        console.log(movie);
      })
      console.log(params['id'])
    })
  }
}
