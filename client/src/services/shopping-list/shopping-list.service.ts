import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "angularfire2/database";
import { Product } from "../../models/interface-products";

@Injectable()
export class ShoppingListService {
  private shoppingListRef = this.db.list<Product>("shopping-list");
  constructor(private db: AngularFireDatabase) {}
  getShoppingList() {
    return this.shoppingListRef;
  }
  addProduct(product: Product) {
    return this.shoppingListRef.push(product);
  }
}
