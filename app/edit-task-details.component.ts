import {Component} from 'angular2/core';
import {Task} from './task.model';

@Component({
  selector: 'edit-task-details',
  inputs: ['task'],
  template:
// TWO WAY DATABINDING! ngModel special directive
// When we display the description, data is just moving out, from the model to the view. We want to go the other way too - we want to enter a new description into the view using a form and have it travel back through the controller to the model and change the value of the property. We can do that with a special directive called [(ngModel)].
  `
    <div class="task-form">
      <h3>Edit Description: </h3>
      <input [(ngModel)]="task.description" class="col-sm-8 input-lg task-form"/>
    </div>
  `
})
export class EditTaskDetailsComponent {
  public task: Task;
}
