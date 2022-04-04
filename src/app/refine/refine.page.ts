import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AuthenticationService } from "../services/authentication.service";
import { LoadingService } from "src/providers/loadingservice";
import { DatabaseProvider } from "src/providers/database";
import { Options } from "selenium-webdriver";

@Component({
  selector: "app-refine",
  templateUrl: "./refine.page.html",
  styleUrls: ["./refine.page.scss"],
})
export class RefinePage implements OnInit {
  // public brandName;
  // public filterValue = {};
  // public brandsList;
  // public manufactureList;
  // public categoryList;
  // public brandCheckedIds = [];
  // public filterList = [];
  // public filterListBackup = [];
  // public isShowAmountFilter = false;
  // public isBrandListLoaded: Boolean = false;
  // public isManufactureListLoaded: Boolean = false;
  // public isCategoriesLoaded: Boolean = false;
  // public brandsCount = 0;
  // public manufactureCount = 0;
  // public categoriesCount = 0;
  // public isListLoaded = true;
  //jsr
  filterItems;
  listOptions;

  public userId;
  public minRangeValue = 1;
  public maxRangeValue = 200000;
  public rangeValue = {
    upper: 200000,
    lower: 0,
  };
  public apiKey;
  public minimumValue = 0;
  public maximumValue = 200000;
  public currentFilterName = "Brands";
  public filterOptions = ["Brands", "Category", "Amount"];

  constructor(
    public route: Router,
    public authService: AuthenticationService,
    private loading: LoadingService,
    public db: DatabaseProvider
  ) {}

  ngOnInit() {
    this.userId = localStorage.getItem("loggeduserid");
    this.apiKey = localStorage.getItem("apikey");
    // this.getBrands();
    this.authService
      .getBrandsList(this.apiKey)
      .subscribe(({ response: { data } }: any) => {
        this.filterItems = { ...this.filterItems, Brands: data };
        console.log(this.filterItems);
        this.listOptions = data;
      });
    this.authService
      .getMainCategory(this.apiKey)
      .subscribe(({ response: { data } }: any) => {
        this.filterItems = { ...this.filterItems, Category: data };
        console.log(this.filterItems);
      });
  }
  changeFilter(filter) {
    this.listOptions = this.filterItems[filter];
    this.currentFilterName = filter;
  }
  filterSelection({ id, title, isChecked = false }) {
    this.listOptions = this.listOptions.map((d) =>
      d.id == id ? { id, title, isChecked: !isChecked } : d
    );
    console.log(this.listOptions);
    const listIndex = this.listOptions.map(({ id }) => id);
    this.filterItems = {
      ...this.filterItems,
      [this.currentFilterName]: this.filterItems[this.currentFilterName].map(
        (item) =>
          listIndex.includes(item.id)
            ? this.listOptions[listIndex.indexOf(item.id)]
            : item
      ),
    };
  }
  submitFilter() {
    console.log(this.filterItems);
    console.log(this.rangeValue);
    let data;
    if (this.rangeValue) {
      data = {
        Minimum: [this.rangeValue.lower],
        Maximum: [this.rangeValue.upper],
      };
    }
    data = JSON.stringify({
      ...data,
      Brand: this.filterItems.Brands.filter(({ isChecked }) => isChecked).map(
        ({ id }) => id
      ),
      catid: this.filterItems.Category.filter(
        ({ isChecked }) => isChecked
      ).map(({ id }) => id),
    });
    console.log(data);

    this.route.navigate([
      "./search",
      { data },
    ]);
  }
  onSearch(e) {
    const searchTerm = e.srcElement.value;

    this.listOptions = this.filterItems[this.currentFilterName].filter(
      ({ title }) =>
        title.toLowerCase().includes(searchTerm.toLowerCase() || searchTerm)
    );
  }

  trackValue(rangeValue) {
    this.minimumValue = rangeValue.lower;
    this.maximumValue = rangeValue.upper;
  }
  clearFilter() {
    this.filterItems = {
      Brands: this.filterItems["Brands"].map(({ id, title }) => ({
        id,
        title,
      })),
      Category: this.filterItems["Category"].map(({ id, title }) => ({
        id,
        title,
      })),
    };
    this.rangeValue = {
      upper: 200000,
      lower: 0,
    };
    this.changeFilter(this.currentFilterName);
  }
  getCount(filter) {
    try {
      const length = this.filterItems[filter].filter(
        ({ isChecked }) => isChecked
      ).length;
      return length;
    } catch (error) {
      return "";
    }
  }
  // loadFilter(filtername) {
  //   if (filtername === "Brands") {
  //     this.getBrands();
  //     this.isShowAmountFilter = false;
  //     this.currentFilterName = filtername;
  //   } else if (filtername === "Manufactures") {
  //     this.getManufactureList();
  //     this.isShowAmountFilter = false;
  //     this.currentFilterName = filtername;
  //   } else if (filtername === "Category") {
  //     this.getCategories();
  //     this.isShowAmountFilter = false;
  //     this.currentFilterName = filtername;
  //   } else {
  //     this.isShowAmountFilter = true;
  //     this.currentFilterName = filtername;
  //   }
  // }

