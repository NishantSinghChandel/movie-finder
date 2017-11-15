import { Component, OnInit } from '@angular/core';
import {MovieService} from '../movie.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  popularList:Array<Object>;
  theatersList:Array<Object>;
  searchStr:string;
  searchRes:Array<Object>;

  constructor(private _movieService: MovieService) {
    this._movieService.getPopular().subscribe(res =>{
      this.popularList= res.results;
    });

    this._movieService.getInTheaters().subscribe(res =>{
      this.theatersList= res.results;
    });
   }

   searchMovies(){
    this._movieService.searchMovies(this.searchStr).subscribe(res =>{
      this.searchRes= res.results;
    })
   }

  ngOnInit() {
  }

}
