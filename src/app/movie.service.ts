import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  imgArray: string[] = [];

  constructor(public http: HttpClient) {

  }
  searchMovie(name: string): Observable<any> {
    var url = `https://api.themoviedb.org/3/search/movie?api_key=98c3f8bd00e0a1138dccdc4dc8a7d1b9&language=en-US&query=${name}&page=1&include_adult=false`
    return this.http.get(url);
  }

  submitRating(ratingObj: any): void {

  }

  recommendMovies(person: string) {
    var recommendObject = {
      "nickname": person
    }
    var movies: any;
    var httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.post('http://ec2-34-217-86-229.us-west-2.compute.amazonaws.com:6205/recommendMovies', recommendObject, httpOptions)
  }
}
