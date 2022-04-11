import { Component, OnInit } from "@angular/core";
import {
  AlertController,
  ModalController,
  ToastController,
} from "@ionic/angular";
import { Router } from "@angular/router";
import { CouponPage } from "../coupon/coupon.page";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { isEmpty, map } from "rxjs/operators";
import { FunctionsService } from "../functions.service";
import { LoadingService } from "../../providers/loadingservice";
import { DatabaseProvider } from "../../providers/database";
import { JsonPipe } from "@angular/common";
import { environment } from "../../environments/environment";

@Component({
  selector: "app-cart",
  templateUrl: "./cart.page.html",
  styleUrls: ["./cart.page.scss"],
})
export class CartPage implements OnInit {
  // API_URL = 'http://pos.demoplaces.in/apis/';
  API_URL = environment.API;
  getApikey: any;
  userId: any;
  dataDB: any;
  getids = [];
  getcartvalue: [];
  getpricefromapi: any;
  cartProducts = [];
  decreaseval: any;
  val: any;
  singleprice = "";
  getfinalprice = 0;
  grantTotal = 0;
  grantTotalValue = 0;
  getdbvalues: any;
  getcountfromdb = 0;
  loggeduserid: any;
  getcartdetail = [];
  getproductid: any;
  getquantity: any;
  getUsername: any;
  totalTaxAmount;
  totalCount = 0;
  public apiData = [];
  public discountAmount = 0;
  public couponData: any = {};
  public isCartLoaded: Boolean = false;
  public isCouponAdded: Boolean = false;
  advancedAmount: any;

  constructor(
    private route: Router,
    public db: DatabaseProvider,
    private modalController: ModalController,
    private http: HttpClient,
    private fun: FunctionsService,
    public loading: LoadingService,
    private alertController: AlertController,
    private toastController: ToastController
  ) {}

  increment(index, id) {
    console.log("indexinc" + index);
    this.getfinalprice = 0;
    var countItem = parseInt(this.cartProducts[index].currentItems) + 1;
    console.log("countItem" + countItem);
    let currentPrice = this.cartProducts[index].singleprice;
    this.cartProducts[index].price = currentPrice * countItem;
    this.val = this.cartProducts[index].currentItems = countItem;
    console.log("valll" + this.val);

    // console.log(this.val);

    this.db.getRecordByProductID(id).subscribe((res: any) => {
      console.log("get record by product id", res);
      // this.getproductbyids = res;

      if (res.length == 0) {
        let data = {
          id: id,
          loggeduserid: this.userId,
          itemQuantity: this.val,
        };
        console.log(data);
        this.db.insertRecordRow(data);
      } else {
        let data = {
          id: id,
          loggeduserid: this.userId,
          itemQuantity: this.val,
        };
        console.log(data);
        let printupdate = this.db.updateRecordRow(id, this.userId, this.val);
        console.log(printupdate);
        console.log(JSON.stringify(printupdate));
        //update
      }
    });
    this.gettotal();
  }

  decrement(index, id) {
    console.log("decc");
    this.decreaseval = this.cartProducts[index].currentItems -= 1;
    this.getfinalprice = 0;

    if (this.decreaseval < 0) {
      this.cartProducts[index].currentItems = 0;
      // this.currentNumber=0;
      this.cartProducts.splice(index);
    } else if (this.decreaseval == 0) {
      let printupdate = this.db.updateRecordRow(
        id,
        this.userId,
        this.decreaseval
      );
      let currentPrice = this.cartProducts[index].singleprice;
      this.cartProducts[index].price = currentPrice * this.decreaseval;
      console.log("card products slice", this.cartProducts);
      this.cartProducts.splice(index, 1);
      console.log("After cart producats", this.cartProducts);
      // if(this.cartProducts.length === 0){
      // }
    } else {
      let printupdate = this.db.updateRecordRow(
        id,
        this.userId,
        this.decreaseval
      );
      let currentPrice = this.cartProducts[index].singleprice;
      this.cartProducts[index].price = currentPrice * this.decreaseval;
    }

    this.gettotal();
  }

  gettotal() {
    for (var i = 0; i < this.cartProducts.length; i++) {
      this.getfinalprice = this.getfinalprice + this.cartProducts[i].price;
      console.log("finallllprice", this.getfinalprice);
    }
    this.grantTotal = this.getfinalprice + this.totalTaxAmount;
    this.grantTotalValue = this.grantTotal;
    console.log("grant total value", this.grantTotalValue, this.grantTotal);
    this.recalculateGrantTotal();
    this.getcount();
  }

