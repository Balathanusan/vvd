import { Component, AfterViewInit, ViewChild, ElementRef, OnInit, NgZone } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { FunctionsService } from '../functions.service';
import { LoadingService } from '../../providers/loadingservice';

import { Platform } from '@ionic/angular';

import { NativeGeocoder, NativeGeocoderOptions, NativeGeocoderResult } from '@ionic-native/native-geocoder/ngx';
declare var google;
declare var AdvancedGeolocation:any;

@Component({
  selector: 'app-addaddress',
  templateUrl: './addaddress.page.html',
  styleUrls: ['./addaddress.page.scss'],
})
export class AddaddressPage implements OnInit {
  @ViewChild('map', { static: false }) mapElement: ElementRef;

  latitude: any;
  longitude: any;


  map: any;
  address: string;
  flatno='';
  landmark ='';
  getaddress: any;
  autocomplete: { input: string; };
  autocompleteItems: any[];
  location: any;
  placeid: any;
  GoogleAutocomplete: any;
  accuracy: number;
  circle: any;
  Latlng: any;
  directopt: any;
  public data: any = {
    placeopt: 'Home'
  };
  passlat: any;
  passlng: any;
  API_URL = 'http://vvdconnect.democodes.in/apis/';
  getApikey: any;
  getshrtname='';
  otheropt='';
  currentLat:any;
  currentLng:any;
  isFromPage;
  finalprice;
  couponCode;
  
  advancedAmount:any;
  geoencoderOptions: NativeGeocoderOptions = {
    useLocale: true,
    maxResults: 5
  };
  constructor(private platform: Platform,
    public zone: NgZone,
    private geolocation: Geolocation,
    private router: ActivatedRoute,
    public loading: LoadingService,
    private nativeGeocoder: NativeGeocoder, private route: Router, private http: HttpClient, private fun: FunctionsService
  ) {
    this.getApikey = localStorage.getItem('apikey');

    this.router.params.subscribe(params => {
      if(params['finalprice']){
        this.finalprice = params['finalprice'];
      }
      this.advancedAmount =params['advancedAmount'];
      if(params['couponCode']){
      this.couponCode = params['couponCode'];
      }
      if(params['directopt']){
        this.directopt = params['directopt'];
        console.log(this.directopt)
        if (this.directopt == 1) {
          this.passlat = params['getlat'];
          this.passlng = params['getlng'];
          this.address = params['getformattedaddrs'];
          this.getshrtname=params['getshrtname'];
          console.log("vvvvvvv" + this.address);
          this.loadMapsearch(this.passlat, this.passlng);
        }
        else {
          this.loadMap();
        }
      }
      
      
      if(params['isFromPage']){
        this.loadMap();
        this.isFromPage = params['isFromPage'] ? params['isFromPage'] : '';
      }
    }
    );
  }

  onChangeHandler($event) {
    this.data.placeopt = $event.target.value;
    console.log(this.data.placeopt)
  }

  ngOnInit() {

  }

