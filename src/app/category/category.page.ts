import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthenticationService } from './../services/authentication.service';
import { LoadingService } from '../../providers/loadingservice';
import { DatabaseProvider } from '../../providers/database';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import {  MenuController, AlertController } from '@ionic/angular';
import { FunctionsService } from '../functions.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.page.html',
  styleUrls: ['./category.page.scss'],
})
export class CategoryPage implements OnInit {
  brandid:any;
  getApikey: any;
  getBrandValues:any;


  constructor(private geolocation: Geolocation,public db: DatabaseProvider, private route: Router, public loading: LoadingService, private menuCtrl: MenuController, private http: HttpClient, private authService: AuthenticationService,
    private fun: FunctionsService,private alertController:AlertController, private router:ActivatedRoute
) {
  this.getApikey = localStorage.getItem('apikey');

  this.router.params.subscribe(params => {
  this.brandid = params['id'];
  this.getcategorybybrand();
  });
 

 }

 async getcategorybybrand()
  {
    
    await this.authService.getBrandCategDetails(this.getApikey,this.brandid).subscribe(async res => {
      this.getBrandValues=res['response']['data'];
      console.log('catbrand'+res);

     });

  }

  goProductList(id)
  {
    this.route.navigate(['./search',{catid:id}]);

  }

  ngOnInit() {
  }

}
