import {Component, OnInit} from '@angular/core';
import {Task} from '../task';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  newTasks: Task[];
  doneTasks: Task[];
  currentTask: Task;

  constructor() {
    this.newTasks = [];
    this.doneTasks = [];
    this.currentTask = new Task();
  }

  ngOnInit(): void {
  }

  addTodo() {
    if (this.currentTask.title !== '') {
      this.newTasks.push(this.currentTask);
      this.currentTask = new Task();
    }
  }

  onNewTaskRemove(index: number) {
    this.newTasks = this.newTasks.filter((x) => x.id !== index);
  }

  onDoneTaskRemove(index: number) {
    this.doneTasks = this.doneTasks.filter((x) => x.id !== index);
  }

  onIsDoneChanged(task: Task) {
    if (task.isDone) {
      this.onNewTaskRemove(task.id);
      this.doneTasks.push(task);
      this.doneTasks.sort((a, b) => a.id > b.id ? 1 : -1);
    } else {
      this.onDoneTaskRemove(task.id);
      this.newTasks.push(task);
      this.newTasks.sort((a, b) => a.id > b.id ? 1 : -1);
      // this.newTasks.sort(function (a, b) {
      //   if (a.id < b.id)
      //     return 1;
      //   return -1;
      // });
    }
  }

}
