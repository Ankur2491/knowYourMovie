import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(private auth: AuthService, private router: Router){}
  title = 'knowYourMovie';
  pic: string;
  ngOnInit(){
    this.auth.currentProfile.subscribe((pic)=>this.pic = pic )
  }
  login(){
      this.auth.login();
	//this.router.navigate(["/home"]);
  }
  home(){
    this.router.navigate(["/home"]);
  }
  recommendMovies(){
    this.router.navigate(['/recommend']);
  }

}
