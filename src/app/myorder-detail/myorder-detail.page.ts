import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";

import { LoadingService } from "../../providers/loadingservice";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { FunctionsService } from "../functions.service";
import { AuthenticationService } from "./../services/authentication.service";

@Component({
  selector: "app-myorder-detail",
  templateUrl: "./myorder-detail.page.html",
  styleUrls: ["./myorder-detail.page.scss"],
})
export class MyorderDetailPage implements OnInit {
  faqExpand1: boolean = true;
  faqExpand2: boolean;
  faqExpand3: boolean;
  faqExpand4: boolean;
  faqExpand5: boolean;
  faqExpand6: boolean;
  faqExpand7: boolean;
  order: any = {};
  orderCode;
  getApikey;
  orderStatus
  OrderFullDetail: any = {};
  orderedProducts: any;
  totalAmount;
  grandTotal;
  discountAmout;
  couponCode;
  totalTax: any;
  orderId: any;
  advanceAmount: any;
  chequeNumber: any;

  constructor(
    private authService: AuthenticationService,
    private route: Router,
    private fun: FunctionsService,
    private http: HttpClient,
    public loading: LoadingService,
    private router: ActivatedRoute
  ) {
    this.router.params.subscribe((params) => {
      this.orderCode = params["orderCode"];
      this.getApikey = localStorage.getItem("apikey");
      this.order = JSON.parse(params["order"]);
      this.getOrderDetails();
    });
  }

  ngOnInit() {}

  ionViewWillLeave() {
    if (this.loading) {
      this.loading.dismiss();
    }
  }

  async getOrderDetails() {
    this.loading.present();
    await this.authService
      .getOrderDetails(this.getApikey, this.orderCode)
      .subscribe(async (res) => {
        const { data } = res["response"];
        this.orderStatus = data.orderStatus;
        this.orderId = data.orderId;
        this.orderedProducts = data.orderedProducts;
        this.totalAmount = data.totalAmount;
        this.totalTax = data.totalTax;
        this.discountAmout = data.couponDiscount;
        this.grandTotal = this.totalAmount - this.discountAmout;
        this.couponCode = data.couponCode;
        this.advanceAmount = data.advanceAmt;
        this.chequeNumber=data.chequeNumber
        this.loading.dismiss();
      });
  }

   submitFlag() {
    this.loading.present();
     this.authService
      .getOrderchangeOrderStatusDetails(this.getApikey, this.orderId,4)
      .subscribe((res) => {
        console.log(res);
        this.loading.dismiss();
      });
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
  faqExpandToggle1() {
    // this.reset();
    this.faqExpand1 = !this.faqExpand1;
  }
  faqExpandToggle2() {
    this.reset();
    this.faqExpand2 = !this.faqExpand2;
  }
  rate_restro() {}
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
}
