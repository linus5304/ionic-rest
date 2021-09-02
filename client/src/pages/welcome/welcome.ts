import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { LoginPage } from "../login/login";

/**
 * Generated class for the WelcomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-welcome",
  templateUrl: "welcome.html"
})
export class WelcomePage {
  slides = [
    {
      title: "Welcome to the Docs!",
      description:
        "The <b>Ionic Component Documentation</b> showcases a number of useful components that are included out of the box with Ionic.",
      image: "../../assets/imgs/slide/ec4.png"
    },
    {
      title: "What is Ionic?",
      description:
        "<b>Ionic Framework</b> is an open source SDK that enables developers to build high quality mobile apps with web technologies like HTML, CSS, and JavaScript.",
      image: "../../assets/imgs/slide/ec2.jfif"
    },
    {
      title: "What is Ionic Cloud?",
      description:
        "The <b>Ionic Cloud</b> is a cloud platform for managing and scaling Ionic apps with integrated services like push notifications, native builds, user auth, and live updating.",
      image: "../../assets/imgs/slide/ec3.jfif"
    }
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad WelcomePage");
  }
  login() {
    this.navCtrl.push(LoginPage);
  }
}
