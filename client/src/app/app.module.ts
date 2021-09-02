import { BrowserModule } from "@angular/platform-browser";
import { ErrorHandler, NgModule } from "@angular/core";
import { IonicApp, IonicErrorHandler, IonicModule } from "ionic-angular";
import { SplashScreen } from "@ionic-native/splash-screen";
import { StatusBar } from "@ionic-native/status-bar";

import { MyApp } from "./app.component";
import { HomePage } from "../pages/home/home";
import { DetailsPageModule } from "../pages/details/details.module";
import { MenuPage } from "../pages/menu/menu";
import { IonicStorageModule } from "@ionic/storage";
import { CartPage } from "../pages/cart/cart";
import { IonicImageViewerModule } from "ionic-img-viewer";
import { MethodProvider } from "../providers/method/method";
import { HttpClientModule } from "@angular/common/http";
import { CreateProductPage } from "../pages/create-product/create-product";
import { ImagePicker } from "@ionic-native/image-picker/";
import { Camera } from "@ionic-native/camera";
import { LoginPage } from "../pages/login/login";
import { RegisterPage } from "../pages/register/register";
import { ProfilePage } from "../pages/profile/profile";
import { HttpModule } from "@angular/http";

import { WelcomePage } from "../pages/welcome/welcome";

import { postProvider } from "../providers/post-provider";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MenuPage,
    CartPage,
    CreateProductPage,
    LoginPage,
    RegisterPage,
    ProfilePage,
    WelcomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    DetailsPageModule,
    IonicStorageModule.forRoot(),
    IonicImageViewerModule,
    HttpClientModule,

    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    MenuPage,
    CartPage,
    CreateProductPage,
    LoginPage,
    RegisterPage,
    ProfilePage,
    WelcomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    MethodProvider,
    ImagePicker,

    postProvider
  ]
})
export class AppModule {}
