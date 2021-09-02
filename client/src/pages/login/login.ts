import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { RegisterPage } from "../register/register";
import { HomePage } from "../home/home";
import { MenuPage } from "../menu/menu";
import { User } from "../../models/user";

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-login",
  templateUrl: "login.html"
})
export class LoginPage {
  user = {} as User;
  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad LoginPage");
  }
  registeForm(): void {
    this.navCtrl.push(RegisterPage);
  }
  menu() {
    this.navCtrl.push(MenuPage);
  }
  login(){

  }
}
