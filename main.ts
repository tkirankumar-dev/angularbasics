// function ShoppingList() {
//   this.groceries = [];
// }

// ShoppingList.prototype.addItem = function(item) {
//   this.groceries = this.groceries.concat([item]); // this is the immutable way of doing push, which angular actually favors
//   // this.groceries.push(item);
// };

// ShoppingList.prototype.removeItem = function(item) {
//   this.groceries = this.groceries.filter(function(grocery) {
//     return item !== grocery;
//   }); // this is the immutable way of doing remove, which angular actually favors
// };

// var myList = new ShoppingList();
// myList.addItem("Banana");
// myList.addItem("Apple");
// myList.addItem("Mango");
// myList.addItem("Orange");
// console.log(myList.groceries);
// myList.removeItem("Banana");
// console.log(myList.groceries);

// ES 6 classes.
// class ShoppingList2 {
//   groceries: string[];
//   constructor() {
//     this.groceries = [];
//   }
//   addItem(item) {
//     this.groceries = [...this.groceries, item]; // add item to existing groceries item
//   }
//   removeItem(item) {
//     // Arrow function
//     // this.groceries = this.groceries.filter((grocery) => {
//     //     return item !== grocery;
//     // });
//     // short hand syntax - implicit return
//     this.groceries = this.groceries.filter(grocery => item !== grocery);
//   }
// }

// const myNewList = new ShoppingList2();
// myNewList.addItem("Banana");
// myNewList.addItem("Apple");
// myNewList.addItem("Mango");
// myNewList.addItem("Orange");
// //console.log(myNewList.groceries);
// myNewList.removeItem("Banana");
//console.log(myNewList.groceries);


// import { upperCase } from "./formatter"
// let myString : string = "Kiran";
// console.log(upperCase(myString));

// This actually have client side coding that processes our template all our bindings and allows us to do dependency injection 
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

platformBrowserDynamic().bootstrapModule(AppModule);
