import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { FunctionsService } from '../functions.service';
import { LoadingService } from 'src/providers/loadingservice';

@Component({
  selector: 'app-my-details',
  templateUrl: './my-details.page.html',
  styleUrls: ['./my-details.page.scss'],
})
export class MyDetailsPage implements OnInit {
  public fullName;
  public mobile;
  public addedAddressList;
  public apiKey;
  API_URL = 'http://vvdconnect.democodes.in/apis/';

  constructor(private route: Router,public router:ActivatedRoute,
    private authService:AuthenticationService, private fun: FunctionsService, private http: HttpClient, public loading: LoadingService) {
      this.router.params.subscribe(params => {
        if(params['isAddressAdded']){
          this.apiKey = localStorage.getItem('apikey');
          this.getAddressList();
        }
      })
    }

  ngOnInit() {
   this.fullName = localStorage.getItem('ret_name');
   this.mobile = localStorage.getItem('mobile');
   this.apiKey = localStorage.getItem('apikey');
   this.getAddressList();
  }

  ionViewWillLeave() {
    if(this.loading){
      this.loading.dismiss();
    }
  }
  
  async getAddressList(){
    this.loading.present();
    await this.authService.getMyaddress(this.apiKey).subscribe(async res => {
      console.log("service",res);
      let response = res['response']
      this.addedAddressList = response['data'];
      for(let index=0;index<this.addedAddressList.length;index++){
        let address = this.addedAddressList[index];
        let formattedAddress = address.blockNo ? (' '+address.blockNo) : '';
        formattedAddress +=  address.landmark ? (' '+address.landmark) : '';
        formattedAddress = formattedAddress.trim();
        formattedAddress = formattedAddress.replace(' ',', ');
        this.addedAddressList[index].formattedAddress = formattedAddress; 
      }
      console.log("address list",this.addedAddressList);
      this.loading.dismiss();
    });
  }

  deleteaddress(addressid) {
    this.loading.present();
    const formData = new FormData();
    formData.append('APIKEY', this.apiKey);
    formData.append('addressId', addressid);
    console.log("formdata" + formData)
    var headers = new HttpHeaders();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json');
    this.http.post(this.API_URL + 'deleteaddress', formData, { headers: headers })
      .subscribe(data => {
        console.log(data);
        this.loading.dismiss();
        if (data['response'].code == 1) {
          this.getAddressList();
        }
        else {
          this.fun.presentToast(data['response'].message, true, 'bottom', 2100);
        }
      }, error => {
        this.loading.dismiss();
        console.log(error);
      });
  }

 add_address() {
    this.route.navigate(['./addaddress',{isFromPage:'MyDetailPage'}]);
  } 
}