  loadMap() {
   // console.log('---In Call------');

   let options = {
    enableHighAccuracy: true,
    accuracy: 5,
    timeout: 25000
  };

  
    this.geolocation.getCurrentPosition(options).then((resp) => {

      this.latitude = resp.coords.latitude;
      this.longitude = resp.coords.longitude;
      console.log(this.latitude + '---------' + this.longitude);
      let latLng = new google.maps.LatLng(resp.coords.latitude, resp.coords.longitude);
    //  console.log('maplog', latLng);
      let mapOptions = {
        center: latLng,
        zoom: 20,
        panControl: false,
        streetViewControl: false,
        zoomControl: false,
        mapTypeControl: false,
        scaleControl: false,
        overviewMapControl: false,
        rotateControl: false,
        fullscreenControl: false,
        setMyLocationEnabled:true,
        //icon: { url : 'assets/icon/locationmapmarker.png' },

        mapTypeId: google.maps.MapTypeId.ROADMAP
      }

      // var marker = new google.maps.Marker({
      //   map: map,
      //   animation: google.maps.Animation.DROP,
      //   position: latLng,
       
      // })

      // const image = {
      //   url: './assets/icon/locationmapmarker.png',
      //   size: {
      //     width: 24,
      //     height: 24
      //   }
      // };
      
      // let markerOptions= new google.maps.Marker ({
      //   'position':latLng,
      //   'icon': image
      // })
      
      // this.map.addMarker(markerOptions);
    //  alert("Callingin load")

      this.getAddressFromCoords(resp.coords.latitude, resp.coords.longitude);

      this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);


      this.map.addListener('dragend', () => {
        // var options1 = {

        // };
        // this.circle = new google.maps.Circle(options1);
        this.latitude = this.map.center.lat();
        this.longitude = this.map.center.lng();
        console.log(this.latitude + '----uuuuuuuuuuuu-----' + this.longitude);
        this.getAddressFromCoords(this.map.center.lat(), this.map.center.lng())
      });




    }).catch((error) => {
      console.log('Error getting location', error);
    });
  }

  loadMapsearch(lat, lng) {
    //console.log('---In Call------');
   // alert("Callingin loadmap")

    this.geolocation.getCurrentPosition().then((resp) => {

      this.latitude = lat;
      this.longitude = lng;
    //  console.log(this.latitude + '---------' + this.longitude);
      let latLng = new google.maps.LatLng(lat, lng);
    //  console.log('maplog', latLng);
      let mapOptions = {
        center: { lat: parseFloat(lat), lng: parseFloat(lng) },
        zoom: 20,
        panControl: false,
        streetViewControl: false,
        zoomControl: false,
        mapTypeControl: false,
        scaleControl: false,
        overviewMapControl: false,
        rotateControl: false,
        fullscreenControl: false,


        mapTypeId: google.maps.MapTypeId.ROADMAP
      }

    //  this.getAddressFromCoords(lat, lng);

      this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);



      this.map.addListener('dragend', () => {
        // var options1 = {

        // };
        // this.circle = new google.maps.Circle(options1);
        this.latitude = this.map.center.lat();
        this.longitude = this.map.center.lng();
        console.log(this.latitude + '----uuuuuuuuuuuu-----' + this.longitude);
        this.getAddressFromCoords(this.map.center.lat(), this.map.center.lng())
      });




    }).catch((error) => {
      console.log('Error getting location', error);
    });
  }

  getAddressFromCoords(lattitude, longitude) {
    console.log("getAddressFromCoords " + lattitude + " " + longitude);
    let options: NativeGeocoderOptions = {
      useLocale: true,
      maxResults: 5
    };
    this.Latlng = new google.maps.LatLng({ lat: lattitude, lng: longitude });

    // var options1 = {
    //   strokeColor: "#000000",
    //   strokeOpacity:5.0,
    //   strokeWeight: 5,
    //   fillColor: "#bdb9b9",
    //   fillOpacity: 10,
    //   map: this.map,
    //   center: this.Latlng,
    //   radius: 15
    // };
    // this.circle = new google.maps.Circle(options1);

    // var radius = 1000;
    // var circle = new google.maps.Circle({

    //   latitude:lattitude,
    //   longitude:longitude,
    //   radius: radius,
    //   fillColor: "#0000FF",
    //   fillOpacity: 0.1,
    //   map: this.map,
    //   strokeColor: "#FFFFFF",
    //   strokeOpacity: 0.1,
    //   strokeWeight: 2
    // });

    this.nativeGeocoder.reverseGeocode(lattitude, longitude, options)
      .then((result: NativeGeocoderResult[]) => {
        this.address = "";
        let responseAddress = [];
        for (let [key, value] of Object.entries(result[0])) {
          if (value.length > 0)
            responseAddress.push(value);
        }
        responseAddress.reverse();
        for (let value of responseAddress) {
          this.address += value + ", ";
        }
        this.address = this.address.slice(0, -2);
      })
      .catch((error: any) => {
        this.address = "Address Not Available!";
      });

  }

  ionViewWillLeave() {
    if(this.loading){
      this.loading.dismiss();
    }
  }


  getGeolocation() {
    this.geolocation.getCurrentPosition().then((resp) => {

      this.latitude = resp.coords.latitude;
      this.longitude = resp.coords.longitude;
      this.accuracy = resp.coords.accuracy;

      this.getGeoencoder(resp.coords.latitude, resp.coords.longitude);

    }).catch((error) => {
      alert('Error getting location' + JSON.stringify(error));
    });
  }

  //geocoder method to fetch address from coordinates passed as arguments
  getGeoencoder(latitude, longitude) {
    this.nativeGeocoder.reverseGeocode(latitude, longitude, this.geoencoderOptions)
      .then((result: NativeGeocoderResult[]) => {
        this.address = this.generateAddress(result[0]);
      })
      .catch((error: any) => {
        alert('Error getting location' + JSON.stringify(error));
      });
  }

  //Return Comma saperated address
  generateAddress(addressObj) {
    let obj = [];
    let address = "";
    for (let key in addressObj) {
      obj.push(addressObj[key]);
    }
    obj.reverse();
    for (let val in obj) {
      if (obj[val].length)
        address += obj[val] + ', ';
    }
    return address.slice(0, -2);
  }

  //FUNCTION SHOWING THE COORDINATES OF THE POINT AT THE CENTER OF THE MAP
  ShowCords() {
    alert('lat' + this.latitude + ', long' + this.longitude)
  }

  calladdaddress() {
    this.route.navigate(['./googlesearch']);
  }
  callSubmitaddress() {
if(this.flatno=='' || this.landmark=='' || this.address=='Address Not Available!')
{
  this.fun.presentToast('Please Enter all fields', true, 'bottom', 2100);

}
else if(this.data.placeopt=='Other')
{
  if(this.otheropt=='')
  {
    this.fun.presentToast('Please Enter Where', true, 'bottom', 2100);

  }
  else
  {
    this.data.placeopt=this.otheropt;
    this.loading.present();
    const formData = new FormData();
    formData.append('APIKEY', this.getApikey);
    formData.append('title', this.data.placeopt);
    formData.append('blockNo', this.flatno);
    formData.append('landmark', this.landmark);
    formData.append('address', this.address);
    formData.append('mapLocation', this.address);
    formData.append('mapHeading', this.getshrtname);
    formData.append('latVal', this.latitude);
    formData.append('lngVal', this.longitude);
    console.log("formdata" + formData)

    var headers = new HttpHeaders();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json');


    this.http.post(this.API_URL + 'addaddress', formData, { headers: headers })
      .subscribe(data => {
        console.log(data);

        this.loading.dismiss();
        if (data['response'].code == 1 && this.isFromPage !== 'MyDetailPage') {
          this.route.navigate(['./shipping',{finalprice:this.finalprice,couponCode:this.couponCode,advancedAmount:this.advancedAmount}]);
         } 
        else if(data['response'].code == 1 && this.isFromPage === 'MyDetailPage')
        {
          this.route.navigate(['./my-details',{isAddressAdded:true}]);
        }
        else {
          this.fun.presentToast(data['response'].message, true, 'bottom', 2100);

        }

      }, error => {
        this.loading.dismiss();
        console.log(error);
      });

  }

}
else{

    this.loading.present();
    const formData = new FormData();
    formData.append('APIKEY', this.getApikey);
    formData.append('title', this.data.placeopt);
    formData.append('blockNo', this.flatno);
    formData.append('landmark', this.landmark);
    formData.append('address', this.address);
    formData.append('mapLocation', this.address);
    formData.append('mapHeading', this.getshrtname);
    formData.append('latVal', this.latitude);
    formData.append('lngVal', this.longitude);
    console.log("formdata" + formData)

    var headers = new HttpHeaders();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json');


    this.http.post(this.API_URL + 'addaddress', formData, { headers: headers })
      .subscribe(data => {
        console.log(data);

        this.loading.dismiss();
        // if (data['response'].code == 1) {
        if (data['response'].code == 1 && this.isFromPage !== 'MyDetailPage') {
          this.route.navigate(['./shipping',{finalprice:this.finalprice,couponCode:this.couponCode}]);
        } 
        else if(data['response'].code == 1 && this.isFromPage === 'MyDetailPage'){
          this.route.navigate(['./my-details',{isAddressAdded:true}]);
        }
        else {
          this.fun.presentToast(data['response'].message, true, 'bottom', 2100);
        }

      }, error => {
        this.loading.dismiss();
        console.log(error);
      });
    }
  }

  //AUTOCOMPLETE, SIMPLY LOAD THE PLACE USING GOOGLE PREDICTIONS AND RETURNING THE ARRAY.
  UpdateSearchResults() {
  }

  //wE CALL THIS FROM EACH ITEM.
  SelectSearchResult(item) {
    ///WE CAN CONFIGURE MORE COMPLEX FUNCTIONS SUCH AS UPLOAD DATA TO FIRESTORE OR LINK IT TO SOMETHING
    alert(JSON.stringify(item))
    this.placeid = item.place_id
  }


  //lET'S BE CLEAN! THIS WILL JUST CLEAN THE LIST WHEN WE CLOSE THE SEARCH BAR.
  ClearAutocomplete() {
    this.autocompleteItems = []
    this.autocomplete.input = ''
  }

  //sIMPLE EXAMPLE TO OPEN AN URL WITH THE PLACEID AS PARAMETER.
  GoTo() {
    return window.location.href = 'https://maps.googleapis.com/maps/api/place/autocomplete/json?input=' + this.placeid;
    //return window.location.href = 'https://www.google.com/maps/search/?api=1&query=Google&query_place_id='+this.placeid;
  }



  ionViewDidLoad() {

  }





}
