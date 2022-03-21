import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
declare var RazorpayCheckout: any;
import { LoadingService } from '../../providers/loadingservice';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FunctionsService } from '../functions.service';
import { DatabaseProvider } from '../../providers/database';




@Component({
  selector: 'app-payment',
  templateUrl: './payment.page.html',
  styleUrls: ['./payment.page.scss'],
})
export class PaymentPage implements OnInit {
  public data: any = {
    pay: ''
  };
  addressid: any;
  getcartdetail: any;
  getApikey: any;
  finalprice: any;
  couponCode: any;
  // API_URL = 'http://pos.demoplaces.in/apis/';
  API_URL = 'http://vvdconnect.democodes.in/apis/'
  disableButton = true;
  advancedAmount:any;
  chequeNumber = "";

  constructor(public db: DatabaseProvider, private fun: FunctionsService, private http: HttpClient, public loading: LoadingService, private route: Router, private router: ActivatedRoute) {
    this.getApikey = localStorage.getItem('apikey');

    this.router.params.subscribe(params => {
      this.addressid = params['addressid'];
      this.finalprice = params['finalprice'];
      this.couponCode = params['couponCode'];
      this.getcartdetail = params['getcartdetail'];
      this.advancedAmount=params['advancedAmount'];
      console.log(this.addressid)
      console.log(JSON.stringify(this.getcartdetail))
      this.data.pay = 'cod';
    }
    );
  }

  ngOnInit() {
  }

  onChangeHandler($event) {
    this.data.pay = $event.target.value;
    console.log(this.data.pay)
    this.disableButton = false;
  }


  confirm_order() {
    var cart = localStorage.getItem("cart");
    console.log("carttt" + cart);
    this.couponCode = this.couponCode !== 'undefined' ? this.couponCode : '';
    if (this.data.pay == 'cod') {
      this.loading.present();
      const formData = new FormData();
      formData.append('APIKEY', this.getApikey);
      formData.append('couponCode', this.couponCode);
      formData.append('addressId', this.addressid);
      formData.append('paymentType', '1');
      formData.append('products', cart);
      formData.append('advancedAmt', this.advancedAmount);

      



      console.log("formdata" + formData)

      var headers = new HttpHeaders();
      headers.append("Accept", 'application/json');
      headers.append('Content-Type', 'application/json');


      this.http.post(this.API_URL + 'checkoutorder', formData, { headers: headers })
        .subscribe(data => {
          console.log(data);

          this.loading.dismiss();
          if (data['response'].code == 1) {
            let totalAmount = data['response']['data']['grandAmount'];
            console.log("finalprice",this.finalprice);
            console.log("success response",totalAmount,data['response']['data']['grandAmount']);
            // if (this.finalprice == totalAmount) {
            //   console.log("total amount equals to final price");
            //   this.db.deleteAll();
            //   this.finalprice="";
            //   this.fun.presentToast(data['response'].message, true, 'bottom', 2100);
            //   this.route.navigate(['./confirm-order', { orderdetail: JSON.stringify(data) }]);
            // }
            // else
            // {
            //   this.fun.presentToast('Please try again', true, 'bottom', 2100);

            // }
               this.db.deleteAll();
               this.finalprice="";
               this.fun.presentToast(data['response'].message, true, 'bottom', 2100);
               this.route.navigate(['./confirm-order', { orderdetail: JSON.stringify(data) }]);
          }
          else {
            this.fun.presentToast(data['response'].message, true, 'bottom', 2100);

          }

        }, error => {
          this.loading.dismiss();
          console.log(error);
        });

    }
    else {

      this.loading.present();
      const formData = new FormData();
      formData.append('APIKEY', this.getApikey);
      formData.append('couponCode', this.couponCode);
      formData.append('addressId', this.addressid);
      formData.append('paymentType', '2');
      formData.append('products', cart);



      console.log("formdata" + formData)

      var headers = new HttpHeaders();
      headers.append("Accept", 'application/json');
      headers.append('Content-Type', 'application/json');


      this.http.post(this.API_URL + 'checkoutorder', formData, { headers: headers })
        .subscribe(data => {
          console.log(data);

          this.loading.dismiss();
          if (data['response'].code == 1) {
             console.log("code completed");
             let totalAmount = data['response']['data']['totalAmount'];
            if (this.finalprice == Math.round(totalAmount)) {
              console.log("price");
              this.fun.presentToast(data['response'].message, true, 'bottom', 2100);
              let amt = this.finalprice * 100;
              // let amt = totalAmount * 100;
              console.log(amt);
              let orderrid = data['response']['data']['orderCode'];
              console.log(orderrid)
              console.log("before function call",orderrid,amt);
              this.callrazorpay(orderrid, amt);
              console.log("after function call");
            }



          }
          else {
            this.fun.presentToast(data['response'].message, true, 'bottom', 2100);

          }

        }, error => {
          this.loading.dismiss();
          console.log(error);
        });

    }

    // this.route.navigate(['./order-confirmed']);

  }