  ngOnInit() {
    this.getUsername = localStorage.getItem("ret_name");

    this.getApikey = localStorage.getItem("apikey");
    this.userId = localStorage.getItem("loggeduserid");
  }
  async ionViewDidEnter() {
    this.loggeduserid = localStorage.getItem("loggeduserid");

    this.getSepidfromDB();
    // this.getcount();
    if (this.modalController) {
      this.modalController.dismiss();
    }
    //this.getcartdetails();
  }

  ionViewWillLeave() {
    if (this.loading) {
      this.loading.dismiss();
    }
  }
  async getcount() {
    this.getcountfromdb = 0;
    this.getdbvalues = await this.db.getAllrecords(this.loggeduserid);
    console.log("valll" + this.getdbvalues.length);
    console.log(JSON.stringify(this.getdbvalues));
    for (var i = 0; i < this.getdbvalues.length; i++) {
      this.getcountfromdb =
        this.getcountfromdb + this.getdbvalues[i].itemQuantity;
      console.log("counttttt" + this.getcountfromdb);
    }
    if (this.getcountfromdb === 0) {
      console.log("inside if condition");
      this.isCartLoaded = true;
    }
  }
  async callgetdbIdvalues() {
    let data = await this.db.getAllrecords(this.userId);
    console.log("callback function", data);

    return data;
  }

  async getSepidfromDB() {
    this.dataDB = await this.callgetdbIdvalues();
    var getids = [];
    this.cartProducts = [];
    for (var i = 0; i < this.dataDB.length; i++) {
      console.log("getid" + this.dataDB[i].id);
      getids.push(this.dataDB[i].id);
      console.log("inside" + getids);
    }
    let lostIds = getids.join();
    console.log("array data", lostIds);
    console.log("outside" + this.getids);
    console.log("for dataDB loop", JSON.stringify(this.dataDB));
    console.log("for dataDB loop", this.dataDB.length);
    let response = await this.getcartdetails(lostIds);
    console.log("after getcartdetails", response["response"].code);
    if (response["response"].code == 1) {
      this.getcartvalue = response["response"]["data"];
      console.log("In Success", this.getcartvalue);
    } else {
      this.getcartvalue = [];
    }

    if (this.getcartvalue.length > 0) {
      var apiDatas;
      apiDatas = this.getcartvalue;
      this.apiData = apiDatas;
      let totalTaxAmount = 0;
      for (let index in apiDatas) {
        var productId = apiDatas[index].id;
        let countQty = await this.getProductCountFromArray(
          productId,
          this.dataDB
        );
        if (countQty > 0) {
          apiDatas[index].currentItems = countQty;
          apiDatas[index].singleprice = apiDatas[index].price;
          var apiPrice = apiDatas[index].price * countQty;
          apiDatas[index].price = apiPrice;
          var taxPercentage = apiDatas[index].cgst ? apiDatas[index].cgst : 0;
          taxPercentage += apiDatas[index].sgst ? apiDatas[index].sgst : 0;
          var taxAmount = apiDatas[index].price * (taxPercentage / 100);
          apiDatas[index].taxAmount = taxAmount;
          totalTaxAmount += taxAmount;
          console.log("totallll", apiDatas[index].singleprice);
          this.cartProducts.push(apiDatas[index]);
        }
      }
      this.totalTaxAmount = Math.round(totalTaxAmount);
      this.isCartLoaded = false;
    } else {
      this.isCartLoaded = true;
    }
    console.log("cartProducts--->>>", this.cartProducts);

    this.gettotal();
  }

  async getProductCountFromArray(productId, dataDB) {
    var countQty = 0;
    console.log("in array loop", dataDB);
    for (var i = 0; i < dataDB.length; i++) {
      console.log("getid" + dataDB[i].id);
      console.log("productid" + productId);
      // console.log(calls.id)
      if (dataDB[i].id == productId) {
        return dataDB[i].itemQuantity;
      }
    }
    return countQty;
  }

