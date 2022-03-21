import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';
import { BehaviorSubject } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { LoadingService } from '../../providers/loadingservice';
import { DatabaseProvider } from '../../providers/database';
import { AuthenticationService } from './../services/authentication.service';
import { promise } from 'protractor';


@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {
  @ViewChild (IonInfiniteScroll,{static: false}) infiniteScroll: IonInfiniteScroll;
  // @ViewChild('IonInfiniteScroll', {read: IonInfiniteScroll,static:false}) public infiniteScroll:IonInfiniteScroll;
  productList: any;
  favorite_icon = false;
  Add_icon1 = false;
  Add_icon2 = false;
  Add_icon3 = false;
  Add_icon4 = false;
  Add_icon5 = false;
  Add_icon6 = false;
  Add_icon7 = false;
  Add_icon8 = false;
  Add_icon9 = false;
  Add_icon10 = false;
  Add_icon11 = false;
  Add_icon12 = false;
  Add_icon13 = false;
  Add_icon14 = false;
  Add_icon15 = false;

  tab: string = "cuisine";

  faqExpand1: boolean;
  faqExpand2: boolean;
  faqExpand3: boolean;
  faqExpand4: boolean;
  faqExpand5: boolean;
  currentItems = 0;
  loggeduserid: any;
  getproductbyids: any;
  cart = [];
  products = [];
  cartItemCount: BehaviorSubject<number>;
  val: any;
  decreaseval: any;
  getApikey: any;
  getResdata: any;
  getProductList = [];
  getdbvalues: any;
  getcountfromdb = 0;
  catid:any;
  items = [];
  public loadedDataCount = 0;
  public filterParamValue:any ;
  public totalRecordCount;
  changedProduct:any = {};
  appname = 'VVD';
  contentLoaded = true;
  getUsername;

  // tslint:disable-next-line: max-line-length
  constructor(private authService: AuthenticationService, private router: ActivatedRoute, private route: Router, public loading: LoadingService, public db: DatabaseProvider) {

    this.loggeduserid = localStorage.getItem('loggeduserid');
  

    // this.router.params.subscribe(params => {
    //   this.productList = JSON.parse(params['productlist']);
    // }
    // );
    //  this.db.deleteAllRecordRid(this.loggeduserid);
    this.authService.productChanged.subscribe((value)=>{
      this.changedProduct = value;
      this.items = [];
    })
  }

  doRefresh(refresher) {
    this.contentLoaded = false;
    this.items = [];
    this.callapi(this.catid,null);
    this.calldata();
    setTimeout(() => {
      refresher.target.complete();
      this.contentLoaded = true;
      this.infiniteScroll.disabled = false;
    }, 2000);
  }

  ionViewWillLeave() {
    if(this.loading){
      console.log("ion view will leave called",this.loading);
      this.loading.dismiss();
      this.contentLoaded = false;
    }
  }

  async ionViewWillEnter() {
    this.loading.present();
    console.log("loading presented...");
    this.getUsername = localStorage.getItem('ret_name');
    console.log("before this content loaded",this.loggeduserid);
    this.contentLoaded = false;
    console.log("iddddd1",this.loggeduserid);
    setTimeout(() => {
      console.log("set timeout function");
      // this.contentLoaded = true;
      if(this.infiniteScroll){
        this.infiniteScroll.disabled = false;
      }
    }, 1000);
     this.router.params.subscribe(params => {
      if(params && params['catid']){
        this.catid = JSON.parse(params['catid']);
        this.filterParamValue = null;
      } else if(params && params['data']){
        this.filterParamValue = JSON.parse(params['data']);
      }

    });
    this.items=[];
  this.callapi(this.catid,this.filterParamValue);
  this.calldata();
    this.loggeduserid = localStorage.getItem('loggeduserid');
    console.log('iddddd',this.loggeduserid);
    await this.db.getAllrecords(this.loggeduserid).then( res => {
      this.getdbvalues = res;
  }); 
    for (var i = 0; i < this.getdbvalues.length; i++) {
      this.getcountfromdb = this.getcountfromdb + this.getdbvalues[i].itemQuantity;
    }
  }

  ngOnInit() {

  }
  async callapi(catid,filterParam) {
    this.getApikey = localStorage.getItem('apikey');
    this.loadedDataCount = 6;
    // this.loading.present();
    this.loadProductList(catid,this.loadedDataCount,filterParam);
  }

  async loadProductList(catid, count, filterParam){
    console.log("In catid",catid);
    console.log("Incount",count);
    console.log("In filterParam",filterParam);
    await this.authService.getProductlist(this.getApikey,catid,count,filterParam).subscribe(async res => {
      
      this.getProductList = await this.getProductListValues(res['response']['data']);
      console.log("getProductList=================++++++++",this.getProductList);
      this.totalRecordCount = res['response']['data'].recordsTotal;
   //   let getschemeStatus= res['response']['data']['productscheme'].status;
      // this.items = this.getProductList;
     //console.log("getschemeStatus",getschemeStatus);
      console.log("totcount",this.totalRecordCount);
      if(this.totalRecordCount <= 6){
        console.log("In Side IF");
        this.items = [];
        console.log("In Side IF",this.changedProduct);
         for(let i=0;i<this.totalRecordCount;i++){
          console.log("In loadedItemLength IN" );
          if(this.changedProduct){
            console.log("In changedProduct IF",this.changedProduct);
            console.log("In getProductList IF",this.getProductList[i].id);
            console.log("In changedProduct IF",this.changedProduct.id);
            if(this.getProductList[i].id === this.changedProduct.id){
              this.getProductList[i].currentItems = this.changedProduct.itemQuantity;
            }
          }
          console.log("In IF PUSH",this.getProductList[i] );
          this.items.push( this.getProductList[i] );
         }
         console.log("IF Item List....",this.items);
      }
      else {
        console.log("In Side ELSE",this.items);
        console.log("In changedProduct ELSE",this.changedProduct);
        let loadedItemLength = this.items.length;
      for (let i = loadedItemLength; i < count; i++) {
        console.log("In loadedItemLength ELSE" );
        if(this.changedProduct){
          console.log("In getProductList ELSE",this.getProductList[i].id);
            console.log("In changedProduct ELSE",this.changedProduct.id);
          if(this.getProductList[i].id === this.changedProduct.id){
            this.getProductList[i].currentItems = this.changedProduct.itemQuantity;
          }
        }
        console.log("In PUSH ELSE",this.getProductList[i] );
        this.items.push( this.getProductList[i] );
      }
      console.log("ELSE Item List....",this.items);
      }
      this.contentLoaded = true;
      this.loading.dismiss();
      console.log("loading dismissed.....");
    });
    console.log("loading dismissed.....");
   let uniqueArrayIds = [];
   let uniqueArrayElements = [];
   console.log("Before Item List....",this.items);
   for(let itemIndex=0;itemIndex < this.items.length;itemIndex++){
     let item = this.items[itemIndex];
     if(uniqueArrayIds.indexOf(item.id) === -1){
      console.log("uniqueArrayIds...."+item.id);
        uniqueArrayIds.push(item.id);
        uniqueArrayElements.push(item);
     }
   }
   this.items = uniqueArrayElements;
   console.log("Final Item List....",this.items);
  }

  async getProductCountFromArray(productId, dataDB) {
    var countQty = 0;
    console.log('getProductCountFromArray====',dataDB);
    if(dataDB){
      for (var i = 0; i < dataDB.length; i++) {
        if (dataDB[i].id == productId) {

          return dataDB[i].itemQuantity;
        }
      }
    }
    return countQty;
  }

  async calldata() {
    var userId = localStorage.getItem('loggeduserid');
    // let data = await this.db.getAllrecords(userId);
    let data;
    await this.db.getAllrecords(userId).then( res => {
      data = res;
  }); 
  console.log('calldata=====',data);
  return data;
  }
  async getProductCountFromDB(productId, userId) {
    let countval = 0;
    await this.db.getRecordByID(userId, productId).subscribe((res: any) => {
      if (res.length == 0) {
        countval = 0;
      }
      else {
        countval = res[0].itemQuantity;
      }
    });
    return countval;
  }

  async getProductListValues(datas) {
   
    let products = [];
    var userId = localStorage.getItem('loggeduserid');

    let dataDB = await this.calldata();
    console.log("dataDB++++++++++++++++",dataDB);
    for (let index in datas) {
      console.log("dataaafor",datas);
      if(index !== 'recordsTotal'){
        console.log("dataaafor index",index);
        var productId = datas[index].id;
        let countQty = await this.getProductCountFromArray(productId, dataDB);
        console.log("countQty index",countQty);
        datas[index].currentItems = countQty;
        products.push(datas[index]);
      }
    }
    console.log("products index",products);
    return products;
  }

  doInfinite(infiniteScroll) {
    this.loadedDataCount += 6 ;
    if(this.loadedDataCount < this.totalRecordCount){
      setTimeout(() => {
        this.loadProductList(this.catid,this.loadedDataCount,this.filterParamValue);
        infiniteScroll.target.complete();
      }, 500);
    } else {
      this.loadProductList(this.catid,this.totalRecordCount,this.filterParamValue);
      // infiniteScroll.target.disabled = true;
      this.infiniteScroll.disabled = true;
    }
  }

  cartt() {
    this.getcountfromdb = 0;
    this.route.navigate(['./cart']);
    //  this.route.navigate(['./carthome']);

  }

  increment(index, id, currentItems,data) {
    var countItem = parseInt(this.items[index].currentItems) + 1;
    data.currentItems = countItem;
    this.items[index].currentItems = countItem;
    this.val = countItem;
    this.db.getRecordByProductID(id).subscribe((res: any) => {
      this.getproductbyids = res;
      if (res.length == 0) {
        let data = { id: id, loggeduserid: this.loggeduserid, itemQuantity: this.val };
        this.db.insertRecordRow(data);
      }
      else {
        let data = { id: id, loggeduserid: this.loggeduserid, itemQuantity: this.val };
        let printupdate = this.db.updateRecordRow(id, this.loggeduserid, this.val);
        //update
      }
      this.callcartcount();
    });

  

  }

  async callcartcount() {
    // this.getcountfromdb = 0;
    let getcountfromdb = 0;
    this.loggeduserid = localStorage.getItem('loggeduserid');
    await this.db.getAllrecords(this.loggeduserid).then( res => {
      this.getdbvalues = res;
  }); 
    // this.getdbvalues = await this.db.getAllrecords(this.loggeduserid);
    for (var i = 0; i < this.getdbvalues.length; i++) {
      this.getcountfromdb = this.getcountfromdb + this.getdbvalues[i].itemQuantity;
      getcountfromdb = getcountfromdb + this.getdbvalues[i].itemQuantity;
    }
this.getcountfromdb = getcountfromdb;
  }

  decrement(index, id, currentItems,data) {
    this.decreaseval = this.items[index].currentItems -= 1;
    data.currentItems = this.decreaseval;
    if (this.decreaseval < 0) {
      this.items[index].currentItems = 0;
      // this.currentNumber=0;
    }
    else if (this.decreaseval == 0) {
      // let data = { id: id, loggeduserid: this.loggeduserid, itemQuantity: this.decreaseval };
      let printupdate = this.db.updateRecordRow(id, this.loggeduserid, this.decreaseval);

    }

    else {
      // let data = { id: id, loggeduserid: this.loggeduserid, itemQuantity: this.decreaseval };
      let printupdate = this.db.updateRecordRow(id, this.loggeduserid, this.decreaseval);

    }

    this.callcartcount();

  }
  toggleSaveIcon1() {
    this.favorite_icon = !this.favorite_icon;
  }
  toggleAddIcon1() {
    this.Add_icon1 = !this.Add_icon1;
  }
  toggleAddIcon2() {
    this.Add_icon2 = !this.Add_icon2;
  }
  toggleAddIcon3() {
    this.Add_icon3 = !this.Add_icon3;
  }
  toggleAddIcon4() {
    this.Add_icon4 = !this.Add_icon4;
  }
  toggleAddIcon5() {
    this.Add_icon5 = !this.Add_icon5;
  }
  toggleAddIcon6() {
    this.Add_icon6 = !this.Add_icon6;
  }
  toggleAddIcon7() {
    this.Add_icon7 = !this.Add_icon7;
  }
  toggleAddIcon8() {
    this.Add_icon8 = !this.Add_icon8;
  }
  toggleAddIcon9() {
    this.Add_icon9 = !this.Add_icon9;
  }
  toggleAddIcon10() {
    this.Add_icon10 = !this.Add_icon10;
  }
  toggleAddIcon11() {
    this.Add_icon11 = !this.Add_icon11;
  }
  toggleAddIcon12() {
    this.Add_icon12 = !this.Add_icon12;
  }
  toggleAddIcon13() {
    this.Add_icon13 = !this.Add_icon13;
  }
  toggleAddIcon14() {
    this.Add_icon14 = !this.Add_icon14;
  }
  toggleAddIcon15() {
    this.Add_icon15 = !this.Add_icon15;
  }


  item_detail() {
    // this.route.navigate(['./online-menu']);
    this.getcountfromdb = 0;

    this.route.navigateByUrl('/online-menu', {
      replaceUrl: true
    });

  }

  async callProductDetails(id) {
    this.loading.present();
    this.getApikey = localStorage.getItem('apikey');
    await this.authService.getProductDetails(this.getApikey, id).subscribe(async res => {
      this.loading.dismiss();
      this.getResdata = res['response'].data;
      this.getcountfromdb = 0;
      this.route.navigate(['./online-menu', { getResdata: JSON.stringify(this.getResdata), getid: id }]);
    });
  }

  reset() {
    this.faqExpand1 = true;
    this.faqExpand2 = false;
    this.faqExpand3 = false;
    this.faqExpand4 = false;
    this.faqExpand5 = false;
  }

  faqExpandToggle1() {
    this.reset();
    this.faqExpand1 = true;
  }
  faqExpandToggle2() {
    this.reset();
    this.faqExpand2 = !this.faqExpand2;
  }
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
   
  filter() {
    this.route.navigate(['./refine']);
  }

}