  callrazorpay(orderid, amt) {
    console.log("called");
    var options = {
      description: 'Credits towards consultation',
      image: 'https://i.imgur.com/3g7nmJC.png',
      currency: 'INR', // your 3 letter currency code
      key: 'rzp_test_AWIJXYy8EPwsfJ',

      amount: amt, // Payment amount in smallest denomiation e.g. cents for USD
      name: 'VVD',
      prefill: {
        email: 'kalidass28@gmail.com',
        contact: '9600628136',
        name: 'Yasotha'
      },
      theme: {
        color: '#528FF0'
      },
      modal: {
        ondismiss: function () {
          alert('dismissed')
        }
      }
    };
 console.log("options",options)
    var successCallback = (payment_id) => {


      this.loading.present();
      const formData = new FormData();
      formData.append('APIKEY', this.getApikey);
      formData.append('orderCode', orderid);
      formData.append('transactionId', payment_id);
      formData.append('paymentType', '2');
      formData.append('paymentStatus', '1');
      var headers = new HttpHeaders();
      headers.append("Accept", 'application/json');
      headers.append('Content-Type', 'application/json');


      this.http.post(this.API_URL + 'paymentupdates', formData, { headers: headers })
        .subscribe(data => {
          console.log(data);
          this.loading.dismiss();
          if (data['response'].code == 1) {
            this.db.deleteAll();

            this.fun.presentToast(data['response'].message, true, 'bottom', 2100);
            this.route.navigate(['./confirm-order', { orderdetail: JSON.stringify(data) }]);
          }
          else {
            this.fun.presentToast(data['response'].message, true, 'bottom', 2100);
            console.log("errrr" + data);
          }

        }, error => {
          this.loading.dismiss();
          console.log(error);
        });



    };
  console.log("After success callback");
    var cancelCallback = (error) => {
          //  alert(error.description + ' (Error ' + error.code + ')');
      this.loading.present();
      const formData = new FormData();
      formData.append('APIKEY', this.getApikey);
      formData.append('orderCode', orderid);
      formData.append('transactionId', '');
      formData.append('paymentType', '2');
      formData.append('paymentStatus', '2');
      var headers = new HttpHeaders();
      headers.append("Accept", 'application/json');
      headers.append('Content-Type', 'application/json');


      this.http.post(this.API_URL + 'paymentupdates', formData, { headers: headers })
        .subscribe(data => {
          console.log(data);
          this.loading.dismiss();
          this.fun.presentToast('Payment Cancelled', true, 'bottom', 2100);
          this.route.navigate(['./cart']);


        }, error => {
          this.loading.dismiss();
          console.log(error);
        });

    };
   console.log("after unsuccesful");
    RazorpayCheckout.open(options, successCallback, cancelCallback);

  }

  confirmorderroute(paymentid, ordrid, paymentstatus) {

  }

}
