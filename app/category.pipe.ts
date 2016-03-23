import {Pipe, PipeTransform} from 'angular2/core';
import {Task} from './task.model';


@Pipe({
  name: "category",
  pure: false  // can we do this without a boolean case
})

export class CategoryStatePipe implements PipeTransform{
  transform(input: Task[], args){
    var desiredDoneState = args[0];
    if(desiredDoneState === "Work") {
      return input.filter((task) => {
        return task.category === "Work";
      });
    } else if (desiredDoneState === "Home") {
      return input.filter((task)=> {
        return task.category === "Home";
      });
    } else {
      return input;
    }
  }// end of transform
} // end of class
