import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { HomePage } from "../home/home";
import { Category } from "../../models/interface-category";
import { CartPage } from "../cart/cart";
import { ProfilePage } from "../profile/profile";

@IonicPage()
@Component({
  selector: "page-menu",
  templateUrl: "menu.html"
})
export class MenuPage {
  rootPage: any;
  categories: Category[];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.rootPage = HomePage;
    this.categories = [
      {
        title: "dresses",
        description: "description",
        icon: "shirt"
      },
      {
        title: "electronics",
        description: "description",
        icon: "phone-portrait"
      },
      {
        title: "mode and article",
        description: "description",
        icon: "bowtie"
      },
      {
        title: "shoes",
        description: "description",
        icon: "archive"
      }
    ];
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad MenuPage");
  }
  myCart() {
    this.navCtrl.push(CartPage);
  }
  profilePage() {
    this.navCtrl.push(ProfilePage);
  }
}
