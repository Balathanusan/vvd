import { Component, OnInit, ViewChild, ElementRef, NgZone } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { NativeGeocoder, NativeGeocoderResult, NativeGeocoderOptions } from '@ionic-native/native-geocoder/ngx';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Router, ActivatedRoute } from '@angular/router';
import { FunctionsService } from '../functions.service';

import { LoadingService} from '../../providers/loadingservice';

declare var google;

@Component({
  selector: 'app-googlesearch',
  templateUrl: './googlesearch.page.html',
  styleUrls: ['./googlesearch.page.scss'],
})
export class GooglesearchPage implements OnInit {
  @ViewChild('map', { static: false }) mapElement: ElementRef;
  address: string;
  lat: string;
  long: string;
  autocomplete: { input: string; };
  autocompleteItems: any[];
  location: any;
  placeid: any;
  GoogleAutocomplete: any;
  place: any;
  APIcall = "http://vvdconnect.democodes.in/apis/mapgeocode?";
  getlat: any;
  getlng: any;
  getshrtname: any;
  getformattedaddrs: any;
  getstatus: any;
  getApikey:any;


  constructor(private geolocation: Geolocation,private route: Router,
    private nativeGeocoder: NativeGeocoder,public loading: LoadingService,
    public zone: NgZone, private http: HttpClient,private fun: FunctionsService) {

    this.GoogleAutocomplete = new google.maps.places.AutocompleteService();
    this.autocomplete = { input: '' };
    this.autocompleteItems = [];

  }
  //AUTOCOMPLETE, SIMPLY LOAD THE PLACE USING GOOGLE PREDICTIONS AND RETURNING THE ARRAY.
  UpdateSearchResults() {
    if (this.autocomplete.input == '') {
      this.autocompleteItems = [];
      return;
    }


    this.GoogleAutocomplete.getPlacePredictions({ input: this.autocomplete.input, componentRestrictions: {
      country: 'ind'
    } },
      (predictions, status) => {
        this.autocompleteItems = [];
        this.zone.run(() => {
       //   console.log(predictions)
          predictions.forEach((prediction) => {
            this.autocompleteItems.push(prediction);
          });
        });
      });
  }

  //wE CALL THIS FROM EACH ITEM.
  SelectSearchResult(item) {
    ///WE CAN CONFIGURE MORE COMPLEX FUNCTIONS SUCH AS UPLOAD DATA TO FIRESTORE OR LINK IT TO SOMETHING
 //   alert(JSON.stringify(item))
    console.log(JSON.stringify(item))
    this.placeid = item.place_id
    this.callMap(this.placeid)
  }
  //https://maps.googleapis.com/maps/api/place/details/json?place_id=ChIJE7CyvJMsATsRbgLtQkpAF9c&fields=name,geometry,rating,formatted_phone_number&key=AIzaSyDuipBDzzs_srysEJs5UZLKxQoo6siUmwE
    callMapapi(placeid) {
    this.getApikey = localStorage.getItem('apikey');
    this.loading.present();
    var headers = new HttpHeaders();
    headers.append('Access-Control-Allow-Origin', '*');
    headers.append('Access-Control-Allow-Headers', 'Content-Type');
    return this.http.get(this.APIcall + "placeId=" + placeid + "&APIKEY="+this.getApikey, { headers: headers }).pipe(map((res: Response) => res));
  
  }
  async callMap(placeid) {


    this.callMapapi(placeid).subscribe(async res => {

    
      this.loading.dismiss();
      this.getstatus = res['response']['status'];
       if(this.getstatus=='success')
       {
        this.getformattedaddrs = res['response']['data']['formattedAddress'];
        this.getlat = res['response']['data']['latitude']
        this.getlng = res['response']['data']['longitude']
        this.getshrtname = res['response']['data']['addressComponents']


        this.route.navigate(['./addaddress', { getformattedaddrs: this.getformattedaddrs,
        getlat:this.getlat,getlng:this.getlng,getshrtname:this.getshrtname,directopt:1 }]);

       }
       else{
        this.fun.presentToast('Please Enter all fields', true, 'bottom', 2100);

       }
       



    });
  }

  //lET'S BE CLEAN! THIS WILL JUST CLEAN THE LIST WHEN WE CLOSE THE SEARCH BAR.
  ClearAutocomplete() {
    this.autocompleteItems = []
    this.autocomplete.input = ''
  }

  //sIMPLE EXAMPLE TO OPEN AN URL WITH THE PLACEID AS PARAMETER.
  GoTo() {
    return window.location.href = 'https://www.google.com/maps/search/?api=1&query=Google&query_place_id=' + this.placeid;
  }

  ngOnInit() {
  }

  // https://maps.googleapis.com/maps/api/place/details/json?place_id=ChIJN1t_tDeuEmsRUsoyG83frY4&fields=name,rating,formatted_phone_number&key=YOUR_API_KEY

}
