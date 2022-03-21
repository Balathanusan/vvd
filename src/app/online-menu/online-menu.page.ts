import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from './../services/authentication.service';
import { LoadingService } from '../../providers/loadingservice';
import { DatabaseProvider } from '../../providers/database';
import { Platform } from '@ionic/angular';


@Component({
  selector: 'app-online-menu',
  templateUrl: './online-menu.page.html',
  styleUrls: ['./online-menu.page.scss'],
})
export class OnlineMenuPage implements OnInit {
  getApikey: any;
  getResdata = null;
  getdetails: any;
  slideOptsOne = {
    initialSlide: 0,
    slidesPerView: 1,
    autoplay: true
  };
  getRating: any;
  loggeduserid: any;
  getquantity: any;
  decreaseval: any;
  val: any;
  getid: any;
  getdbvalues: any;
  getcountfromdb = 0;
  isPageSaved:Boolean = false;
  getResdataimg:any;


  constructor(private platform: Platform, private router: ActivatedRoute, private route: Router, private authService: AuthenticationService, public db: DatabaseProvider) {
    this.loggeduserid = localStorage.getItem('loggeduserid');
    this.router.params.subscribe(params => {
      this.getResdata = JSON.parse(params['getResdata']);
      this.getResdataimg= this.getResdata['images'];
      this.getid = JSON.parse(params['getid']);



      console.log("ppppp" + this.getResdata);
      // this.getRating = this.getResdata['rating'];
      // console.log(this.getRating);
      this.db.getRecordByID(this.loggeduserid, this.getid).subscribe((res: any) => {
        console.log("retdata" + JSON.stringify(res));
        console.log(res);
        if (res == [] || res == '[]' || res.length == 0) {
          this.getquantity = 0;
        }
        else {
          this.getquantity = res[0]["itemQuantity"];
          console.log("retdataqqq" + this.getquantity);
        }

      });

    });
  }

  async callcartcount() {
    this.getcountfromdb = 0;
    this.loggeduserid = localStorage.getItem('loggeduserid');
    console.log("loggeduserid-" + this.loggeduserid);
    this.getdbvalues = await this.db.getAllrecords(this.loggeduserid);
    console.log("valll" + this.getdbvalues.length);
    console.log(JSON.stringify(this.getdbvalues));
    for (var i = 0; i < this.getdbvalues.length; i++) {
      this.getcountfromdb = this.getcountfromdb + this.getdbvalues[i].itemQuantity;
      console.log("counttttt" + this.getcountfromdb)
    }

  }

  async ionViewWillEnter() {
    console.log("wellll");

    this.loggeduserid = localStorage.getItem('loggeduserid');

    this.getdbvalues = await this.db.getAllrecords(this.loggeduserid);
    console.log("valll" + this.getdbvalues.length);
    console.log(JSON.stringify(this.getdbvalues));
    for (var i = 0; i < this.getdbvalues.length; i++) {
      this.getcountfromdb = this.getcountfromdb + this.getdbvalues[i].itemQuantity;
      console.log("counttttt" + this.getcountfromdb)
    }
  }

  doRefresh(refresher) {
    this.callProductDetails();
    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.target.complete();
    }, 2000);
  }
  callback() {

  }

  pageSavedAction () {
    this.isPageSaved = !this.isPageSaved;
  }



  ngOnInit() {
  }
  async callProductDetails() {

    this.getApikey = localStorage.getItem('apikey');

    await this.authService.getProductDetails(this.getApikey, this.getid).subscribe(async res => {
      this.getResdata = res['response'].data;



    });

  }

  //   this.getApikey = localStorage.getItem('apikey');

  //   await this.authService.getProductDetails(this.getApikey, "1").subscribe(async res => {
  //     this.getResdata = res['response'].data;

  //     this.getRating = this.getResdata['rating'];
  //     console.log(this.getRating);
  //     this.db.getRecordByID(this.loggeduserid, '1').subscribe((res: any) => {
  //       console.log("retdata" + JSON.stringify(res));
  //       this.getquantity = res[0]["itemQuantity"];
  //       console.log("retdataqqq" + this.getquantity);

  //     });
  //   });
  // }
  increment() {
    var countItem = parseInt(this.getquantity) + 1;
    this.val = this.getquantity = countItem;

    console.log(this.val);

    this.db.getRecordByProductID(this.getid).subscribe(async (res: any) => {
      console.log('get record by product id', res);

      let data = { id: this.getid, loggeduserid: this.loggeduserid, itemQuantity: this.val };

      if (res.length == 0) {
        console.log(data);
       await this.db.insertRecordRow(data);

      }
      else {

        let printupdate = await this.db.updateRecordRow(this.getid, this.loggeduserid, this.val);
        console.log(printupdate);
        console.log(JSON.stringify(printupdate));
        //update
      }
      this.authService.changedProductInfo(data);
      console.log("values observed in from service",data);
    });
    this.callcartcount();

  }

  async decrement() {
    this.decreaseval = this.getquantity -= 1;

    if (this.decreaseval < 0) {
      this.getquantity = 0;
      // this.currentNumber=0;
    }
    else if (this.decreaseval == 0) {
      let printupdate = await this.db.updateRecordRow(this.getid, this.loggeduserid, this.decreaseval);
    }
    else {
      let printupdate = await this.db.updateRecordRow(this.getid, this.loggeduserid, this.decreaseval);
    }
    let data = { id: this.getid, loggeduserid: this.loggeduserid, itemQuantity: this.decreaseval };
    this.authService.changedProductInfo(data);
    console.log("values observed in from service in decreament function",data);
    this.callcartcount();
  }


  cart() {
    this.route.navigate(['./cart']);
  }
}
