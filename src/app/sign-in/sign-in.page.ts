import { AppComponent } from "./../app.component";
import { LoginPage } from "./../login/login.page";
import { element } from "protractor";
import { AuthenticationService } from "./../services/authentication.service";
import { Component, OnInit, NgZone } from "@angular/core";
import { FunctionsService } from "../functions.service";
import { Router } from "@angular/router";
import { NavController, MenuController } from "@ionic/angular";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { User } from "./../model/user";
import { Register } from "./../model/register";
import { Storage } from "@ionic/storage";
import { LoadingService } from "../../providers/loadingservice";
import { Validators, FormBuilder, FormGroup } from "@angular/forms";
//get google current location
import { Geolocation } from "@ionic-native/geolocation/ngx";
import {
  NativeGeocoder,
  NativeGeocoderResult,
  NativeGeocoderOptions,
} from "@ionic-native/native-geocoder/ngx";
import { Camera, CameraOptions } from "@ionic-native/Camera/ngx";
import { File } from "@ionic-native/file/ngx";
import { ActionSheetController } from "@ionic/angular";
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from "@angular/common/http";
import { HTTP } from "@ionic-native/http";
import { map, tap } from "rxjs/operators";
import { exit } from "process";
import {
  BehaviorSubject,
  Observable,
  Subject,
  VirtualTimeScheduler,
} from "rxjs";
import { GoogleAddressParser } from "./GoogleAddressParser";
import { environment } from "../../environments/environment";

declare var google;

@Component({
  selector: "app-sign-in",
  templateUrl: "./sign-in.page.html",
  styleUrls: ["./sign-in.page.scss"],
})
export class SignInPage implements OnInit {
  public loginForm: FormGroup;
  public registerForm: FormGroup;
  submitted = false;
  public temp: any;
  tab = "sign_in";
  user: User = new User();
  Username: any;
  Password: any;
  registerval: Register = new Register();
  errorMessage: string;
  public geolatitude: any = 0; //latitude
  public geolongitude: any = 0; //longitude
  public lat: any = 0; //latitude
  public long: any = 0; //longitude
  public address: any;

  public latitude: any = 0; //latitude
  public longitude: any = 0;

  public area: any;
  public zone: any;
  public city: any;
  public state: any;
  data: any;
  googleres: any;
  googleadd: any;
  googlelatlong: any;
  public response: any;
  public logresponse: any;
  public regresponse: any;
  clickedImage = "../assets/images/person-outline.png";
  clickedImageDoc = "../assets/images/document-attach-outline.png";
  ImageUploadCheck = 2;
  upiidValue: any;
  document: any;

  public currentUser: Observable<User>;
  private currentUserSubject: BehaviorSubject<User>;
  sidebarVisibilityChange: Subject<boolean> = new Subject<boolean>();

  passImage: any;
  passImageDoc = "";

  // public address: any;
  getstatus: any;
  code: any;
  API_URL = environment.API_SECURE;
  //API_URL = 'http://diwalisale.demoplaces.in/secures/';
  URL = environment.API_SECURE;
  Gooole_Api = "https://maps.googleapis.com/maps/api/geocode/json?sensor=true";
  APikey = "AIzaSyCT4iF2aDqg5az_UHJwCCYRh0mSvBSfAQ4";
  form_messages = {
    mobileNumber: [
      { type: "required", message: "Mobile number is required." },
      {
        type: "maxlength",
        message: "Mobile number requires atleast 10 characters",
      },
      {
        type: "minlength",
        message: "Mobile number requires atleast 10 characters",
      },
    ],
    password: [
      { type: "required", message: "Password is required." },
      { type: "minlength", message: "Password requires atleast 3 characters" },
    ],
  };

  //image picker

  croppedImagepath = "";
  isLoading = false;

  imagePickerOptions = {
    maximumImagesCount: 1,
    quality: 50,
  };

  geoAddress: string;

  //Geocoder configuration
  geoencoderOptions: NativeGeocoderOptions = {
    useLocale: true,
    maxResults: 5,
  };

