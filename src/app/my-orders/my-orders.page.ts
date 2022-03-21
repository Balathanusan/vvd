import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingService } from '../../providers/loadingservice';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FunctionsService } from '../functions.service';
import { AuthenticationService } from './../services/authentication.service';
import { NavController } from '@ionic/angular';
const monthNames = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.page.html',
  styleUrls: ['./my-orders.page.scss'],
})
export class MyOrdersPage implements OnInit {
   faqExpand1: boolean = true;
   faqExpand2: boolean;
   faqExpand3: boolean;
   faqExpand4: boolean;
   faqExpand5: boolean;
   faqExpand6: boolean;
   faqExpand7: boolean; 
   getApikey:any;
   getResdata:any;
   ordersList = [];
   getUsername = '';
   public loadedDataCount = 9;
   public totalRecordCount;
   public isListEmpty :Boolean = false;


  constructor( private authService: AuthenticationService,private route: Router, private fun: FunctionsService, private http: HttpClient, public loading: LoadingService,
    private navCtrl:NavController) { }

  ngOnInit() {
    this.getUsername = localStorage.getItem('ret_name');
    this.callMyOrdersapi();
  }
  reset() {
    this.faqExpand1 = false;
    this.faqExpand2 = false;
    this.faqExpand3 = false;
    this.faqExpand4 = false;
    this.faqExpand5 = false;
    this.faqExpand6 = false;
    this.faqExpand7 = false;
  }
  async faqExpandToggle1(order) {
    this.reset();
    this.faqExpand1 = !this.faqExpand1;
   order.isExpanded = !order.isExpanded;
  }
  faqExpandToggle2() {
    this.reset();
    this.faqExpand2 = !this.faqExpand2;
  }  
 faqExpandToggle3() {
    this.reset();
    this.faqExpand3 = !this.faqExpand3;
  } 
 faqExpandToggle4() {
    this.reset();
    this.faqExpand4 = !this.faqExpand4;
  } 
 faqExpandToggle5() {
    this.reset();
    this.faqExpand5 = !this.faqExpand5;
  } 
 faqExpandToggle6() {
    this.reset();
    this.faqExpand6 = !this.faqExpand6;
  } 
 faqExpandToggle7() {
    this.reset();
    this.faqExpand7 = !this.faqExpand7;
  }

  rate_restro() {
    this.route.navigate(['./rate-restro']);
  }

  async callMyOrdersapi() {
    this.getApikey = localStorage.getItem('apikey');
    if(this.loadedDataCount === 9){
      this.loading.present();
    }
    await this.authService.getOrderList(this.getApikey,this.loadedDataCount).subscribe(async res => {
      this.getResdata = res['response'].data;
      this.totalRecordCount = this.getResdata.recordsTotal;
      this.ordersList = [];
      for(let index=0;index < this.loadedDataCount;index++){
        if(this.getResdata[index] && this.getResdata[index].orderDate){
          var dateString = new Date(this.getResdata[index].orderDate);
          this.getResdata[index].month = monthNames[dateString.getMonth()];
          this.getResdata[index].date = dateString.getDate();
          this.getResdata[index].time = dateString.getTime();
          this.getResdata[index].isExpanded = false;
        }
        this.ordersList.push(this.getResdata[index]);
      }
      this.isListEmpty = this.ordersList.length === 0 ? true : false;
      if(this.loadedDataCount === 9){
        this.loading.dismiss();
      }
    });
  }

  doInfinite(infiniteScroll) {
    this.loadedDataCount += 9 ;
    if(this.loadedDataCount < this.totalRecordCount){
      setTimeout(() => {
        this.callMyOrdersapi();
        infiniteScroll.target.complete();
      }, 500);
    } else {
      this.loadedDataCount = this.totalRecordCount;
      this.callMyOrdersapi();
      infiniteScroll.target.disabled = true;
    }
  }
  ionViewWillLeave() {
    if(this.loading){
      this.loading.dismiss();
    }
  }
  navigateTo(order){
    this.route.navigate(['./myorder-detail',{orderCode:order.orderCode,order:JSON.stringify(order)}])
  }

  goToHome() {
    this.route.navigate(['./home']);
  }
}
