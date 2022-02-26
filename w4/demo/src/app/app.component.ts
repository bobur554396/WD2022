import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'KBTU';
  num: number;
  message: string;
  numbers: number[];
  students: any[];
  isOk: boolean;
  inputData: string;
  items: string[];

  constructor() {
    console.log('constructor is running');

    this.num = 2;
    this.message = 'Our message';
    this.numbers = [2, 5, 7, 8, 10];
    this.students = [
      {
        id: '21BD123123',
        name: 'Student 1',
        gpa: 3.7
      },
      {
        id: '21BD123123',
        name: 'Student 2',
        gpa: 3.8
      },
      {
        id: '21BD123123',
        name: 'Student 3',
        gpa: 4.0
      },
    ];
    this.isOk = true;
    this.inputData = '';
    this.items = [];

  }

  btnClick(){
    // if(this.isOk)
    //   this.isOk = false;
    // else {
    //   this.isOk = true;
    // }
    this.isOk = !this.isOk;
  }

  addItem(){
    this.items.push(this.inputData);
    this.inputData = '';
  }

  deleteItem(index: number){
    this.items.splice(index, 1);
  }

}
