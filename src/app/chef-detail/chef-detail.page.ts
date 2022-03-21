import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-chef-detail',
  templateUrl: './chef-detail.page.html',
  styleUrls: ['./chef-detail.page.scss'],
})
export class ChefDetailPage implements OnInit {
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

  constructor(private route: Router) { }

  ngOnInit() {
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
    this.route.navigate(['./online-menu']);
  }

  reset() {
    this.faqExpand1 = false;
    this.faqExpand2 = false;
    this.faqExpand3 = false;
    this.faqExpand4 = false;
    this.faqExpand5 = false;
  }

  faqExpandToggle1() {
    this.reset();
    this.faqExpand1 = !this.faqExpand1;
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
	 
 cart() {
    this.route.navigate(['./cart']);
  } 
}
