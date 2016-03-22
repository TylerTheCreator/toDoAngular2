//this is not the greatest component in the world...
//this is just a tribute
// actual note : this is just the class defintion of a component

export class Task {
  public done: boolean = false;
  constructor(public description: string, public id: number, public priority: string) {

  }
}
