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
  constructor(private auth: AuthService, fb: FormBuilder, private ms: MovieService, private http: HttpClient, private router: Router) {
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
  }

  searchMovie(movieName: any) {
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
      'http://localhost:5000/submitreview', this.ratingObject, httpOptions)
      .subscribe((res: Response) => {
        this.ratingResponse = res;

      });
  }



}
