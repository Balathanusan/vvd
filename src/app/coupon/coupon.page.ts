import { Component, OnInit } from '@angular/core';
 import { ModalController } from '@ionic/angular';
import { LoadingService } from 'src/providers/loadingservice';
import { AuthenticationService } from '../services/authentication.service';
@Component({
  selector: 'app-coupon',
  templateUrl: './coupon.page.html',
  styleUrls: ['./coupon.page.scss'],
})
export class CouponPage implements OnInit {
  public coupenCode;
  public getApikey;
  public couponRes: any;
  constructor(private modalController: ModalController,
    public authService:AuthenticationService,private loading:LoadingService) { }

  ngOnInit() {
    this.getApikey = localStorage.getItem('apikey');
  }
 async apply(){
  this.loading.present();
    console.log("coupen code",this.coupenCode);
    await this.authService.verifyCoupon(this.getApikey,this.coupenCode).subscribe(res => {
     console.log("coupon code response",res);
     this.coupenCode = JSON.parse(JSON.stringify(res));
     this.dismiss();
    });
  }
  dismiss(){
   this.modalController.dismiss(this.coupenCode);
   this.loading.dismiss();
 }
}
