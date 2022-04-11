import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { AuthenticationService } from "./../services/authentication.service";
import { Geolocation } from "@ionic-native/geolocation/ngx";
import { LoadingService } from "../../providers/loadingservice";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { FunctionsService } from "../functions.service";
import { environment } from "../../environments/environment";

@Component({
  selector: "app-shipping",
  templateUrl: "./shipping.page.html",
  styleUrls: ["./shipping.page.scss"],
})
export class ShippingPage implements OnInit {
  getAddress: any;
  getApikey: any;
  getResdata: any;
  radioByDefault: Boolean = false;

  getid: any;
  disableButton = true;
  finalprice: any;
  couponCode: any;
  public data: any = {
    id: "",
  };
  API_URL = environment.API;

  advancedAmount: any;

  constructor(
    private router: ActivatedRoute,
    private fun: FunctionsService,
    private http: HttpClient,
    public loading: LoadingService,
    private geolocation: Geolocation,
    private route: Router,
    private authService: AuthenticationService
  ) {}

  ngOnInit() {
    this.geolocation
      .getCurrentPosition()
      .then((resp) => {
        // resp.coords.latitude
        // resp.coords.longitude
      })
      .catch((error) => {
        console.log("Error getting location", error);
      });
  }
  deleteaddress(addressid) {
    this.getApikey = localStorage.getItem("apikey");
    this.loading.present();
    const formData = new FormData();
    formData.append("APIKEY", this.getApikey);
    formData.append("addressId", addressid);
    console.log("formdata" + formData);
    var headers = new HttpHeaders();
    headers.append("Accept", "application/json");
    headers.append("Content-Type", "application/json");
    this.http
      .post(this.API_URL + "deleteaddress", formData, { headers: headers })
      .subscribe(
        (data) => {
          console.log(data);
          this.loading.dismiss();
          if (data["response"].code == 1) {
            // this.getid=addressid;
            this.callMyaddressapi();
          } else {
            this.fun.presentToast(
              data["response"].message,
              true,
              "bottom",
              2100
            );
          }
        },
        (error) => {
          this.loading.dismiss();
          console.log(error);
        }
      );
  }
  ionViewWillEnter() {
    this.router.params.subscribe((params) => {
      this.finalprice = params["finalprice"];
      this.couponCode = params["couponCode"];
      this.advancedAmount = params["advancedAmount"];
      var carttt = localStorage.getItem("cart");
      console.log("adddv" + this.advancedAmount);
    });
    this.callMyaddressapi();
  }
  async callMyaddressapi() {
    this.getApikey = localStorage.getItem("apikey");
    this.loading.present();

    await this.authService
      .getMyaddress(this.getApikey)
      .subscribe(async (res) => {
        this.getResdata = res["response"].data;
        this.radioByDefault = this.getResdata.length >= 1 ? true : false;
        this.disableButton = this.getResdata.length >= 1 ? false : true;
        this.getid = this.getResdata.length >= 1 ? this.getResdata[0].id : "";
        console.log(this.getResdata);
        this.loading.dismiss();
      });
  }
  getaddress(title, blockno, getid) {
    console.log("shipblkno" + getid);
    this.getid = getid;
    this.disableButton = false;
  }

  onChangeHandler($event) {
    this.data.id = $event.target.value;
    console.log(this.data.id);
  }

  add_address() {
    //this.route.navigate(['./googlesearch']);

    this.route.navigate([
      "./addaddress",
      {
        directopt: 0,
        finalprice: this.finalprice,
        couponCode: this.couponCode,
        advancedAmount: this.advancedAmount,
      },
    ]);
  }
  payment() {
    this.route.navigate([
      "./payment",
      {
        addressid: this.getid,
        finalprice: this.finalprice,
        couponCode: this.couponCode,
        advancedAmount: this.advancedAmount,
      },
    ]);
  }
}
