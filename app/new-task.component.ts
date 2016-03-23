import {Component, EventEmitter} from 'angular2/core';
import {Task} from './task.model';

@Component({
  selector: 'new-task',
  outputs: ['onSubmitNewTask'],
  template: `
    <div class="task-form">
    <h3>Create Task</h3>
    <input placeholder="Description" class="col-sm-8 input-lg" #newDescription>
    <select #newPriority>
      <option value="Low" selected>Low</option>
      <option value="Medium">Medium</option>
      <option value="High">High</option>
      </select>
    <button (click)="addTask(newDescription, newPriority)" class="btn-success btn-lg add-button">Add</button>
    </div>
    `
})
export class NewTaskComponent {
  public onSubmitNewTask: EventEmitter<any>;
  constructor(){
    this.onSubmitNewTask = new EventEmitter();
  }
  addTask(userDescription: HTMLInputElement, userPriority: HTMLInputElement ){
    var task = [userDescription.value, userPriority.value];
    this.onSubmitNewTask.emit(task);
    // this.onSubmitNewTask.emit(userDescription.value, userPriority);
    userDescription.value = "";
    userPriority.value = "";
  }
}
