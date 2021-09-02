import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  Events,
  ModalController,
  ToastController,
  ToastOptions
} from "ionic-angular";
import { Product } from "../../models/interface-products";
import { Storage } from "@ionic/storage";
import { itemCart } from "../../models/interface-itemCart";
import { CartPage } from "../cart/cart";
import { MethodProvider } from "../../providers/method/method";
import { ImageViewerController } from "ionic-img-viewer";
@IonicPage()
@Component({
  selector: "page-details",
  templateUrl: "details.html"
})
export class DetailsPage {
  productDetails: Product;
  nom: string;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public event: Events,
    public storage: Storage,
    public modal: ModalController,
    public toast: ToastController,
    public method: MethodProvider,
    public imageViewer: ImageViewerController
  ) {
    this.productDetails = this.navParams.get("data");
    this.event.subscribe("star-rating:changed", note => {
      console.log("this is the note", note);
    });
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad DetailsPage");
  }
  goBack(): void {
    this.navCtrl.pop();
  }
  addToCart(productDetails: Product): void {
    let added: boolean = false;
    //if the cart is emopty
    this.storage.get("Cart").then((data: itemCart[]) => {
      if (data === null || data.length === 0) {
        data = [];
        data.push({
          item: productDetails,
          qty: 1,
          amount: productDetails.price
        });
      } else {
        //the cart is not empty
        for (let i = 0; i < data.length; i++) {
          const element: itemCart = data[i];
          if (productDetails.id === element.item.id) {
            // the cart dont have the article
            element.qty += 1;
            element.amount += productDetails.price;
            added = true;
          }
        }
        if (!added) {
          //the cart dont hav the article
          data.push({
            item: productDetails,
            qty: 1,
            amount: productDetails.price
          });
        }
      }
      this.storage
        .set("Cart", data)
        .then(data => {
          let options: ToastOptions = {
            message: "your cart has been updated",
            duration: 1500,
            showCloseButton: true,
            closeButtonText: "close"
          };
          this.toast.create(options).present();
        })
        .catch(err => {
          console.log("erreur", err);
        });
    });
  }
  openCart(): void {
    this.modal.create(CartPage).present();
  }
  showImage(picture: any, event): void {
    //event.stopPropagation();
    //this.imageViewer.create(picture).present();
    return this.method.showImage(picture, event);
  }
}
