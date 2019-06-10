import { Component, OnInit } from '@angular/core';
import { Moviemodel } from '../moviemodel';
import { MovieService } from '../movie.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  movie = new Moviemodel();
  constructor(private movieService: MovieService,
    private router: Router) { }

  ngOnInit() {
  }
  submit() {
    this.movieService.saveMovie(this.movie).subscribe(res => {
      this.router.navigate(['/']);

    });
    console.log(this.movie.name);
  }
}
