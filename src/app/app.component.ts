import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';

import { AlertController, IonRouterOutlet, Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { TranslateService } from '../../node_modules/@ngx-translate/core';
import { FunctionsService } from './functions.service';
import { Storage } from '@ionic/storage';
import { NavController } from '@ionic/angular';
import { DatabaseProvider } from '../providers/database';
import { AuthenticationService } from './services/authentication.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { Geolocation } from '@ionic-native/geolocation/ngx';



@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  @ViewChildren(IonRouterOutlet) routerOutlets: QueryList < IonRouterOutlet > ;
  userDatas: any;
  userDetail: any;
  getUsername = "";
  getUserEmail = "";
  getrewardpoints="";
  geolatitude:any;
  geolongitude:any;

  lastTimeBackPress = 0;
  timePeriodToExit = 2000;

  public appPages = [
    {
      title: 'Pt_home',
      text: 'list_of_restaurants',
      url: '/home',
      icon: 'zmdi zmdi-store'
    },
    {
      title: 'my_orders',
      text: 'current_and_past_orders',
      url: '/my-orders',
      icon: 'zmdi zmdi-dropbox'
    },
    {
      title: 'my_details',
      text: 'profile_info_and_delivery_address',
      url: '/my-details',
      icon: 'zmdi zmdi-pin-account'
    },
    // {
    //   title: 'User Creation',
    //   text: '',
    //   url: '/usercreation',
    //   icon: 'zmdi zmdi-pin-account'
    // },

    // {
    //   title: 'favorites',
    //   text: 'your_favorite_restaurants',
    //   url: '/favorited',
    //   icon: 'zmdi zmdi-favorite'
    // },

    // {
    //   title: 'offers',
    //   text: 'get_latest_offers',
    //   url: '/offers',
    //   icon: 'zmdi zmdi-label'
    // },

    // {
    //   title: 'my_reviews',
    //   text: 'list_of_reviews',
    //   url: '/review',
    //   icon: 'zmdi zmdi-ticket-star'
    // },

    // {
    //   title: 'support',
    //   text: 'let_us_know_your_query',
    //   url: '/contact-us',
    //   icon: 'zmdi zmdi-comment-text'
    // },

    // {
    //   title: 'languge',
    //   text: 'select_preferred_language',
    //   //      url: '/my-orders',
    //   icon: 'zmdi zmdi-settings'
    // },

    {
      title: 'signout',
      text: 'login_whit_different_user',
      url: '/signout',
      icon: 'zmdi zmdi-power'
    },
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private translate: TranslateService,
    public fun: FunctionsService,
    private storage: Storage,
    private navCtrl: NavController,
    public db: DatabaseProvider,
    public service: AuthenticationService,
    public alertController:AlertController,
    public location: Location,
    public router: Router,
    private geolocation: Geolocation

  ) {
    this.initializeApp();
    this.service.sidebarVisibilityChange.subscribe((value)=>{
      console.log("app component changes observed....",value);
      if(value['response'].code === 1){
        let userData = value['response'].data;
        console.log("ussss",userData);
        // this.getUsername = userData.firstName;
        // this.getUserEmail = userData.email;
      }
    })
    translate.setDefaultLang('en');
    this.backButtonEvent();

  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleLightContent();
      this.getCurrentCoordinates();
      this.splashScreen.hide();
      this.db.createDatabase();
    });
  }

  async getCurrentCoordinates() {
    // debugger;
  this.geolocation.getCurrentPosition().then((resp) => {
       this.geolatitude = resp.coords.latitude;
       this.geolongitude = resp.coords.longitude;
     let obj = {'latitude':resp.coords.latitude,'long':resp.coords.longitude};
     console.log("meennn"+obj) ;
     
      }).catch((error) => {
        console.log('Error getting location', error);
      });
     }

  // backButtonEvent() {


  //   this.platform.backButton.subscribeWithPriority(0, () => {

  //     console.log("bacccccccckkkapp");

  //   });
  // }


  backButtonEvent() {
    console.log("before subscribe");
    this.platform.backButton.subscribeWithPriority(0, () => {
      console.log("backbutton event called");
      this.routerOutlets.forEach(async(outlet: IonRouterOutlet) => {
        let routerName = this.router.url;
        if (this.router.url != '/home' && !routerName.includes('/confirm-order')) {
          // await this.router.navigate(['/']);
          console.log("it is not a home page")
          if(this.router.url === '/sign-in'){
            navigator['app'].exitApp();
          }
          await this.location.back();
        } else if (this.router.url === '/home') {
          console.log("home page");
          if (new Date().getTime() - this.lastTimeBackPress >= this.timePeriodToExit) {
            this.lastTimeBackPress = new Date().getTime();
            this.presentAlertConfirm();
          } else {
            navigator['app'].exitApp();
          }
        } else if(routerName.includes('/confirm-order')){
          console.log("it is order confirmed page");
          this.navCtrl.navigateRoot(['./home']);
          console.log("after set navigation");
         }
      });
    });
  }

  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      // header: 'Confirm!',
      message: 'Are you sure you want to exit the app?',
      buttons: [{
        text: 'Cancel',
        role: 'cancel',
        cssClass: 'secondary',
        handler: (blah) => {}
      }, {
        text: 'Close App',
        handler: () => {
          navigator['app'].exitApp();
        }
      }]
    });
    await alert.present();
  }

  ionViewWillEnter() {
    this.getUsername = localStorage.getItem('ret_name');
    console.log("uuuuuuu-----" + this.getUsername)
    this.getUserEmail = localStorage.getItem('mobile');
    this.getrewardpoints = localStorage.getItem('available_points');

    
    console.log("uuuuuuu-----" + this.getUserEmail)
  }

  ngOnInit() {
    this.getUsername = localStorage.getItem('ret_name');
    this.getUserEmail = localStorage.getItem('mobile');

    this.storage.get('currentUser').then((result) => {
      this.userDatas = JSON.parse(result);
      if (this.userDatas == null) {
        this.navCtrl.navigateRoot(['./sign-in']);

      }
      else if (this.userDatas.response.code == 2) {
        this.navCtrl.navigateRoot(['./sign-in']);

      }
      else {
        this.navCtrl.navigateRoot(['./home']);

        this.userDetail = this.userDatas.response.data;
        console.log('My data', this.userDetail);
        this.getUsername = localStorage.getItem('ret_name');

        this.getUserEmail = localStorage.getItem('mobile');
         this.getrewardpoints=localStorage.getItem('available_points');
         if(this.getrewardpoints==null)
{
this.getrewardpoints="--";
}
else
{
  this.getrewardpoints = localStorage.getItem('available_points');

}
         console.log('rewarddddd', this.getrewardpoints);

        // this.getUserEmail=this.userDetail.email;

      }

    });
  }

}