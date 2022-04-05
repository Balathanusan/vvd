import { Platform } from '@ionic/angular';
import { Injectable, Output, EventEmitter } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Storage } from '@ionic/storage';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import {map} from 'rxjs/operators';
import {User} from '../model/user';
import {Register} from '../model/register';
import { LoadingService} from '../../providers/loadingservice';
import { SignInPage } from '../sign-in/sign-in.page';


const TOKEN_KEY = 'auth-token';
 const API_URL = 'http://pos.demoplaces.in/secures/';
// const API_URLothers = 'http://pos.demoplaces.in/apis/';
//const API_URL = 'http://vvdconnect.democodes.in/secures/';
const API_URLothers='http://vvdconnect.democodes.in/apis/';
//const API_URLothers = 'http://diwalisale.demoplaces.in/apis/';
const API_NEW = 'http://vvdconnect.democodes.in/apis/';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  sidebarVisibilityChange: Subject<boolean> = new Subject<boolean>();
  public currentUser: Observable<User>;
  private currentUserSubject: BehaviorSubject<User>;
  registerval: Register = new Register();
  productChanged: Subject<boolean> = new Subject<boolean>();


  constructor(private storage: Storage, private http: HttpClient,public loading: LoadingService) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  getMainCategory(data) {

    return this.http.get(API_URLothers + "maincategories?"+"APIKEY="+data).pipe(map((res: Response) => res));
  }

  getsubCategory(data,catid) {

    return this.http.get(API_URLothers + "subitems?"+"APIKEY="+data+"&catId="+catid).pipe(map((res: Response) => res));
  }

  getBanners(data){
    return this.http.get(API_URLothers + "banners?"+"APIKEY="+data).pipe(map((res: Response) => res));
  } 


  getBannersDetails(data,bannerid){
    return this.http.get(API_URLothers + "productsbybannerID?"+"APIKEY="+data+"&bannerId="+bannerid).pipe(map((res: Response) => res));
  } 
getProductlist(data,catid,initialCount?,filterParam?)
{
  console.log("filter param",filterParam)
  let limit = initialCount ? initialCount : '';
  let allQueryParam = catid ? "&catId="+catid : '' ;
  if(filterParam){
    allQueryParam += filterParam.Minimum ? "&minamount="+filterParam.Minimum : '';
    allQueryParam += filterParam.Maximum ? "&maxamount="+filterParam.Maximum : '';
    if(filterParam.Brand.length !==0 ){
      let BrandId = '';
      for(let index=0;index< filterParam.Brand.length;index++){
        BrandId += filterParam.Brand[index] ;
        BrandId += index !== (filterParam.Brand.length - 1) ? ',' : '';
      }
      // BrandId = BrandId.trim();
      // BrandId = BrandId.replace(' ',',');
      allQueryParam += filterParam.Brand ? "&brands="+BrandId : '';
    }
  }
  return this.http.get(API_URLothers + "products?"+"APIKEY="+data+"&Limits="+ limit+allQueryParam) .pipe(map((res: Response) => res));
  //return this.http.get(API_URLothers + "products?"+"APIKEY="+data+allQueryParam).pipe(map((res: Response) => res));
}

getProductlistBanner(data,catid,initialCount?,filterParam?)
{
  console.log("filter param",filterParam)
  let limit = initialCount ? initialCount : '';
  let allQueryParam = catid ? "&bannerId="+catid : '' ;
  if(filterParam){
    allQueryParam += filterParam.Minimum ? "&minamount="+filterParam.Minimum : '';
    allQueryParam += filterParam.Maximum ? "&maxamount="+filterParam.Maximum : '';
    if(filterParam.Brand.length !==0 ){
      let BrandId = '';
      for(let index=0;index< filterParam.Brand.length;index++){
        BrandId += filterParam.Brand[index] ;
        BrandId += index !== (filterParam.Brand.length - 1) ? ',' : '';
      }
      // BrandId = BrandId.trim();
      // BrandId = BrandId.replace(' ',',');
      allQueryParam += filterParam.Brand ? "&brands="+BrandId : '';
    }
  }
  return this.http.get(API_URLothers + "productsbybannerID?"+"APIKEY="+data+"&Limits="+ limit+allQueryParam) .pipe(map((res: Response) => res));
  //return this.http.get(API_URLothers + "products?"+"APIKEY="+data+allQueryParam).pipe(map((res: Response) => res));
}