  constructor(
    private AppComponent: AppComponent,
    private authService: AuthenticationService,
    private route: Router,
    private splashScreen: SplashScreen,
    private fun: FunctionsService,
    private navCtrl: NavController,
    private http: HttpClient,
    private storage: Storage,
    public loading: LoadingService,
    private menuCtrl: MenuController,
    private formBuilder: FormBuilder,
    private geolocation: Geolocation,
    private nativeGeocoder: NativeGeocoder,
    private camera: Camera,
    public actionSheetController: ActionSheetController,
    private file: File
  ) {
    this.currentUserSubject = new BehaviorSubject<User>(
      JSON.parse(localStorage.getItem("currentUser"))
    );
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  pickImage(sourceType) {
    const options: CameraOptions = {
      quality: 100,
      sourceType: sourceType,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      correctOrientation: true,
    };
    this.camera.getPicture(options).then(
      (imageData) => {
        // imageData is either a base64 encoded string or a file URI
        let base64Image = "data:image/jpeg;base64," + imageData;
        this.clickedImage = base64Image;
        this.passImage = imageData;
        this.ImageUploadCheck = 1;
        console.log("vallll" + this.clickedImage);
      },
      (err) => {
        // Handle error
        console.log(err);
      }
    );
  }

  pickImageDoc(sourceType) {
    const options: CameraOptions = {
      quality: 100,
      sourceType: sourceType,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      correctOrientation: true,
    };
    this.camera.getPicture(options).then(
      (imageData) => {
        // imageData is either a base64 encoded string or a file URI
        let base64Image = "data:image/jpeg;base64," + imageData;
        this.clickedImageDoc = base64Image;
        this.passImageDoc = imageData;
        console.log("vallll" + this.clickedImageDoc);
      },
      (err) => {
        // Handle error
        console.log(err);
      }
    );
  }

  async selectImage() {
    const actionSheet = await this.actionSheetController.create({
      header: "Select Image source",
      buttons: [
        {
          text: "Load from Library",
          handler: () => {
            this.pickImage(this.camera.PictureSourceType.PHOTOLIBRARY);
          },
        },
        {
          text: "Use Camera",
          handler: () => {
            this.pickImage(this.camera.PictureSourceType.CAMERA);
          },
        },
        {
          text: "Cancel",
          role: "cancel",
        },
      ],
    });
    await actionSheet.present();
  }

  async selectImageDoc() {
    const actionSheet = await this.actionSheetController.create({
      header: "Select Image source",
      buttons: [
        {
          text: "Load from Library",
          handler: () => {
            this.pickImageDoc(this.camera.PictureSourceType.PHOTOLIBRARY);
          },
        },
        {
          text: "Use Camera",
          handler: () => {
            this.pickImageDoc(this.camera.PictureSourceType.CAMERA);
          },
        },
        {
          text: "Cancel",
          role: "cancel",
        },
      ],
    });
    await actionSheet.present();
  }

  options = {
    timeout: 10000,
    enableHighAccuracy: true,
    maximumAge: 3600,
  };

  //use geolocation to get user's device coordinates

  async getCurrentCoordinates() {
    // debugger;
    this.geolocation
      .getCurrentPosition()
      .then((resp) => {
        this.geolatitude = resp.coords.latitude;
        this.geolongitude = resp.coords.longitude;
        let obj = {
          latitude: resp.coords.latitude,
          long: resp.coords.longitude,
        };
        console.log(obj);
      })
      .catch((error) => {
        console.log("Error getting location", error);
      });
  }

  // geocoder options

  nativeGeocoderOptions: NativeGeocoderOptions = {
    useLocale: true,
    maxResults: 5,
  };

  // getAddress(lat,long){
  //  // debugger;
  //   this.nativeGeocoder.reverseGeocode(lat, long, this.nativeGeocoderOptions)
  //   .then((res: NativeGeocoderResult[]) => {
  //     this.address = this.pretifyAddress(res[0]);
  //     console.log("addrrr"+this.address)
  //   })
  //   .catch((error: any) => {
  //     alert('Error getting location'+ JSON.stringify(error));
  //   });
  // }

  // address
  pretifyAddress(address) {
    let obj = [];
    let data = "";
    for (let key in address) {
      obj.push(address[key]);
    }
    obj.reverse();
    for (let val in obj) {
      if (obj[val].length) data += obj[val] + ", ";
    }
    return address.slice(0, -2);
  }

  ngOnInit(): void {
    //debugger;
    this.loginForm = this.formBuilder.group({
      username: ["", [Validators.required]],
      password: ["", [Validators.required, Validators.minLength(3)]],
    });

    this.registerForm = this.formBuilder.group({
      ret_name: ["", Validators.required],
      own_name: ["", Validators.required],
      mobile: ["", Validators.required],
      alt_mbl_num: ["", Validators.required],
      address: ["", Validators.required],
      area: ["", Validators.required],
      zone: ["", Validators.required],
      state: ["", Validators.required],
      city: ["", Validators.required],
      latitude: ["", Validators.required],
      longitude: ["", Validators.required],
      upi_id: [""],
      ret_img: ["", Validators.required],
      document: [""],
    });
    this.getaddressDetails();
  }

  get f() {
    return this.loginForm.controls;
  }

  get r() {
    return this.registerForm.controls;
  }

  ionViewDidEnter(): void {
    this.menuCtrl.enable(false, "start");
    this.menuCtrl.enable(false, "end");
    this.splashScreen.hide();
  }

  goToForgotPassword() {
    this.route.navigate(["./forgot-password"]);
  }

  goToOtp() {
    this.route.navigate(["./otp"]);
  }

  registernow() {
    this.submitted = true;
    //debugger;
    // stop here if form is invalid
    if (this.registerForm.invalid) {
      console.log(this.registerForm.value);
      return;
    } else {
      var headers = new HttpHeaders();
      headers.append("Accept", "application/json");
      headers.append("Content-Type", "application/json");
      let result = this.http
        .post(
          this.Gooole_Api + "Getsalesmaster",
          JSON.stringify(this.registerForm.value),
          { headers: headers }
        )
        .subscribe(
          (data) => {
            this.response = result;
            if (this.response[0].status == "1") {
              //  debugger;
              console.log(data);
              this.route.navigate(["./sign-in"]);
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
  }

  goToregister() {
    this.loading.present();
    const formData = new FormData();
    formData.append("name", this.registerval.name);

    formData.append("email", this.registerval.email);
    formData.append("password", this.registerval.password);
    formData.append("mobile", this.registerval.mobile);
    var headers = new HttpHeaders();
    headers.append("Accept", "application/json");
    headers.append("Content-Type", "application/json");

    this.http
      .post(this.API_URL + "register", formData, { headers: headers })
      .subscribe(
        (data) => {
          console.log(data);
          this.storage.set("registerdata", data);
          this.loading.dismiss();
          if (data["response"].code == 1) {
            localStorage.setItem("name", this.registerval.name);
            localStorage.setItem("email", this.registerval.email);
            localStorage.setItem("password", this.registerval.password);
            localStorage.setItem("mobile", this.registerval.mobile);
            localStorage.setItem("otpval", data["response"].data.otp);
            this.route.navigate(["./otp"]);
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

  goToAddcontact() {
    this.loading.present();
    const formcontactData = new FormData();
    formcontactData.append("name", this.registerval.name);
    formcontactData.append("email", this.registerval.email);
    formcontactData.append("email", this.registerval.password);
    formcontactData.append("mobile", this.registerval.mobile);
    var headers = new HttpHeaders();
    headers.append("Accept", "application/json");
    headers.append("Content-Type", "application/json");
    headers.append("Access-Control-Allow-Origin", "*");

    this.http
      .post(this.API_URL + "register", formcontactData, { headers: headers })
      .subscribe(
        (data) => {
          console.log(data);
          this.storage.set("registerdata", data);
          this.loading.dismiss();
          if (data["response"].code == 1) {
            localStorage.setItem("name", this.registerval.name);
            localStorage.setItem("email", this.registerval.email);
            localStorage.setItem("password", this.registerval.password);
            localStorage.setItem("mobile", this.registerval.mobile);
            this.route.navigate(["./home"]);
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

  // getaddress1()
  // {
  //   console.log('clickkk','cliccc');

  // }

  getaddressDetails() {
    console.log("clickkk", "cliccc1111");

    this.geolocation
      .getCurrentPosition()
      .then((resp) => {
        this.geolatitude = resp.coords.latitude;
        this.geolongitude = resp.coords.longitude;
        //let obj = {'latlng=':resp.coords.latitude+","+resp.coords.longitude};
        // this.getGeoencoder(this.geolatitude,this.geolongitude);
        this.nativeGeocoder
          .reverseGeocode(
            this.geolatitude,
            this.geolongitude,
            this.geoencoderOptions
          )
          .then((result: NativeGeocoderResult[]) => {
            console.log("logggg", result);
            this.geoAddress = this.generateAddress(result[0]);
            let getarea = this.geoAddress.split(",");

            this.state = result[0]["administrativeArea"];
            this.zone = result[0]["subAdministrativeArea"];
            this.city = result[0]["locality"];
            this.area = result[0]["subLocality"];
            this.address =
              result[0]["areasOfInterest"] + "," + result[0]["subLocality"];
            console.log("addddddddddd result", this.address);

            this.latitude = this.geolatitude;
            this.longitude = this.geolongitude;
            this.registerForm.controls["address"].setValue(this.address);
            this.registerForm.controls["area"].setValue(this.area);
            this.registerForm.controls["city"].setValue(this.city);
            this.registerForm.controls["zone"].setValue(this.zone);
            this.registerForm.controls["state"].setValue(this.state);

            this.registerForm.controls["latitude"].setValue(this.latitude);
            this.registerForm.controls["longitude"].setValue(this.longitude);

            // let getzone =this.geoAddress.split(",",4);
            // this.zone=getzone;
            // this.area=getzone;
            // this.city=getzone;

            // let getstate=this.geoAddress.split(",",5);
            // this.state=getstate;

            // console.log("getaddress",getaddress);

            console.log("logggg", this.geoAddress);
          })
          .catch((error: any) => {
            alert("Error getting location" + JSON.stringify(error));
          });

        console.log("lattttt", this.geolatitude);
      })
      .catch((error) => {
        console.log("Error getting location", error);
      });
    //   this.http.get("https://maps.googleapis.com/maps/api/geocode/json?sensor=true&key=AIzaSyDdpsTSPJ-UOwolJpmROMVpCqJPkUoJn4g&latlng="+this.geolatitude+","+this.geolongitude)
    //   .subscribe(res1 => {
    //     console.log("New Response=====res1[0]",res1['results'][0]);
    //     const address = new GoogleAddressParser(res1['results'][0]['address_components']).result();
    //     console.log("New Response=====address",address);
    //     this.area=address['city'];
    //     this.zone=address['city'];
    //     this.city=address['city'];
    //     this.state=address['state'];
    //     this.area=address['street_name'];
    //     this.address=address['street_number']+","+address['street_name'];
    //     console.log("New Response=====",res1);
    //     this.googleres=res1['results'];
    //     console.log(this.googleres);
    //     this.googleadd=this.googleres[0]['address_components']
    //     this.googlelatlong=this.googleres[0]['geometry']
    //     console.log(this.googlelatlong);
    // //    //console.log(this.googlelatlong);
    //     // this.address=this.googleadd[0]['long_name']+","+this.googleadd[1]['long_name']//this.googleres[0]['formatted_address'];
    //     // this.area=this.googleadd[2]['long_name'];
    //     // this.zone=this.googleadd[3]['long_name'];
    //     // this.city=this.googleadd[5]['long_name'];
    //     // this.state=this.googleadd[6]['long_name'];
    //     this.latitude= this.geolatitude;
    //     this.longitude=this.geolongitude;
    //     this.registerForm.controls['address'].setValue(this.address);
    //    this.registerForm.controls['area'].setValue(this.area);
    //    this.registerForm.controls['city'].setValue(this.city);
    //    this.registerForm.controls['zone'].setValue(this.zone);
    //    this.registerForm.controls['state'].setValue(this.state);

    //    this.registerForm.controls['latitude'].setValue(this.latitude);
    //    this.registerForm.controls['longitude'].setValue(this.longitude);
    //   });
  }

  getGeoencoder(latitude, longitude) {
    this.nativeGeocoder
      .reverseGeocode(latitude, longitude, this.geoencoderOptions)
      .then((result: NativeGeocoderResult[]) => {
        console.log("logggg", result);
        this.geoAddress = this.generateAddress(result[0]);
        let getarea = this.geoAddress.split(",");

        this.state = result[0]["administrativeArea"];
        this.zone = result[0]["subAdministrativeArea"];
        this.city = result[0]["locality"];
        this.area = result[0]["subLocality"];
        this.address =
          result[0]["areasOfInterest"] + "," + result[0]["subLocality"];
        console.log("addddddddddd result", this.address);

        //  this.address=getarea[0]+","+getarea[1];
        //  this.zone=getarea[3];
        //  this.area=getarea[3];
        //  this.city=getarea[3];
        //  this.state=getarea[4];
        this.latitude = latitude;
        this.longitude = longitude;
        this.registerForm.controls["address"].setValue(this.address);
        this.registerForm.controls["area"].setValue(this.area);
        this.registerForm.controls["city"].setValue(this.city);
        this.registerForm.controls["zone"].setValue(this.zone);
        this.registerForm.controls["state"].setValue(this.state);

        this.registerForm.controls["latitude"].setValue(this.latitude);
        this.registerForm.controls["longitude"].setValue(this.longitude);

        // let getzone =this.geoAddress.split(",",4);
        // this.zone=getzone;
        // this.area=getzone;
        // this.city=getzone;

        // let getstate=this.geoAddress.split(",",5);
        // this.state=getstate;

        // console.log("getaddress",getaddress);

        console.log("logggg", this.geoAddress);
      })
      .catch((error: any) => {
        alert("Error getting location" + JSON.stringify(error));
      });
  }

  generateAddress(addressObj) {
    let obj = [];
    let address = "";
    for (let key in addressObj) {
      obj.push(addressObj[key]);
    }
    obj.reverse();
    for (let val in obj) {
      if (obj[val].length) address += obj[val] + ", ";

      // let getaddress = address[1] + address[2] ;
      // this.address=getaddress;
      // let getzone = address[4] ;
      // this.zone=getzone;
      // this.area=getzone;
      // this.city=getzone;

      // let getstate=address[5] ;
      // this.state=getstate;

      console.log("addrrr", address);
    }
    return address.slice(0, -2);
  }

  async registersubmit() {
    var headers1 = new HttpHeaders();
    // debugger;
    this.registerForm.controls["ret_img"].setValue(this.passImage);
    this.registerForm.controls["document"].setValue(this.passImageDoc);
    console.log(this.registerForm.value);
    let getMobileno = this.registerForm.get("mobile").value;
    let getupiid = this.registerForm.get("upi_id").value;
    let getDocument = this.registerForm.get("document").value;
    console.log("getvaa", getupiid);

    if (getupiid == "") {
      this.registerForm.controls["upi_id"].setValue(" ");
      console.log("iffgetvaa", getupiid);
    }
    if (getDocument == "") {
      this.registerForm.controls["document"].setValue(" ");
      console.log("iffgetvaass", getDocument);
    }

    if (this.registerForm.invalid) {
      console.log("Error");
      this.loading.dismiss();
      this.fun.presentToast(
        "Fill the all mandate fields!",
        true,
        "bottom",
        2100
      );
    } else {
      if (this.ImageUploadCheck == 2) {
        this.fun.presentToast(
          "Please Upload Retaile Image",
          true,
          "bottom",
          2100
        );
      } else {
        this.loading.present();

        const headers = new HttpHeaders();

        var body = JSON.stringify(this.registerForm.value);
        let result = this.http
          .post(this.API_URL + "newregister", body)
          .subscribe(
            (data) => {
              console.log(data["response"]["code"]);
              if (data["response"]["code"] == 1) {
                this.loading.dismiss();
                let success = data["response"]["message"];

                let getAction = data["response"]["data"]["action"];
                if (getAction == "OTP") {
                  this.route.navigate(["./otp"]);
                  localStorage.setItem("otpMobileNumber", getMobileno);
                  this.fun.presentToast(success, true, "bottom", 2100);
                } else {
                  this.fun.presentToast(success, true, "bottom", 2100);
                }
              } else if (data["response"]["code"] == 2) {
                let success = data["response"]["message"];
                let getAction = data["response"]["data"]["action"];
                if (getAction == "OTP") {
                  this.loading.dismiss();

                  this.route.navigate(["./otp"]);
                  localStorage.setItem("otpMobileNumber", getMobileno);
                  this.fun.presentToast(success, true, "bottom", 2100);
                } else {
                  this.loading.dismiss();
                  let error = data["response"]["message"];
                  this.fun.presentToast(error, true, "bottom", 2100);
                }
              }
            },
            (error) => {
              console.log(error);
              this.loading.dismiss();
              if (error.status) {
                // console.log("Customer details already exists in TVS ONE");
              }
            }
          );
      }
    }
  }

  // goTohome() {
  //   //debugger;
  //   const headers = new HttpHeaders();
  //   headers.append("Authorization", 'Basic ');
  //   this.loading.present();
  //   console.log(this.loginForm.value);
  //   console.log(JSON.stringify(this.loginForm.value));

  //   this.http.post(this.API_URL + "login",JSON.stringify(this.loginForm.value),{headers:headers})
  //     .subscribe(data => {
  //       this.logresponse=data;
  //       console.log(data['response']['code']);
  //     if (data['response']['code'] === 1) {
  //       this.loading.dismiss();
  //       this.navCtrl.navigateRoot(['./home']);
  //     } else {
  //       this.loading.dismiss();

  //       this.fun.presentToast('Wrong Input!', true, 'bottom', 2100);
  //     }
  //   }, err => {
  //     this.loading.dismiss();
  //     this.fun.presentToast('Wrong Input!', true, 'bottom', 2100);
  //     // this.errorMessage = 'Username or password is incorrect.';
  //   });
  // }

  goTohome() {
    this.loading.present();
    console.log(this.loginForm.value);
    // this.loginForm.value.username;
    // this.loginForm.value.password;
    // var formData: any = new FormData();
    // formData.append("username", this.loginForm.value.username);
    // formData.append("password", this.loginForm.value.password);
    //console.log("========>>>>>",this.loginForm.value.username,this.loginForm.value.password);
    //et headers: Headers = new Headers();
    this.Username = this.loginForm.value.username;
    this.Password = this.loginForm.value.password;
    console.log(this.user.username, this.user.password);
    console.log(this.loginForm.value);
    var headers = new HttpHeaders();
    headers.append("Accept", "application/json");
    headers.append("Content-Type", "application/json");
    console.log(
      this.API_URL + "loginnew",
      JSON.stringify(this.loginForm.value)
    );
    let result = this.http
      .post(this.API_URL + "loginnew", JSON.stringify(this.loginForm.value))
      .subscribe((data) => {
        if (data) {
          this.response = data["response"];
          if (data["response"]["code"] == 1) {
            console.log(data["response"]["data"]["apikey"]);
            localStorage.setItem("apikey", data["response"]["data"]["apikey"]);
            localStorage.setItem(
              "loggeduserid",
              data["response"]["data"]["userId"]
            );
            localStorage.setItem(
              "firstName",
              data["response"]["data"]["ret_name"]
            );
            console.log(localStorage.getItem("apikey"));
            console.log(localStorage.getItem("loggeduserid"));
            //this.storage.set('registerdata',datas);
            this.route.navigate(["./home"]);
          } else {
            console.log("error");
          }
        }
      });
    // headers.append("Authorization", "Basic Auth" + btoa(this.loginForm.value.username + ":" + this.loginForm.value.password));
    //debugger;
    // this.authService.login(this.user).subscribe(data => {
    //   if (data.response.code === 1) {
    //     this.loading.dismiss();
    //     this.navCtrl.navigateRoot(['./home']);
    //   } else {
    //     this.loading.dismiss();
    //     this.fun.presentToast('Wrong Input!', true, 'bottom', 2100);
    //   }
    // }
    //  console.log("log :",this.API_URL + 'login', {headers:new HttpHeaders({'Authorization': ('Username :'+this.loginForm.value.username + 'Password :' + this.loginForm.value.password)
    //     })});
    //   this.http.post(this.API_URL + 'login', {headers:new HttpHeaders({'Authorization': ('Username :'+this.loginForm.value.username + 'Password :' + this.loginForm.value.password)
    //     })})
    //     .subscribe(data => {
    //       console.log("*****",data);
    //     }
    //   , err => {
    //     this.loading.dismiss();
    //     this.fun.presentToast('Wrong Input!', true, 'bottom', 2100);
    //     // this.errorMessage = 'Username or password is incorrect.';
    //   });
    // let authorizationData = 'Basic ' + btoa(this.Username + ':' + this.Password);
    // console.log("========>>>>>", this.user.username,this.user.password,"***",authorizationData);
    // const headerOptions = {
    //     headers: new HttpHeaders({
    //         'Content-Type':  'application/json',
    //         'Authorization': authorizationData
    //     })
    // };

    // this.http.post(this.API_URL + 'login', { headers: headerOptions })
    //   .subscribe(
    //       data => { // json data
    //           console.log('Success: ', data);
    //       },
    //       error => {
    //           console.log('Error: ', error);
    //       });
  }

  // goTohome() {
  //   debugger;
  //   if(this.loginForm.valid)
  //   {
  //     this.submitted = true;
  //     this.loading.present();
  //     this.authService.login(this.user).subscribe(data => {
  //       if (data.response.code === 1) {
  //         this.loading.dismiss();
  //         this.navCtrl.navigateRoot(['./home']);
  //       }
  //     // }, err => {
  //     //   this.loading.dismiss();
  //     //   this.fun.presentToast('Wrong Input!', true, 'bottom', 2100);
  //     //   // this.errorMessage = 'Username or password is incorrect.';
  //     // }
  //     });
  //   }
  //   else {
  //     this.loading.dismiss();
  //     this.fun.presentToast('Wrong Input!', true, 'bottom', 2100);
  //   }
  // }

  gologin() {
    console.log(this.loginForm.invalid);
    if (this.loginForm.invalid) {
      console.log(this.loginForm.value);
      this.loading.dismiss();
      this.fun.presentToast("Wrong Input!", true, "bottom", 2100);
    } else {
      console.log(this.loginForm.value);
      var headers = new HttpHeaders();
      headers.append("Accept", "application/json");
      headers.append("Content-Type", "application/json");
      console.log(
        this.API_URL + "loginnew",
        JSON.stringify(this.loginForm.value)
      );
      let result = this.http
        .post(this.API_URL + "loginnew", JSON.stringify(this.loginForm.value))
        .subscribe((data) => {
          if (data) {
            this.response = data["response"];
            if (data["response"]["code"] == 1) {
              console.log(data["response"]["data"]["apikey"]);
              localStorage.setItem(
                "apikey",
                data["response"]["data"]["apikey"]
              );
              localStorage.setItem(
                "loggeduserid",
                data["response"]["data"]["userId"]
              );
              localStorage.setItem(
                "firstName",
                data["response"]["data"]["ret_name"]
              );
              console.log(localStorage.getItem("apikey"));
              console.log(localStorage.getItem("loggeduserid"));
              //this.storage.set('registerdata',datas);
              this.route.navigate(["./home"]);
            } else {
              console.log("error");
            }
          }
        });
    }
  }

  async gologinNew() {
    // localStorage.setItem('apikey','2y10itDDulQ7yZCBTCW6dnJ0OcqXBmwXhMDcWtz8d0PrbmmdPkiFu');
    // this.route.navigate(['./home']);
    console.log(this.loginForm.invalid);
    if (this.loginForm.invalid) {
      console.log(this.loginForm.value);
      this.loading.dismiss();
      this.fun.presentToast("Wrong Input!", true, "bottom", 2100);
    } else {
      console.log(this.loginForm.value);
      var headers = new HttpHeaders();
      headers.append("Accept", "application/json");
      headers.append("Content-Type", "application/json");
      console.log(
        this.API_URL + "loginnew",
        JSON.stringify(this.loginForm.value)
      );
      let result = this.http
        .post(this.API_URL + "loginnew", JSON.stringify(this.loginForm.value))
        .subscribe((data) => {
          if (data) {
            this.response = data["response"];
            if (data["response"]["code"] == 1) {
              console.log(data["response"]["data"]["apikey"]);
              localStorage.setItem(
                "apikey",
                data["response"]["data"]["apikey"]
              );
              localStorage.setItem(
                "loggeduserid",
                data["response"]["data"]["userId"]
              );
              localStorage.setItem(
                "ret_name",
                data["response"]["data"]["ret_name"]
              );
              localStorage.setItem(
                "mobile",
                data["response"]["data"]["mobile"]
              );
              localStorage.setItem(
                "available_points",
                data["response"]["data"]["available_points"]
              );
              console.log(localStorage.getItem("apikey"));
              console.log(localStorage.getItem("mobile"));
              //this.storage.set('registerdata',datas);
              console.log("currentUser", data["response"]["data"]);
              this.storage
                .set("currentUser", JSON.stringify(data))
                .then((datas) => {
                  console.log("currentUser IN", datas);
                  this.sidebarVisibilityChange.next(datas);
                  this.currentUserSubject.next(datas);
                });
              console.log("app-----------------------------");
              this.AppComponent.ionViewWillEnter();
              console.log("app----------------------++++++++++++++++-------");
              this.route.navigate(["./home"]);
            } else {
              console.log("messss" + data["response"][0]["message"]);
              this.fun.presentToast(
                data["response"][0]["message"],
                true,
                "bottom",
                2100
              );
            }
          } else {
            console.log("error");
          }
        });
    }
  }
}
