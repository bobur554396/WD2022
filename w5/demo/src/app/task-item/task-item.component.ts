import {Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output} from '@angular/core';
import {Task} from '../task';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit, OnChanges, OnDestroy {
  @Input() task: Task;
  @Output() remove = new EventEmitter();
  @Output() done = new EventEmitter();

  constructor() {
    console.log('TaskItemComponent: constructor');
  }

  ngOnInit(): void {
    // fetch data from other resources here
    console.log('TaskItemComponent: ng in init');
  }

  ngOnChanges(): void {
    console.log('TaskItemComponent: ng on change');
  }

  ngOnDestroy(): void {
    console.log('TaskItemComponent: ng on destroy');
  }

  removeTask(index: number) {
    this.remove.emit(index);
  }

  isDoneChanged() {
    this.done.emit(this.task);
  }

}



// interface Animal {
//   run();
//
//   sleep();
// }
//
// class Dog implements Animal {
//   run() {
//   }
//
//   sleep() {
//   }
// }
//
// class Cat implements Animal {
//   run() {
//   }
//
//   sleep() {
//   }
// }