getMyaddress(data)
{
  return this.http.get(API_URLothers + "myaddress?"+"APIKEY="+data).pipe(map((res: Response) => res));

}

getBrandsList(data) {
  return this.http.get(API_URLothers + "brands?"+"APIKEY="+data).pipe(map((res: Response) => res));
}

getManufactureList(data){
  return this.http.get(API_URLothers + "manufacturers?"+"APIKEY="+data).pipe(map((res: Response) => res));
}

getOrderDetails(data,orderCode)
{
  return this.http.get(API_URLothers + "orderdetails?"+"APIKEY="+data+"&orderCode="+orderCode).pipe(map((res: Response) => res));

}

getOrderchangeOrderStatusDetails(data,orderCode,status)
{
  return this.http.get(`${API_URLothers}changeStatus?APIKEY=${data}&orderId=${orderCode}&status=${status}`).pipe(map((res: Response) => res));

}
changeOrderStatus

getBrandDetails(data)
{
  return this.http.get(API_URLothers + "getbrands?"+"APIKEY="+data).pipe(map((res: Response) => res));

}

getBrandCategDetails(data,id)
{
  return this.http.get(API_URLothers + "getCategoryBybrand?"+"APIKEY="+data+"&brandId="+id).pipe(map((res: Response) => res));

}

getProductDetails(data,productid)
{
  return this.http.get(API_URLothers + "details?"+"APIKEY="+data+"&productId="+productid).pipe(map((res: Response) => res));

}

getSearchDetails(data,term)
{
  return this.http.get(API_URLothers + "productautocomplete?"+"APIKEY="+data+"&term="+term).pipe(map((res: Response) => res));

}


getOrderList(data,count)
{
  return this.http.get(API_URLothers + "myorders?"+"APIKEY="+data+"&Limits="+count).pipe(map((res: Response) => res));

}

verifyCoupon(apiKey,couponCode){
  return this.http.get(API_NEW + "couponvalidate?"+"APIKEY="+apiKey+"&coupon="+couponCode).pipe(map((res: Response) => res));

}

changedProductInfo(product){
this.productChanged.next(product);
console.log("changes observed in service",product);
}

//   login(user: User): Observable<any> {
//   //  headers.append('Access-Control-Allow-Origin', '*' );
//     return this.http.post<any> (API_URL + 'login', {headers:new HttpHeaders({'Authorization': 'Basic ' + btoa(user.username + ':' + user.password),'Access-Control-Allow-Origin':'*'
// })})
//     .pipe(map(response => {
//       if (response) {
//         if(response.response.code==2)
//         {
          
//         }
//         else
//         {
//           this.storage.set('currentUser', JSON.stringify(response)).then(() => {
//           this.sidebarVisibilityChange.next(response);
//           this.currentUserSubject.next(response);
//             });
//           }
//       }
//       return response;
//     }));
//   }

  setUserDetails(user){
    console.log('setUserDetails----',user);
   this.sidebarVisibilityChange.next(user);
  }

  
  logOut(): Observable<any> {
    return this.http.get(API_URL + 'logout', {})
    .pipe(map(response => {
      console.log('logout---------->');
      this.storage.remove('currentUser').then(() => {
        this.currentUserSubject.next(null);
            });
    }));
  }

  // authenticationState = new BehaviorSubject(false);

  // constructor(private storage: Storage, private plt: Platform) { 
  //   this.plt.ready().then(() => {
  //     this.checkToken();
  //   });
  // }

  // checkToken() {
  //   this.storage.get(TOKEN_KEY).then(res => {
  //     if (res) {
  //       this.authenticationState.next(true);
  //     }
  //   });
  // }

  // login() {
  //   return this.storage.set(TOKEN_KEY, 'Bearer 1234567').then(() => {
  //     this.authenticationState.next(true);
  //   });
  // }

  // logout() {
  //   return this.storage.remove(TOKEN_KEY).then(() => {
  //     this.authenticationState.next(false);
  //   });
  // }

  // isAuthenticated() {
  //   return this.authenticationState.value;
  // }



/////////jsr
getProducts(url,apiKey){
  return this.http.get(`${API_URLothers}products?APIKEY=${apiKey}${url}`) .pipe(map((res: Response) => res));
}

}
