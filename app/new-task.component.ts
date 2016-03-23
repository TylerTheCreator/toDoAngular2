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
    <select #newCategory>
      <option value="Home" selected>Home</option>
      <option value="Work">Work</option>
    </select>
    <button (click)="addTask(newDescription, newPriority, newCategory)" class="btn-success btn-lg add-button">Add</button>
    </div>
    `
})
export class NewTaskComponent {
  public onSubmitNewTask: EventEmitter<any>;
  constructor(){
    this.onSubmitNewTask = new EventEmitter();
  }
  addTask(userDescription: HTMLInputElement, userPriority: HTMLInputElement, userCategory: HTMLInputElement){
    var task = [userDescription.value, userPriority.value, userCategory.value];
    this.onSubmitNewTask.emit(task);
    // this.onSubmitNewTask.emit(userDescription.value, userPriority);
    userDescription.value = "";
    userPriority.value = "";
    userCategory.value = "";
  }
}
