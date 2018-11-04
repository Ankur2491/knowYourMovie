import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-recommend',
  templateUrl: './recommend.component.html',
  styleUrls: ['./recommend.component.css']
})
export class RecommendComponent implements OnInit {
  profile: any;
  recommendedMovies: any;
  images: any;
  movies: any;
  imgArray: any[] = []

  constructor(private ms: MovieService, private http: HttpClient) { }

  ngOnInit() {

    this.profile = JSON.parse(localStorage.getItem('user_details'));
    this.ms.recommendMovies("Toby")
      .subscribe((res: Response) => {
        this.movies = res;
        this.movies.forEach(movieId => {
          var url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=98c3f8bd00e0a1138dccdc4dc8a7d1b9&language=en-US`
          this.http.get(url)
            .subscribe((mRes: Response) => {
              this.imgArray.push(mRes)
            })
        });
      })

  }

}
