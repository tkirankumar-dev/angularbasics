import { Component } from "@angular/core";
interface Child {
  name: string;
  age: number;
}
interface Passenger {
  id: number;
  fullname: string;
  checkedIn: boolean;
  checkedInDate: number | null;
  children: Child[] | null; // Array of child objects
}

// all the variables in AppComponent will be available in this @Component scope.
// {{ }} - code interpolation
@Component({
  selector: "app-root",
  styleUrls: ["app.component.scss"],
  templateUrl: "./app.component.html"
})
export class AppComponent {
  passengers: Passenger[] = [
    {
      id: 1,
      fullname: "Stephen",
      checkedIn: true,
      checkedInDate: 1490742000000,
      children: [
        { name: "Ted", age: 12 },
        { name: "Chloe", age: 7 }
      ]
    },
    {
      id: 2,
      fullname: "Rose",
      checkedIn: false,
      checkedInDate: 1491606000000,
      children: null
    },
    {
      id: 3,
      fullname: "James",
      checkedIn: true,
      checkedInDate: null,
      children: [{ name: "Jessica", age: 1 }]
    },
    {
      id: 4,
      fullname: "Louise",
      checkedIn: true,
      checkedInDate: 1516606000000,
      children: null
    },
    {
      id: 5,
      fullname: "Meena",
      checkedIn: false,
      checkedInDate: null,
      children: [{ name: "Reshi", age: 3 }]
    }
  ];

  nameIfSyntax: string = "";
  handleChangeSyntax(value: string) {
    this.nameIfSyntax = value;
  }

  refVariable: string = "ProArch";
  handleRefClick(value: string) {
    this.refVariable = value;
  }

  nameExt: string = "Meena";
  nameExt1: string = "Reshi";
  handleChange(value: string) {
    this.nameExt = value;
  }

  name: string = "Kiran";
  handleBlur(event: any) {
    this.name = event.target.value;
    console.log(event);
  }
  handleInput(event: any) {
    this.name = event.target.value;
  }
  handleClick() {
    this.name = "Kumar";
  }
  title: string;
  numberOne: number = 1;
  numberTwo: number = 2;
  isHappy: boolean = true;
  logo: string = "img/logo.jpg";
  constructor() {
    this.title = "Welcome to ProArch";
  }
}

function upperCase(value: string): string {
  return value.toUpperCase();
}

var name = upperCase("kiran");
console.log(name);
