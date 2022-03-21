import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { FunctionsService } from '../functions.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Storage } from '@ionic/storage';

import { LoadingService } from '../../providers/loadingservice';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.page.html',
  styleUrls: ['./otp.page.scss'],
})
export class OtpPage implements OnInit {
  getRegisterdata: any;
  getname: any;
  getmail: any;
  getmobile: any;
  getotp: any;
  getpassword: any;
  getotpcheck: any;
  maxtime: any=30;
  timeInSeconds;
  time;
  runTimer;
  hasStarted;
  hasFinished;
  remainingTime;
  displayTime;
  resetOtpDisabled: Boolean = true;
  // API_URL = 'http://pos.demoplaces.in/secures/';
  API_URL = 'http://vvdconnect.democodes.in/secures/';



  constructor(private navCtrl: NavController, private fun: FunctionsService,
    private http: HttpClient, private storage: Storage, public loading: LoadingService,
   private authService:AuthenticationService

  ) {
    console.log(this.getotpcheck);
   
    this.getmobile = localStorage.getItem('otpMobileNumber');
    // this.getotp = localStorage.getItem('otpval');
    // this.getpassword = localStorage.getItem('password');
    // this.getotpcheck = this.getotp;
  }

  ngOnInit() {     
    this.initTimer();
     this. startTimer();

  }
  goTohome() {
   // console.log(this.getotpcheck);
    console.log(this.getotp);

    if ( this.getotp !="") {
      this.loading.present();

      const formData = new FormData();
      // formData.append('name', this.getname);
      // formData.append('email', this.getmail);
      // formData.append('password', this.getpassword);

      formData.append('mobile', this.getmobile);
      formData.append('otp', this.getotp);

      var headers = new HttpHeaders();
      headers.append("Accept", 'application/json');
      headers.append('Content-Type', 'application/json');
      this.http.post(this.API_URL + 'otpverify', formData, { headers: headers })
        .subscribe(data => {
          console.log(data);
          this.loading.dismiss();

          if (data['response']['code'] == 1) {
            // this.storage.set('currentUser', JSON.stringify(data));
            // this.authService.setUserDetails(data);
            // localStorage.setItem('firstName', data['response']['data']['firstName']);
            // localStorage.setItem('email', data['response'].data.email);
            this.navCtrl.navigateRoot(['./sign-in']);
            this.fun.presentToast(data['response']['message'], true, 'bottom', 2100);

          }
          else {
            this.fun.presentToast(data['response']['message'], true, 'bottom', 2100);

          }

        }, error => {
          this.loading.dismiss();

          console.log(error);
        });
    }
    else {
      this.fun.presentToast('Please Enter Correct OTP', true, 'bottom', 2100);

    }


  }

  goToResend() {
    this.loading.present();
    //  this.navCtrl.navigateRoot(['./home']);
    const formData = new FormData();
   
    formData.append('mobile', this.getmobile);
    formData.append('otp', this.getotp);

    var headers = new HttpHeaders();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json');
    this.http.post(this.API_URL + 'resendotp', formData, { headers: headers })
      .subscribe(data => {
        console.log(data);
        this.loading.dismiss();
        if (data['response'].code == 1) {
          this.fun.presentToast(data['response']['message'], true, 'bottom', 2100);
              }
        else {
          this.fun.presentToast(data['response'].message, true, 'bottom', 2100);

        }

      }, error => {
        this.loading.dismiss();

        console.log(error);
      });

  }

  initTimer() {
    // Pomodoro is usually for 25 minutes
   if (!this.timeInSeconds) { 
     this.timeInSeconds = 90; 
   }
 
   this.time = this.timeInSeconds;
   this.runTimer = false;
   this.hasStarted = false;
   this.hasFinished = false;
   this.remainingTime = this.timeInSeconds;
   
   this.displayTime = this.getSecondsAsDigitalClock(this.remainingTime);
 }
 
 startTimer() {
    this.runTimer = true;
   this.hasStarted = true;
   this.timerTick();
 }
 
 pauseTimer() {
   this.runTimer = false;
 }
 
 resumeTimer() {
   this.startTimer();
 }
 
 timerTick() {
   setTimeout(() => {
 
     if (!this.runTimer) { return; }
     this.remainingTime--;
     this.displayTime = this.getSecondsAsDigitalClock(this.remainingTime);
     if (this.remainingTime > 0) {
       this.timerTick();
     }
     else {
       this.hasFinished = true;
       this.resetOtpDisabled = false;
     }
   }, 1000);
 }
 
 getSecondsAsDigitalClock(inputSeconds: number) {
   var sec_num = parseInt(inputSeconds.toString(), 10); // don't forget the second param
   var hours = Math.floor(sec_num / 3600);
   var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
   var seconds = sec_num - (hours * 3600) - (minutes * 60);
   var hoursString = '';
   var minutesString = '';
   var secondsString = '';
  //  hoursString = (hours < 10) ? "0" + hours : hours.toString();
   minutesString = (minutes < 10) ? "0" + minutes : minutes.toString();
   secondsString = (seconds < 10) ? "0" + seconds : seconds.toString();
  //  return hoursString + ':' + minutesString + ':' + secondsString;
  return minutesString + ':' + secondsString;
 }

  
}