  // async getCategories() {
  //   this.loading.present();
  //   console.log("Filter: Categories", this.brandCheckedIds);
  //   if (!this.isCategoriesLoaded) {
  //     await this.authService
  //       .getMainCategory(this.apiKey)
  //       .subscribe(async (res) => {
  //         console.log("***********************");
  //         console.log("Categories response", res);
  //         console.log("***********************");
  //         this.categoryList =
  //           res["response"] && res["response"].data ? res["response"].data : "";
  //         this.isCategoriesLoaded = true;
  //         for (let index = 0; index < this.categoryList.length; index++) {
  //           this.categoryList[index]["type"] = res["response"].type;
  //         }
  //         this.filterList = this.categoryList;
  //         this.filterListBackup = this.filterList;
  //         this.loading.dismiss();
  //       });
  //   } else {
  //     this.filterList = this.categoryList;
  //     this.filterListBackup = this.filterList;
  //     this.preChecked();
  //     this.loading.dismiss();
  //   }
  // }

  // async getBrands() {
  //   this.loading.present();
  //   console.log("check list", this.brandCheckedIds);
  //   if (!this.isBrandListLoaded) {
  //     await this.authService
  //       .getBrandsList(this.apiKey)
  //       .subscribe(async (res) => {
  //         console.log("brands response", res);
  //         this.brandsList =
  //           res["response"] && res["response"].data ? res["response"].data : "";
  //         this.isBrandListLoaded = true;
  //         for (let index = 0; index < this.brandsList.length; index++) {
  //           this.brandsList[index]["type"] = res["response"].type;
  //         }
  //         this.filterList = this.brandsList;
  //         this.filterListBackup = this.filterList;
  //         this.loading.dismiss();
  //       });
  //   } else {
  //     this.filterList = this.brandsList;
  //     this.filterListBackup = this.filterList;
  //     this.preChecked();
  //     this.loading.dismiss();
  //   }
  // }

  // preChecked() {
  //   this.filterList.filter((data) => {
  //     if (this.brandCheckedIds.indexOf(data.id) !== -1) {
  //       data["isChecked"] = true;
  //     } else {
  //       data["isChecked"] = false;
  //     }
  //   });
  //   this.filterListBackup = this.filterList;
  // }

  // async getManufactureList() {
  //   this.loading.present();
  //   console.log("manu check list", this.brandCheckedIds);
  //   if (!this.isManufactureListLoaded) {
  //     await this.authService
  //       .getManufactureList(this.apiKey)
  //       .subscribe(async (res) => {
  //         console.log("brands response", res);
  //         this.manufactureList =
  //           res["response"] && res["response"].data ? res["response"].data : "";
  //         this.isManufactureListLoaded = true;
  //         for (let index = 0; index < this.manufactureList.length; index++) {
  //           this.manufactureList[index]["type"] = res["response"].type;
  //         }
  //         this.filterList = this.manufactureList;
  //         this.filterListBackup = this.filterList;
  //         this.loading.dismiss();
  //       });
  //   } else {
  //     this.filterList = this.manufactureList;
  //     this.filterListBackup = this.filterList;
  //     this.preChecked();
  //     this.loading.dismiss();
  //   }
  // }

  // public checkAndUncheck = (option) => {
  //   if (this.brandCheckedIds.indexOf(option.id) === -1) {
  //     this.brandCheckedIds.push(option.id);
  //     if (option.type === "brands") {
  //       this.brandsCount += 1;
  //     } else if (option.type === "Manufacturers") {
  //       this.manufactureCount += 1;
  //     }
  //   } else {
  //     this.brandCheckedIds.splice(this.brandCheckedIds.indexOf(option.id), 1);
  //     if (option.type === "brands") {
  //       this.brandsCount = this.brandsCount !== 0 ? this.brandsCount - 1 : 0;
  //     } else if (option.type === "Manufacturers") {
  //       this.manufactureCount =
  //         this.manufactureCount !== 0 ? this.manufactureCount - 1 : 0;
  //     }
  //   }
  // };

  // public clearFilter = () => {
  //   this.isListLoaded = false;
  //   this.loading.present();
  //   this.brandCheckedIds = [];
  //   this.preChecked();
  //   this.manufactureCount = 0;
  //   this.brandsCount = 0;
  //   setTimeout(() => {
  //     this.isListLoaded = true;
  //     this.loading.dismiss();
  //   }, 2000);
  //   this.minimumValue = 0;
  //   this.maximumValue = 200000;
  //   this.rangeValue.upper = 200000;
  //   this.rangeValue.lower = 0;
  // };

  // async filter(evt) {
  //   this.filterList = this.filterListBackup;
  //   const searchTerm = evt.srcElement.value;

  //   if (!searchTerm) {
  //     this.filterList = this.filterListBackup;
  //     return;
  //   }

  //   this.filterList = this.filterList.filter((data) => {
  //     if (data.title && searchTerm) {
  //       return data.title.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
  //     }
  //   });
  // }

  // public applyFilters = () => {
  //   this.filterValue["Brand"] = this.brandCheckedIds;
  //   if (this.rangeValue) {
  //     this.filterValue["Minimum"] = this.rangeValue.lower;
  //     this.filterValue["Maximum"] = this.rangeValue.upper;
  //   }
  //   //  this.db.insertSelectedFilterIDs('id',this.filterValue);
  //   //  console.log("form value",this.filterValue);
  //   this.route.navigate([
  //     "./search",
  //     { data: JSON.stringify(this.filterValue) },
  //   ]);
  // };
}
