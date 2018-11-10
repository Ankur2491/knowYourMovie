import { Component, OnInit, AfterViewInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MovieService } from '../movie.service';
import { IStarRatingOnClickEvent } from "angular-star-rating/src/star-rating-struct";
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  myForm: FormGroup;
  reviewForm: FormGroup;
  profile: any;
  searchResults: any;
  isRated: boolean;
  selectedId: any;
  ratingObject: Object = { "id": '', "rating": '', "email": '' };
  ratingResponse;
  moviesRated: any;
  constructor(private auth: AuthService, fb: FormBuilder, private ms: MovieService, private http: HttpClient, private router: Router) {
    //console.log("In Constructor::",JSON.parse(localStorage.getItem('user_details')));
    this.auth.handleAuthentication().then(() => {
      this.profile = JSON.parse(localStorage.getItem('user_details'));
      this.auth.changeProfile(this.profile["picture"]);
      this.ratingObject["nickname"] = this.profile.nickname;
    });
    this.myForm = fb.group({
      'search': ['', Validators.required]
    });
    this.reviewForm = fb.group({
      'rating': ['']
    })
  }
  ngOnInit() {
    this.profile = JSON.parse(localStorage.getItem('user_details'));
    if (this.profile) {
      this.ratingObject["nickname"] = this.profile.nickname;
      this.ms.ratedMovies(this.profile.nickname).subscribe((res: Response)=>{
        this.moviesRated=res;
      });
    }
  }

  searchMovie(movieName: any) {
    this.selectedId = 0;
    this.ratingResponse = null;
    this.ms.searchMovie(movieName["search"]).subscribe((res: Response) => {
      this.searchResults = res;
    });
  }

  onClickResult: IStarRatingOnClickEvent;

  onClick = ($event: IStarRatingOnClickEvent, id: any, poster: any, desc: any) => {
    this.selectedId = id;
    this.ratingObject["id"] = this.selectedId;
    this.ratingObject["rating"] = $event.rating;
    this.ratingObject["poster"] = poster;
    this.ratingObject["overview"] = desc;
  };
  submitRating() {
    var httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    this.http.post(
      'http://ec2-34-217-86-229.us-west-2.compute.amazonaws.com:6205/submitreview', this.ratingObject, httpOptions)
      .subscribe((res: Response) => {
        this.ratingResponse = res;

      });
  }



}

