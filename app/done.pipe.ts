import {Pipe, PipeTransform} from 'angular2/core';
import {Task} from './task.model';

@Pipe({
  name: "done", //refer to the pipe
  pure: false //false because we want it to false initially
})
export class DonePipe implements PipeTransform {
  transform(input: Task[], args) {
    var desiredDoneState = args[0];
    // console.log(args);
    if(desiredDoneState === "done") {
      return input.filter((task) => {
        return task.done;
      });
    }else if (desiredDoneState === "notDone") {
      return input.filter((task) => {
        return !task.done;
      });
    } else {
      return input;
    }
  }
}
// export class DonePipe implements PipeTransform {
//   transform(input: Task[], args) {
//     console.log('selected task: ', args[1]);
//   }
// }
