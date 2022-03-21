import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-order-confirmed',
  templateUrl: './order-confirmed.page.html',
  styleUrls: ['./order-confirmed.page.scss'],
})
export class OrderConfirmedPage implements OnInit {

  constructor( private navCtrl: NavController) { }

  ngOnInit() {
  }
	

goToHome() {
    this.navCtrl.navigateRoot(['./home']);
  } 
 goToMy_orders() {
    this.navCtrl.navigateRoot(['./my-orders']);
  } 

}
