import MySuperClass from './MySuperClass.js';

/**
 * this is MyClass.
 * @class
 * @extends MySuperClass
 */
export default class MyClass extends MySuperClass {
  /**
   * this is constructor.
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
