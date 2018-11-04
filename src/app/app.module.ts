import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { StarRatingModule } from 'angular-star-rating';
import { AuthService } from './auth.service'; 
import { MovieService } from './movie.service';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RecommendComponent } from './recommend/recommend.component';

@NgModule({
  declarations: [
    AppComponent,HomeComponent, RecommendComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    StarRatingModule,
    RouterModule.forRoot(
      [
        {path: "home", component: HomeComponent},
        {path: "recommend", component: RecommendComponent}
      ]
    )
  ],
  providers: [AuthService, MovieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
