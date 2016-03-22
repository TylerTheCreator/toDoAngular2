import { Component } from 'angular2/core';
import { Task } from './task.model';

@Component({ //decorator    //annotation is the whole thing
    selector: 'task-display',
    inputs: ['task'],
  templateUrl: 'app/task.component.html'
})
export class TaskComponent {
  public task: Task;  //declaration ?
  toggleDone(setState: boolean){
    this.task.done = setState;
  }
}


//The component's class declaration holds the data and methods
//needed to make the template HTML functional.
