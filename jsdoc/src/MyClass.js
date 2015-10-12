import MySuperClass from './MySuperClass.js';

export default class MyClass extends MySuperClass {
  /**
   * this is MyClass.
   * @tutorial MyClass
   * @param {number} p - this is p.
   */
  constructor(p) {
    super(p);
    /**
     * this is p.
     * @type {number}
     */
    this.p = p;
  }

  /**
   * this is method.
   * @param {number} p - this is p.
   * @return {string} this is result.
   */
  method(p) {
  }
}
