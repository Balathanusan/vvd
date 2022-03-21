import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthenticationService } from './../services/authentication.service';
import { LoadingService} from '../../providers/loadingservice';

import { DatabaseProvider } from '../../providers/database';

@Component({
  selector: 'app-topsearch',
  templateUrl: './topsearch.page.html',
  styleUrls: ['./topsearch.page.scss'],
})
export class TopsearchPage implements OnInit {
  items = [];
  isItemAvailable = false;
  getApikey:any;

  initializeItems(){
   // this.items = ["","", ""];
}

constructor(public loading: LoadingService,private route: Router, private router: ActivatedRoute, public db: DatabaseProvider, private authService: AuthenticationService
  ) { }

  getItems(ev: any) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the searchbar
    const val = ev.target.value;
console.log("prin"+val);
this.gotoSearch(val);
    // if the value is an empty string don't filter the items
    if (val && val.trim() !== '') {
        this.isItemAvailable = true;
        this.items = this.items.filter((item) => {
            return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
        })
        console.log("printtt"+this.items);

    } else {
        this.isItemAvailable = false;
    }
}

async gotoSearch(value)
{
  this.loading.present();
  this.getApikey=localStorage.getItem('apikey');
 
  var headers = new HttpHeaders();
  headers.append("Accept", 'application/json');
  headers.append('Content-Type', 'application/json' );

  await this.authService.getSearchDetails(this.getApikey,value).subscribe(res => {
    this.loading.dismiss();
    this.items=res['data'];
  // if(this.items)
  this.isItemAvailable = true;

  console.log("loadd"+res);

  });
}

  ngOnInit() {
  }

}
