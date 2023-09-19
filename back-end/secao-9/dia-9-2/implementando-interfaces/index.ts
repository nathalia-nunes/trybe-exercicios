interface Myinterface {
  myNumber: number;
  
  myFunc(myParam: number): string;
}

class MyClass implements Myinterface {
  constructor(public myNumber: number) { }

  myFunc(myParam: number): string {
    return `myNumber + myParam: ${this.myNumber + myParam}`;
  }
}

const myObject = new MyClass(2);
console.log(myObject.myNumber);
console.log(myObject.myFunc(3));