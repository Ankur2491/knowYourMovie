import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import * as auth0 from 'auth0-js';
//import { Auth0Lock } from 'auth0-lock';
//import { tokenNotExpired } from 'angular2-jwt'; 
//import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
(window as any).global = window;
//const Auth0Lock = require('auth0-lock').default;
@Injectable()
export class AuthService {
    auth0 = new auth0.WebAuth({
        clientID: 'PKKzo3TocEJ8lhPXgBIjuGZsxRdoJVL9',
        domain: 'swiftapps.auth0.com',
        responseType: 'token id_token',
        redirectUri: 'http://localhost:4200/home',
        scope: 'openid email profile'
    });
    userProfile: any;
    //lock = new Auth0Lock('PKKzo3TocEJ8lhPXgBIjuGZsxRdoJVL9','swiftapps.auth0.com', {});
    constructor(public router: Router) {
        // this.lock.on('authenticated',(authResult: any) => {
        //     this.lock.getProfile(authResult.idToken,function(error:any,profile: any){
        //         if(error){
        //             throw new Error(error);
        //         }
        //         localStorage.setItem('id_token',authResult.idToken);
        //         localStorage.setItem('profile',JSON.stringify(profile));
        //     });
            
        // })
     }

    public login(): void {
        this.auth0.authorize();
    }
 
    private setSession(authResult): void {
        // Set the time that the Access Token will expire at
        const expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
        localStorage.setItem('access_token', authResult.accessToken);
        localStorage.setItem('id_token', authResult.idToken);
        localStorage.setItem('expires_at', expiresAt);
      }
      public logout(): void {
        // Remove tokens and expiry time from localStorage
        localStorage.removeItem('access_token');
        localStorage.removeItem('id_token');
        localStorage.removeItem('expires_at');
        localStorage.removeItem('user_details');
        // Go back to the home route
        this.router.navigate(['/']);
      }
      public isAuthenticated(): boolean {
        // Check whether the current time is past the
        // Access Token's expiry time
        const expiresAt = JSON.parse(localStorage.getItem('expires_at'));
        return new Date().getTime() < expiresAt;
      }
      public handleAuthentication(): Promise<any> {
        return new Promise((resolve,reject) =>{
        this.auth0.parseHash((err, authResult) => {
          if (authResult && authResult.accessToken && authResult.idToken) {
            window.location.hash = '';
            this.setSession(authResult);
            this.auth0.client.userInfo(authResult.accessToken, (err, user) =>{
                localStorage.setItem("user_details",JSON.stringify(user));
                resolve();
            });
          } else if (err) {
            this.router.navigate(['/']);
            console.log(err);
            reject();
          }
        });
    });
      }
      public getProfile(cb): void {
        const accessToken = localStorage.getItem('access_token');
        if (!accessToken) {
          throw new Error('Access Token must exist to fetch profile');
        }
      
        const self = this;
        this.auth0.client.userInfo(accessToken, (err, profile) => {
          if (profile) {
            self.userProfile = profile;
          }
          cb(err, profile);
        });
      }
      private profileSource = new BehaviorSubject('');
      currentProfile = this.profileSource.asObservable();

      changeProfile(pic: string){
          this.profileSource.next(pic);
      }

}