  getcartdetails(productids) {
    this.loading.present();
    const formData = new FormData();
    formData.append("APIKEY", this.getApikey);
    formData.append("productIds", productids);

    console.log("formdata" + formData);

    var headers = new HttpHeaders();
    headers.append("Accept", "application/json");
    headers.append("Content-Type", "application/json");

    return new Promise((resolve, reject) => {
      this.http
        .post(this.API_URL + "cartproducts", formData, { headers: headers })
        .subscribe(
          (data) => {
            if (data["response"]["data"]) {
              console.log(data);
              //  remove duplicates from array
              data["response"]["data"] = data["response"]["data"].filter(
                (thing, index, self) =>
                  index === self.findIndex((t) => t.id === thing.id)
              );
              resolve(data);
              this.loading.dismiss();
              console.log("In response", data["response"]);
            } else {
              resolve(data);
              this.loading.dismiss();
            }
            /*       if (data['response'].code == 1) {
                   this.getcartvalue = data['response']['data'];
                   console.log("In Success",this.getcartvalue);
                   return data;
                 
                 }
                 else {
                   this.getcartvalue = [];
                   console.log("In else success",this.getcartvalue);
                   this.fun.presentToast(data['response'].message, true, 'bottom', 2100);
                   return data;
                 }
         */
          },
          (error) => {
            console.log("In Error");
            this.loading.dismiss();
            console.log(error);
          }
        );
    });
  }

  async coupon_code() {
    //  const modal = await  this.modalController.create({ component: CouponPage }).then((modalElement) => {
    //     modalElement.present();
    //   }
    //   )
    const modal = await this.modalController.create({ component: CouponPage });
    modal.onDidDismiss().then((data) => {
      console.log("modal retruned response value", data);
      const user = data["data"]; // Here's your selected user!
      console.log("user data value alone", user["response"]["data"]);
      this.couponData = user["response"]["data"];
      if (this.couponData["type"] == 2) {
        let amount = (this.couponData["discount"] / 100) * this.getfinalprice;
        this.couponData["discount"] = amount;
      }
      this.calculateGrantTotal(true);
    });
    return await modal.present();
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: this.couponData["coupon"],
      subHeader: "₹" + this.couponData["discount"],
      message: "Coupon code applied successfully!",
      buttons: ["OK"],
    });

    await alert.present();
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: "Coupon invalid",
      color: "danger",
      duration: 2000,
      position: "middle",
    });
    toast.present();
  }

  removeCoupon() {
    this.grantTotalValue = this.grantTotal;
    this.isCouponAdded = false;
    this.discountAmount = 0;
    this.couponData = {};
  }

  calculateGrantTotal(isAlertShowing?) {
    if (this.getfinalprice >= this.couponData["validamount"]) {
      console.log("coupon applied successfully");
      if (isAlertShowing) {
        this.presentAlert();
      }
      this.isCouponAdded = true;
      this.discountAmount = this.couponData["discount"];
      this.grantTotalValue = this.grantTotal - this.couponData["discount"];
    } else {
      console.log("coupon not valid");
      if (isAlertShowing) {
        this.presentToast();
      }
      this.grantTotalValue = this.grantTotal;
      this.discountAmount = 0;
      this.isCouponAdded = false;
      this.couponData = {};
    }
  }

  recalculateGrantTotal() {
    if (this.getfinalprice <= this.couponData["validamount"]) {
      this.grantTotalValue = this.grantTotal;
      this.discountAmount = 0;
      this.isCouponAdded = false;
    }
  }

  shipping() {
    let passfinalprice = this.getfinalprice;
    let passtotalcount = this.getcountfromdb;
    console.log("totalamount" + passfinalprice);
    console.log("length->" + JSON.stringify(this.cartProducts.length));
    this.getcartdetail = [];
    for (var i = 0; i < this.cartProducts.length; i++) {
      this.getcartdetail.push({
        productId: this.cartProducts[i].id,
        qty: this.cartProducts[i].currentItems,
      });
    }
    console.log;
    this.getfinalprice = 0;
    this.getcountfromdb = 0;
    localStorage.setItem("cart", JSON.stringify(this.getcartdetail));
    let couponcode = this.couponData["coupon"] ? this.couponData["coupon"] : "";
    this.route.navigate([
      "./shipping",
      {
        finalprice: this.grantTotalValue,
        couponCode: couponcode,
        advancedAmount: this.advancedAmount,
      },
    ]);
  }
  goToHome() {
    this.route.navigate(["./home"]);
  }
}
