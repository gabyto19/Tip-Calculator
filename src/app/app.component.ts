import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'tip-calc';
  buttonArray: number[] = [5, 10, 15, 25, 50];

  inputValue = 'Custom';
  isActive = false;
  typeOfInput = 'text';
  tip: any = '0.00';
  total: any = '0.00';
  bill: any = null;
  person: any = 1;
  perOutLine = false;
  checkToggler = false;
  tipSaver = 0;
  customSaver: any = null;
  customVisibility = 'block';

  ngDoCheck() {
    this.checkBillAndPerson();
  }

  checkBillAndPerson() {
    if (this.bill && this.person) {
      this.total = this.bill / this.person;
      this.total = parseFloat(this.total.toFixed(2));
      this.checkToggler = true;
    } else {
      this.total = '0.00';
    }
    if (this.person) {
      this.perOutLine = false;
    }
    if (!this.customSaver) {
      if (this.tipSaver && this.bill) {
        this.tip = ((this.bill / 100) * this.tipSaver) / this.person;
        this.tip = parseFloat(this.tip.toFixed(2));
      }
    } else {
      if (this.customSaver && this.bill) {
        this.tip = ((this.bill / 100) * this.customSaver) / this.person;
        this.tip = parseFloat(this.tip.toFixed(2));
      }
    }
  }

  enterTip(number: any) {
    if (!this.person) {
      this.perOutLine = true;
    } else {
      this.perOutLine = false;
    }
    this.tipSaver = number;
    this.customVisibility = 'block';
    this.customSaver = null;
  }
  dissapearCustom() {
    this.customVisibility = 'none';
  }
  reset() {
    this.buttonArray = [5, 10, 15, 25, 50];
    this.inputValue = 'Custom';
    this.isActive = false;
    this.typeOfInput = 'text';
    this.tip = '0.00';
    this.total = '0.00';
    this.bill = null;
    this.person = 1;
    this.perOutLine = false;
    this.checkToggler = false;
    this.tipSaver = 0;
    this.customSaver = null;
    this.customVisibility = 'block';
  }
}
