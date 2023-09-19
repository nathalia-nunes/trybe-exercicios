class Superclass {
  isSuper: boolean;

  constructos() {
    this.isSuper = true;
  }

  public sayHello(): void {
    console.log('Olá, mundo!');
  }
}

class Subclass extends Superclass {}

const myFunc = (object: Superclass) => {
  object.sayHello();
};

const sup = new Superclass();
const sub = new Subclass();