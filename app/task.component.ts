import { Component } from 'angular2/core';
import { Task } from './task.model';

@Component({ //decorator    //annotation is the whole thing
    selector: 'task-display',
    inputs: ['task'],
  template:  `
      <div>
        <input *ngIf="task.done" type="checkbox" checked (click)="toggleDone(false)"/>
        <input *ngIf="!task.done" type="checkbox" (click)="toggleDone(true)"/>
        <label>{{ task.description }} | Priority: {{ task.priority }} | Category: {{ task.category }}</label>
      </div>
  `
})
export class TaskComponent {
  public task: Task;  //declaration ?
  toggleDone(setState: boolean){
    this.task.done = setState;
  }
}


//The component's class declaration holds the data and methods
//needed to make the template HTML functional.
