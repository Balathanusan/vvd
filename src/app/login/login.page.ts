import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { FormBuilder, FormGroup, NgForm, Validators } from "@angular/forms";
import { HttpClient, HttpHeaders } from "@angular/common/http";
@Component({
  selector: "app-login",
  templateUrl: "./login.page.html",
  styleUrls: ["./login.page.scss"],
})
export class LoginPage implements OnInit {
  public loginForm: FormGroup;
  submitted = false;
  public temp: any;
  URL: string = "http://localhost:54016/LoginMaster/";

  constructor(
    private http: HttpClient,
    private route: Router,
    private formBuilder: FormBuilder
  ) {}
  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      // username: ['', [Validators.required, Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      username: ["", Validators.required],
      password: ["", [Validators.required, Validators.minLength(6)]],
    });
  }

  get f() {
    return this.loginForm.controls;
  }

  ngOnDestroy() {}
  // showConfirm() {
  //   const title = "success";
  //   const message =  "successfully updated";
  //   this.dialogService.alert(title, message, {
  //     // "icon": icon,
  //     "size": 'sm',
  //     "showCancelButton": false,
  //     "showConfirmButton": false,
  //     "showCloseButton": true,
  //   })
  // }
  // showfail() {
  //   const title = "Failed";
  //   const message =  "Login Failed";
  //   this.dialogService.alert(title, message, {
  //     // "icon": icon,
  //     "size": 'sm',
  //     "showCancelButton": false,
  //     "showConfirmButton": false,
  //     "showCloseButton": true,
  //   })
  // }
  onSubmit() {
    debugger;
    this.submitted = true;
    if (this.loginForm.value.invalid) {
      return;
    } else {
      debugger;
      // this.user.getlogin(this.loginForm.value).subscribe(data=>{
      //   if(data)
      //   {
      //     this.temp=data;
      //     if(this.temp && this.temp[0].status=="true")
      //     {
      //       console.log('vino');
      //       //this.route.navigate(['./dashboard']);
      //     }
      //   else
      //   {
      //     console.log('error');
      //   }
      //   }});
      // debugger;
      //  // this.soapCall();
      var headers = new HttpHeaders();
      headers.append("Accept", "application/json");
      headers.append("Content-Type", "application/json");
      let result = this.http
        .post(this.URL + "Getloginmaster", JSON.stringify(this.loginForm.value))
        .subscribe((data) => {
          if (data) {
            this.temp = data;
            if (this.temp && this.temp[0].status == "true") {
              //console.log('vino');
              this.route.navigate(["./dashboard"]);
              //  this.showConfirm();
            } else {
              // this.showfail();
            }
          }
        });
    }
  }
}
