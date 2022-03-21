import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './../services/authentication.service';
import { FunctionsService } from '../functions.service';
import { Router } from '@angular/router';
import { NavController, MenuController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { Storage } from '@ionic/storage';
import { LoadingService} from '../../providers/loadingservice';

import {HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-usercreation',
  templateUrl: './usercreation.page.html',
  styleUrls: ['./usercreation.page.scss'],
})
export class UsercreationPage implements OnInit {

  constructor( private authService: AuthenticationService,
    private route: Router,
    private splashScreen: SplashScreen,
    private fun: FunctionsService,
    private navCtrl: NavController,
    private http: HttpClient,
    private storage: Storage,
    public loading: LoadingService,
    private menuCtrl: MenuController) { }

  ngOnInit() {
  }

}
