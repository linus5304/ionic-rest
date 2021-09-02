import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { postProvider } from "../../providers/post-provider";
import { ToastController } from "ionic-angular";
import { LoginPage } from "../login/login";

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-register",
  templateUrl: "register.html"
})
export class RegisterPage {
  gender = [];
  gend: string = "";
  full_name: string = "";
  username: string = "";
  phone_number: string = "";
  pass_word: string = "";
  email: string = "";
  confirm_password: string = "";

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public toastCtrl: ToastController,
    private postpvdr: postProvider
  ) {
    this.gender = [
      {
        title: "male"
      },
      {
        title: "female"
      }
    ];
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad RegisterPage");
  }
  loginForm(): void {
    this.navCtrl.pop();
  }
  // async register(user: User) {
  //   try {
  //   const result = await this.afAuth.auth.createUserWithEmailAndPassword(
  //   user.email,
  // user.password
  //);
  //console.log(result);
  //} catch (e) {
  //console.error(e);
  //}
  //}
  register() {
    if (this.full_name == "") {
      const toast = this.toastCtrl.create({
        message: "fullname is require",
        duration: 3000
      });
      toast.present();
      console.log(this.full_name);
    } else if (this.username == "") {
      const toast = this.toastCtrl.create({
        message: "username is require",
        duration: 3000
      });
      toast.present();
    } else if (this.pass_word == "") {
      const toast = this.toastCtrl.create({
        message: " invalid password",
        duration: 3000
      });
      toast.present();
    } else if (this.confirm_password != this.pass_word) {
      const toast = this.toastCtrl.create({
        message: " invalid password",
        duration: 3000
      });
      toast.present();
    } else if (this.email == "") {
      const toast = this.toastCtrl.create({
        message: "email is require",
        duration: 3000
      });
      toast.present();
    } else if (this.phone_number == "") {
      const toast = this.toastCtrl.create({
        message: "phone number is require",
        duration: 3000
      });
      toast.present();
    } else if (this.gend == "") {
      const toast = this.toastCtrl.create({
        message: "gender is require",
        duration: 3000
      });
      toast.present();
    } else {
      let body = {
        full_name: this.full_name,
        username: this.username,
        pass_word: this.pass_word,
        confirm_pasword: this.confirm_password,
        email: this.email,
        phone_number: this.phone_number,
        sex: this.gend,
        aksi: "register"
      };
      this.postpvdr.postData(body, "file_aski.php").subscribe(data => {
        var alertpesan = data.msg;
        if (data.success) {
          this.navCtrl.pop();
          const toast = this.toastCtrl.create({
            message: "register succesful",
            duration: 3000
          });
          toast.present();
        } else {
          const toast = this.toastCtrl.create({
            message: alertpesan,
            duration: 3000
          });
          toast.present();
        }
      });
    }
  }
}
