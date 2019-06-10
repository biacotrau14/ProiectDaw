import { Component, Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Moviemodel } from '../app/moviemodel'; 

   @Injectable({
  providedIn: 'root'
  })
export class MovieService {
       id(id: any) {
           throw new Error("Method not implemented.");
       }

  constructor(
    private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) { }

  listMovies() {
    return this.http.get<Moviemodel[]>(this.baseUrl + 'api/Movies/GetMovies');
  }

  loadMovie(movieID: string) {
    return this.http.get<Moviemodel>(this.baseUrl + `api/Movies/GetMovie?movieID=${movieID}`);
  }

  saveMovie(movie: Moviemodel) {
    return this.http.post<any>(this.baseUrl + `api/Movies/PostMovie`, movie);
  }

  deleteMovie(movieID: string) {
    return this.http.delete<any>(this.baseUrl + `api/Movies/DeleteMovie/${movieID}`);
  }
}
