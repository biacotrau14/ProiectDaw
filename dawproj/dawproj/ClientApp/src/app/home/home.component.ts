import { Component } from '@angular/core';
import { MovieService } from '../movie.service';
import { Router } from '@angular/router';
import { ActivatedRoute, Route } from '@angular/router';
import { Moviemodel } from '../moviemodel';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})

export class HomeComponent {
  movies;
  movieID;
  router: Router;
  constructor(public movieService: MovieService) {
    this.movieService.listMovies().subscribe(res => {
     this.movies = res;
    });

  }

  deleteMovie(movieID) {

    this.movieService.deleteMovie(movieID).subscribe(x => {
    this.router.navigate(['']);

    });
  }
 }
