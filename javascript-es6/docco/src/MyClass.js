import MySuperClass from './MySuperClass.js';

// this is MyClass.
export default class MyClass extends MySuperClass {
  constructor(p) {
    super(p);

    // this is p.
    this.p = p;
  }

  // this is method.
  method(p) {
  }
}
