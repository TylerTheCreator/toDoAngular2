import { Component, EventEmitter } from 'angular2/core';
import { TaskComponent } from './task.component';
import { Task } from './task.model';
import { EditTaskDetailsComponent } from './edit-task-details.component';
import { NewTaskComponent } from './new-task.component';
import {DonePipe} from './done.pipe';
import {PriorityStatePipe} from './priority.pipe';
import {CategoryStatePipe } from './category.pipe';

@Component({
  selector: 'task-list',
  inputs: ['taskList'],
  outputs: ['onTaskSelect'],
  pipes: [DonePipe, PriorityStatePipe, CategoryStatePipe],
  directives: [TaskComponent, EditTaskDetailsComponent, NewTaskComponent],
  template: `
  <select (change)="onChange($event.target.value)" class="filter">
    <option value="all" selected>Show All</option>
    <option value="done">Show Done</option>
    <option value="notDone" >Show Not Done</option>
  </select>
  <select (change)="onChangePriority($event.target.value)" class="filter">
    <option value="Low">Low</option>
    <option value="Medium">Medium</option>
    <option value="High">High</option>
    <option value="All" selected>All</option>
  </select>
  <select (change)="onChangeCategory($event.target.value)" class="filter">
    <option value="Home">Home</option>
    <option value="Work">Work</option>
    <option value="All" selected>All</option>
  </select>
  <task-display *ngFor="#currentTask of taskList | done:filterDone | category:filterCategory"
    (click)="taskClicked(currentTask)"
    [class.selected]="currentTask === selectedTask"
    [task]="currentTask">
  </task-display>
  <edit-task-details *ngIf="selectedTask" [task]="selectedTask">
  </edit-task-details>
  <new-task (onSubmitNewTask)="createTask($event)"></new-task>
  `
})
export class TaskListComponent {
  public taskList: Task[];
  public onTaskSelect: EventEmitter<Task>;
  public selectedTask: Task;
  public filterDone: string = "All";
  public filterPriority: string = "High";
  public filterCategory: string = "All";
  constructor() {
    this.onTaskSelect = new EventEmitter();
  }
  taskClicked(clickedTask: Task): void {
    // console.log("child", clickedTask);
    this.selectedTask = clickedTask;
    this.onTaskSelect.emit(clickedTask);
  }
  createTask(task: any): void {
    this.taskList.push(
      new Task(task[0], task[1], task[2], this.taskList.length)
      // new Task(description, priority, this.taskList.length)
    );
  }
  onChange(filterOption) {
    this.filterDone = filterOption;
  }
  onChangePriority(filterOption) {
    this.filterPriority = filterOption;
  }
  onChangeCategory(filterOption) {
    this.filterCategory = filterOption
  }
}
