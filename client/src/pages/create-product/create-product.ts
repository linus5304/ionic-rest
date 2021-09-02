import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  ActionSheetController
} from "ionic-angular";
import { Product, Availability } from "../../models/interface-products";
import { Camera, CameraOptions, DestinationType } from "@ionic-native/camera";
import {
  ImagePicker,
  ImagePickerOptions,
  OutputType
} from "@ionic-native/image-picker";

/**
 * Generated class for the CreateProductPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-create-product",
  templateUrl: "create-product.html"
})
export class CreateProductPage {
  product: Product = {
    title: "",
    description: "",
    pictures: [],
    id: "0",
    price: 0,
    category: "",
    state: "",

    availability: {
      available: false,
      type: "",
      feed: 0
    },
    city: "",
    averageStar: 1
  };
  myProduct: Product;
  myPhoto: any;
  categories = [];
  cities = [];
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public imagePicker: ImagePicker,
    public camera: Camera,
    public actionSheetCtrl: ActionSheetController
  ) {
    this.myProduct = {} as Product;
    this.myProduct.availability = {} as Availability;
    this.myProduct.pictures = [];
    this.categories = [
      {
        title: "dresses"
      },
      {
        title: "electronics"
      },
      {
        title: "mode and article"
      },
      {
        title: "shoes"
      }
    ];
    this.cities = [
      {
        name: "yaounde"
      },
      {
        name: "douala"
      },
      {
        name: "bafoussam"
      },
      {
        name: "limbe"
      },
      {
        name: "kribi"
      }
    ];
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad CreateProductPage");
  }
  create(myProduct: Product) {
    myProduct.id = "6";
    myProduct.createdAt = new Date();
    myProduct.averageStar = 1;
    myProduct.availability.available = true;
    console.log("myProduct = ", myProduct);
  }
  pick() {
    const options: CameraOptions = {
      quality: 70,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    };
    this.camera.getPicture(options).then(
      ImageData => {
        this.myPhoto = "data:image/jpeg;base64," + ImageData;
        this.myProduct.pictures = ImageData;
      },
      err => {}
    );
  }
  getImage() {
    const options: CameraOptions = {
      quality: 70,
      destinationType: this.camera.DestinationType.DATA_URL,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      saveToPhotoAlbum: false
    };
    this.camera.getPicture(options).then(
      ImageData => {
        this.myPhoto = "data:image/jpeg;base64," + ImageData;
        this.myProduct.pictures = ImageData;
      },
      err => {}
    );
  }
  crop() {
    const options: CameraOptions = {
      quality: 70,
      destinationType: this.camera.DestinationType.DATA_URL,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      saveToPhotoAlbum: false,
      allowEdit: true,
      targetWidth: 200,
      targetHeight: 100
    };
    this.camera.getPicture(options).then(
      ImageData => {
        this.myPhoto = "data:image/jpeg;base64," + ImageData;
        this.myProduct.pictures = ImageData;
      },
      err => {}
    );
  }
  pickImages() {
    let options: ImagePickerOptions = {
      maximumImagesCount: 4,
      outputType: OutputType.DATA_URL
    };

    this.imagePicker
      .getPictures(options)
      .then(results => {
        console.log("images = ", results);
        this.myProduct.pictures = results;
      })
      .catch(err => console.log("erreur", err));
  }
}
