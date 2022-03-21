import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthenticationService } from './../services/authentication.service';
import { LoadingService} from '../../providers/loadingservice';

import { DatabaseProvider } from '../../providers/database';

@Component({
  selector: 'app-subcategory',
  templateUrl: './subcategory.page.html',
  styleUrls: ['./subcategory.page.scss'],
})
export class SubcategoryPage implements OnInit {
  subcategory=[];
  getApikey: any;
  getProductList: any;
  id:any;
  loggeduserid: any;
  getdbvalues: any;
  getcountfromdb=0;
  constructor(public loading: LoadingService,private route: Router, private router: ActivatedRoute, public db: DatabaseProvider, private authService: AuthenticationService
  ) {
    this.router.params.subscribe(params => {
    //  this.subcategory = JSON.parse(params['subcategory']);
      this.id = JSON.parse(params['id']);
      console.log("iddddd"+this.id)
    //  console.log(this.subcategory)
      this.getApikey=localStorage.getItem('apikey');
      this.gotoSubcategory(this.id);
    }
    );

   
  }

  doRefresh(refresher) {
    this.gotoSubcategory(this.id);
    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.target.complete();
  }, 2000);
  }

  async gotoSubcategory(id)
  {
    this.loading.present();
    this.getApikey=localStorage.getItem('apikey');
   
    var headers = new HttpHeaders();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json' );
  
    await this.authService.getsubCategory(this.getApikey,id).subscribe(res => {
      this.loading.dismiss();
      this.subcategory = res['response']['data'];
    console.log("loadd"+this.subcategory);

    });
  }

  async ionViewWillEnter() {
    this.loggeduserid = localStorage.getItem('loggeduserid');

    this.getdbvalues =await this.db.getAllrecords(this.loggeduserid);
    console.log("valll" + this.getdbvalues.length);
    console.log(JSON.stringify(this.getdbvalues));
    for (var i = 0; i < this.getdbvalues.length; i++) {
      this.getcountfromdb = this.getcountfromdb + this.getdbvalues[i].itemQuantity;
      console.log("counttttt"+this.getcountfromdb)
    }

  }

  ionViewWillLeave() {
    if(this.loading){
      this.loading.dismiss();
    }
  }

  async gosearch(catid) {
    this.getcountfromdb=0;
    this.route.navigate(['./search',{catid:catid}]);  
  }

  cart() {
    this.getcountfromdb=0;
    this.route.navigate(['./cart']);
  }
 


  ngOnInit() {
  }

}
