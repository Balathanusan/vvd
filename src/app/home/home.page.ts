import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthenticationService } from './../services/authentication.service';
import { LoadingService } from '../../providers/loadingservice';
import { DatabaseProvider } from '../../providers/database';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import {  MenuController, AlertController } from '@ionic/angular';
import { FunctionsService } from '../functions.service';
import { log } from 'console';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  getApikey: any;
  getmainvaluesList = "";
  getsubcategoryList = "";
  getProductList = ";"
  public searchTerm: string = "";
  public items1: any;
  getResdata: any;
  loggeduserid: any;
  getdbvalues: any;
  getcountfromdb=0;
  bannersList;
  slideOptsOne = {
    initialSlide: 0,
    slidesPerView: 1,
    autoplay: true
  };
  appname = 'VVD';

getBrandValue:any;

  constructor(private geolocation: Geolocation,public db: DatabaseProvider, private route: Router, public loading: LoadingService, private menuCtrl: MenuController, private http: HttpClient, private authService: AuthenticationService,
    private fun: FunctionsService,private alertController:AlertController
  ) {
  //  this.callMaincategory();
  }

 
  doRefresh(refresher) {
    this.callMaincategory();
    this.getBrandDetails();
    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.target.complete();
    }, 2000);
  }
 async getcategorybybrand(brandid)
  {
    
    // await this.authService.getBrandCategDetails(this.getApikey,brandid).subscribe(async res => {
    // //  this.getBrandValue=res['response']['data'];
    //   console.log('catbrand'+res);

    //  });
    this.route.navigate(['./category', {  id: brandid }]);

  }

  ngOnInit() {
    this.geolocation.getCurrentPosition().then((resp) => {
      // resp.coords.latitude
      // resp.coords.longitude
     }).catch((error) => {
       console.log('Error getting location', error);
     });
  }

  async getBrandDetails(){
  await this.authService.getBrandDetails(this.getApikey).subscribe(async res => {
    this.getBrandValue=res['response']['data'];
   });
   }

  goSearch()
  {
    this.route.navigate(['./topsearch']);
  }

  //old method
  // async callMaincategory() {
  //   // this.loading.present();
  //   this.getApikey = localStorage.getItem('apikey');
  //   var headers = new HttpHeaders();
  //   headers.append("Accept", 'application/json');
  //   headers.append('Content-Type', 'application/json');
  //   this.loadBanners();
  //   await this.authService.getMainCategory(this.getApikey).subscribe(res => {
  //     // this.loading.dismiss();
  //     this.getmainvaluesList = res['response']['data'];
  //     if(res && res['response']['code'] === 2){
  //       this.route.navigate(['/sign-in']);
  //       this.fun.presentToast('Session Expired!', true, 'bottom', 2100);
  //     }
  //   });
  // }

  async callMaincategory() {
    // this.loading.present();
    this.getApikey = localStorage.getItem('apikey');
    console.log(this.getApikey);
    var headers = new HttpHeaders();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json');
    this.loadBanners();
    await this.authService.getMainCategory(this.getApikey).subscribe(res => {
      // this.loading.dismiss();
      this.getmainvaluesList = res['response']['data'];
      if(res && res['response']['code'] === 2){
        this.route.navigate(['/sign-in']);
        this.fun.presentToast('Session Expired!', true, 'bottom', 2100);
      }
    });
  }

 async loadBanners(){
  await this.authService.getBanners(this.getApikey).subscribe(res => {
    console.log("response Bannersss",res);
    this.bannersList = res['response']['data'];
  })
  }

 async getbrandbyBanner(bannerid)
  {
    this.route.navigate(['./productlist',{catid:bannerid}]);

    // await this.authService.getBannersDetails(this.getApikey,bannerid).subscribe(res => {
    //   console.log("response Bannersss",res);
    // })
  }


  navigateTo(data){
    //console.log(data);
  //  if(data.haveSubCategories){
  //    this.gotoSubcategory(data.id);
  //  } else {
  //   this.route.navigate(['./search',{catid:data.id}]);
  //  }
   this.route.navigate(['./search',{catid:data.id}]);
 // this.gotoSubcategory(data.id);
  }

  async gotoSubcategory(id) {
    this.loading.present();
    this.getApikey = localStorage.getItem('apikey');
    var headers = new HttpHeaders();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json');

    await this.authService.getsubCategory(this.getApikey, id).subscribe(res => {
      this.loading.dismiss();
      this.getsubcategoryList = res['response']['data'];
      console.log(this.getsubcategoryList);
      this.getcountfromdb=0;
      this.route.navigate(['./subcategory', { subcategory: JSON.stringify(this.getsubcategoryList), id: id }]);
    });
  }

  async ionViewWillEnter() {
    this.callMaincategory();
    this.getBrandDetails();
    this.loggeduserid = localStorage.getItem('loggeduserid');
    await this.db.getAllrecords(this.loggeduserid).then( res => {
      this.getdbvalues = res;
  });
  this.getcountfromdb = 0; 
    // this.getdbvalues =await this.db.getAllrecords(this.loggeduserid);
    console.log("valll" + this.getdbvalues.length);
    console.log(JSON.stringify(this.getdbvalues));
    for (var i = 0; i < this.getdbvalues.length; i++) {
      this.getcountfromdb = this.getcountfromdb + this.getdbvalues[i].itemQuantity;
      console.log("counttttt"+this.getcountfromdb)
    }
  }

  ionViewDidEnter() {
    this.menuCtrl.enable(false, 'end');
    this.menuCtrl.enable(true, 'start');
  }

  ionViewWillLeave() {
    if(this.loading){
      this.loading.dismiss();
    }
  }

  chef_detail() {
    this.getcountfromdb=0;
    this.route.navigate(['./online-menu']);
  }



  filter() {
    this.route.navigate(['./refine']);
  }

  cart() {
    this.getcountfromdb=0;
    this.route.navigate(['./cart']);
    //  this.route.navigate(['./carthome']);

  }
}
