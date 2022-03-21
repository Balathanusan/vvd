import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { NavController, MenuController } from '@ionic/angular';
import { DatabaseProvider } from '../../providers/database';


@Component({
  selector: 'app-signout',
  templateUrl: './signout.page.html',
  styleUrls: ['./signout.page.scss'],
})
export class SignoutPage implements OnInit {

  constructor(private storage: Storage, private navCtrl: NavController, public db: DatabaseProvider

  ) {

  }

  ngOnInit() {
    this.navCtrl.navigateRoot(['./sign-in']);
    this.storage.clear();
    localStorage.clear();
    localStorage.removeItem('firstName');
    localStorage.removeItem('email');
    localStorage.removeItem('apikey');
  this.db.deleteAll();
    
  }

}
