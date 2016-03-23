import {Pipe, PipeTransform} from 'angular2/core';
import {Task} from './task.model';


@Pipe({
  name: "priority",
  pure: false  // can we do this without a boolean case
})

export class PriorityStatePipe implements PipeTransform {
  transform(input: Task[], args) {  //this method transforms the array Task[]??
    var desiredDoneState = args[0];
    if(desiredDoneState === "High") {
      return input.filter((task) => {
        console.log(task.priority);
        return task.priority === "High";
      });
    } else if (desiredDoneState === "Low") {
      return input.filter((task) => {
        return task.priority === "Low";
      });
    } else {
      return input;
    }
  }
}
