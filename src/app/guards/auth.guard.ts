import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Storage } from '@ionic/storage';
import { AuthenticationService } from '../services/authentication.service';
import {User} from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  currentUser: User;
  constructor(private storage: Storage, private router: Router,
              private authenticationService: AuthenticationService) {
      this.authenticationService.currentUser.subscribe(data => {
        this.currentUser = data;
     //   console.log(this.currentUser);
      });
    }

  async canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
   const result = await this.storage.get('currentUser').then((data) => {
       return JSON.parse(data);
      });
   console.log('storage', result);
   if (result === null) {
      this.router.navigate(['/sign-in']);
    } else {
      if (result.response.code === 2) {
        return false;
      } else {
        localStorage.setItem('ret_name',result.response.data.ret_name);
        localStorage.setItem('mobile',result.response.data.mobile);
        localStorage.setItem('apikey',result.response.data.apikey);
        localStorage.setItem('loggeduserid',result.response.data.userId);
        return true;
      }
    }
   return false;
  }
}
