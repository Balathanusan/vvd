import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AppModule } from '../app.module';
import { DatabaseProvider } from '../../providers/database';

@Component({
  selector: 'app-confirm-order',
  templateUrl: './confirm-order.page.html',
  styleUrls: ['./confirm-order.page.scss'],
})
export class ConfirmOrderPage implements OnInit {

  orderdetail: any;
  orderdetailproducts: any;
  totalamount: any;
  totalTax;
  grantTotal;
  ordertype: any;
  couponDiscount;

  constructor(private route: Router, private router: ActivatedRoute) {

    this.router.params.subscribe(params => {

      this.orderdetail = JSON.parse(params['orderdetail']);
      this.ordertype = this.orderdetail.response.data.paymentType;
      this.totalamount = this.orderdetail.response.data.totalAmount;
      this.totalTax = this.orderdetail.response.data.totalTax;
      this.orderdetailproducts = this.orderdetail.response.data.orderedProducts;
      this.grantTotal= this.orderdetail.response.data.grandAmount;
      // this.grantTotal = this.totalTax + this.totalamount;
      // this.grantTotal = Math.round(this.grantTotal);
      // this.couponDiscount = this.orderdetail.response.data.couponDiscount;
      // this.grantTotal = this.grantTotal - this.couponDiscount;
    }
    );

  }

  ngOnInit() {
  }



  checkout() {
    this.route.navigate(['./home']);
  }

}
