import { Component } from "@angular/core";
import { ImageViewerController } from "ionic-img-viewer";
import {
  NavController,
  AlertController,
  ModalController,
  AlertOptions,
  ActionSheetController,
  ActionSheetOptions
} from "ionic-angular";
import { DetailsPage } from "../details/details";
import { Product } from "../../models/interface-products";
import { MethodProvider } from "../../providers/method/method";
import { CreateProductPage } from "../create-product/create-product";

@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  Articles: Product[];
  items: any;

  constructor(
    public navCtrl: NavController,
    public alertCtrl: AlertController,
    public actionCtrl: ActionSheetController,
    public modalCtrl: ModalController,
    public imageViewer: ImageViewerController,
    public method: MethodProvider
  ) {
    this.Articles = [
      {
        title: "T-SHIRT",
        description:
          "je sui la desje sui la desje sui la desje sui la desje sui la desje sui la desje sui la desje sui la desje sui la desje sui la des",
        price: 50,
        category: "dress",
        createdAt: new Date(),
        state: "new",
        id: "1",
        city: "yaounde",
        averageStar: 4,
        availability: {
          available: true,
          type: "livraison",

          feed: 10
        },
        pictures: [
          "assets/imgs/product1/img1.jpg",
          "assets/imgs/product1/img2.jpg",
          "assets/imgs/product1/img3.jpg",
          "assets/imgs/product1/img4.jpg"
        ]
      },
      {
        title: " AIR JORDAN",
        description:
          "je sui la desje sui la desje sui la desje sui la desje sui la desje sui la desje sui la desje sui la desje sui la desje sui la des",
        price: 80,
        category: "shoe",
        createdAt: new Date(),
        state: "new",
        id: "2",
        city: "yaounde",
        averageStar: 4,
        availability: {
          available: true,
          type: "livraison",

          feed: 10
        },
        pictures: [
          "assets/imgs/product3/shoe1.jpg",
          "assets/imgs/product3/shoe2.jpg",
          "assets/imgs/product3/shoe3.jpg",
          "assets/imgs/product3/shoe4.jpg"
        ]
      },
      {
        title: "computer",
        description:
          "je sui la desje sui la desje sui la desje sui la desje sui la desje sui la desje sui la desje sui la desje sui la desje sui la des",
        price: 100,
        category: "electronics",
        createdAt: new Date(),
        state: "new",
        id: "3",
        city: "yaounde",
        averageStar: 4,
        availability: {
          available: true,
          type: "livraison",

          feed: 10
        },
        pictures: [
          "assets/imgs/product5/computer1.jpg",
          "assets/imgs/product5/computer2.jpg",
          "assets/imgs/product5/computer3.jpg",
          "assets/imgs/product5/computer4.jpg"
        ]
      },
      {
        title: "makeup",
        description:
          "je sui la desje sui la desje sui la desje sui la desje sui la desje sui la desje sui la desje sui la desje sui la desje sui la des",
        price: 100,
        category: "mode and article",
        createdAt: new Date(),
        state: "new",
        id: "4",
        city: "yaounde",
        averageStar: 4,
        availability: {
          available: false,
          type: "on store",

          feed: 11
        },
        pictures: [
          "assets/imgs/product4/makeup1.jpg",
          "assets/imgs/product4/makeup2.jpg",
          "assets/imgs/product4/makeup3.jpg",
          "assets/imgs/product4/makeup4.jpg"
        ]
      },
      {
        title: "watch",
        description:
          "je sui la desje sui la desje sui la desje sui la desje sui la desje sui la desje sui la desje sui la desje sui la desje sui la des",
        price: 100,
        category: "electronics",
        createdAt: new Date(),
        state: "new",
        id: "5",
        city: "yaounde",
        averageStar: 4,
        availability: {
          available: true,
          type: "Livraison",
          feed: 12
        },
        pictures: [
          "assets/imgs/product2/watch1.jpg",
          "assets/imgs/product2/watch2.jpg",
          "assets/imgs/product2/watch3.jpg",
          "assets/imgs/product2/watch4.jpg"
        ]
      }
    ];
    this.initializeItems();
  }
  showDetails(article: Product): void {
    this.navCtrl.push(DetailsPage, { data: article });
  }
  showImage(picture: any, event): void {
    //  event.stopPropagation();
    // this.imageViewer.create(picture).present();
    return this.method.showImage(picture, event);
  }
  showCreatePage() {
    this.navCtrl.push(CreateProductPage);
  }
  initializeItems() {
    this.items = this.Articles;
  }

  getItems(ev: any) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the searchbar
    const val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != "") {
      this.items = this.items.filter(item => {
        return item.title.toLowerCase().indexOf(val.toLowerCase()) > -1;
      });
    }
  }
}
